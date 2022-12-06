import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { updateTask } from '../../Redux/tasksSlice';
import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #35303059',
  borderRadius: 2,
  boxShadow: 24,
  p: 4
};

interface Iprops {
  id: string;
  open: boolean;
  handleClose: () => void;
  taskText: string;
}

const BasicModal: React.FC<Iprops> = ({ open, id, handleClose, taskText }) => {
  const [text, setText] = useState<string>(taskText);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setText(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTask({ id, text }));
    e.target.reset();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Paper
          component='form'
          elevation={6}
          sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 4 }}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <TextField
            label='Filled success'
            variant='outlined'
            focused
            name='updateTask'
            value={text}
            onChange={handleChange}
          />
          <Button type='submit' variant='contained'>
            update to do
          </Button>
        </Paper>{' '}
      </Box>
    </Modal>
  );
};

export default BasicModal;
