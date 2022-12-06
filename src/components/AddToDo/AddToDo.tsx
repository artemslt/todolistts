import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/tasksSlice';

const AddToDo: React.FC = () => {
  const dispath = useDispatch();

  const addNewtask = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(addTask(e.target.addToDo.value));
    e.target.reset();
  };

  return (
    <Paper
      component='form'
      elevation={6}
      sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 4 }}
      noValidate
      autoComplete='off'
      onSubmit={addNewtask}
    >
      <TextField label='Filled success' variant='outlined' focused name='addToDo' />
      <Button type='submit' variant='contained'>
        add to do
      </Button>
    </Paper>
  );
};

export default AddToDo;
