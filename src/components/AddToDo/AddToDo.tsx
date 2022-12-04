import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

const AddToDo: React.FC = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(e.target.addToDo.value);
  };
  return (
    <Paper
      component='form'
      elevation={6}
      sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 4 }}
      noValidate
      autoComplete='off'
      onSubmit={handleClick}
    >
      <TextField label='Filled success' variant='outlined' focused name='addToDo' />
      <Button type='submit' variant='contained'>
        add to do
      </Button>
    </Paper>
  );
};

export default AddToDo;
