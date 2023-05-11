import { Box, Button, Card, Modal, TextField } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import { useKeyDown } from '../../../hooks/useKeyDown';
import CommentCard from './components/CommentCard';
import Cookies from 'js-cookie';
import Axios from '../../AxiosInstance';
import { AxiosError } from 'axios';
import GlobalContext from '../../../share/Context/GlobalContext';

const CommentModal = ({ open = false, handleClose = () => {} }) => {
  const [textField, setTextField] = useState('');
  const [comments, setComments] = useState([]);
  const { setStatus } = useContext(GlobalContext);

  const userToken = Cookies.get('UserToken');

  const isLoggedIn = () => {
    if (userToken == null || userToken == 'undefined') return false;
    else return true;
  };

  useEffect(() => {
    const renderComments = setInterval(() => {
      if (isLoggedIn) {
        try {
          Axios.get('/comment', { headers: { Authorization: `Bearer ${userToken}` } }).then((res) => {
            const modComments = res.data.data.map(({ id, text }) => ({ id, msg: text }));
            setComments(modComments);
          });
        } catch (error) {
          if (error instanceof AxiosError && error.response) {
            setStatus({
              severity: 'error',
              msg: error.response.data.error,
            });
          } else {
            setStatus({
              severity: 'error',
              msg: error.message,
            });
          }
        }
      }
    }, 5000);
    () => {
      clearInterval(renderComments);
    };
  }, [userToken]);

  useKeyDown(() => {
    handleAddComment();
  }, ['Enter']);

  const handleAddComment = async () => {
    if (isLoggedIn) {
      if (textField.trim().length == 0) {
        setStatus({ severity: 'error', msg: 'Input cannot be blank' });
      } else {
        setTextField('');
        try {
          const newComment = { text: textField };
          const response = await Axios.post('/comment', newComment, {
            headers: { Authorization: `Bearer ${userToken}` },
          });

          if (response.data.success) {
            setStatus({ severity: 'success', msg: 'Create note successfully' });
            setComments((prev) => [...prev, { id: response.data.data.id, msg: response.data.data.text }]);
          }
        } catch (error) {
          if (error instanceof AxiosError && error.response) {
            setStatus({
              severity: 'error',
              msg: error.response.data.error,
            });
          } else {
            setStatus({
              severity: 'error',
              msg: error.message,
            });
          }
        }
      }
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          width: { xs: '60vw', lg: '40vw' },
          maxWidth: '600px',
          maxHeight: '400px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '16px',
          backgroundColor: '#ffffffCC',
          p: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <TextField
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
            fullWidth
            placeholder="Type your comment"
            variant="standard"
          />
          <Button onClick={handleAddComment}>Submit</Button>
        </Box>
        <Box
          sx={{
            overflowY: 'scroll',
            maxHeight: 'calc(400px - 2rem)',
            '&::-webkit-scrollbar': {
              width: '.5rem', // chromium and safari
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#999999',
              borderRadius: '10px',
            },
          }}
        >
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </Box>
      </Card>
    </Modal>
  );
};

export default CommentModal;
