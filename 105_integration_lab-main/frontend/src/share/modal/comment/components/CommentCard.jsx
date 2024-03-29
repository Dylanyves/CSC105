import { Button, Card, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Axios from '../../../../share/AxiosInstance';
import Cookies from 'js-cookie';

const CommentCard = ({ comment = { id: -1, msg: '' } }) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [functionMode, setFunctionMode] = useState('update');
  const [msg, setMsg] = useState(comment.msg);

  const userToken = Cookies.get('UserToken');

  const submit = useCallback(() => {
    if (functionMode === 'update') {
      // TODO implement update logic

      try {
        // 2. call API to update note...
        Axios.patch(
          '/comment',
          {
            commentId: comment.id,
            text: msg,
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        ).then((res) => {
          if (res.data.success) {
            console.log('updated');
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else if (functionMode === 'delete') {
      // TODO implement delete logic
      Axios.delete('/comment', {
        headers: { Authorization: `Bearer ${userToken}` },
        data: { commentId: comment.id },
      }).then((res) => {
        console.log('success');
      });
    } else {
      // TODO setStatus (snackbar) to error
      console.log('error');
    }
  }, [functionMode]);

  const changeMode = (mode) => {
    setFunctionMode(mode);
    setIsConfirm(true);
  };

  const cancelAction = () => {
    setFunctionMode('');
    setIsConfirm(false);
  };

  return (
    <Card sx={{ p: '1rem', m: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      {!(isConfirm && functionMode == 'update') ? (
        <Typography sx={{ flex: 1 }}>{comment.msg}</Typography>
      ) : (
        <TextField sx={{ flex: 1 }} value={msg} onChange={(e) => setMsg(e.target.value)} />
      )}
      {!isConfirm ? (
        <Button onClick={() => changeMode('update')} variant="outlined" color="info">
          update
        </Button>
      ) : (
        <Button onClick={submit} variant="outlined" color="success">
          confirm
        </Button>
      )}
      {!isConfirm ? (
        <Button onClick={() => changeMode('delete')} variant="outlined" color="error">
          delete
        </Button>
      ) : (
        <Button onClick={cancelAction} variant="outlined" color="error">
          cancel
        </Button>
      )}
    </Card>
  );
};

export default CommentCard;
