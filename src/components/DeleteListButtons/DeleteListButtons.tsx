import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { deleteAllTasks, deleteDoneTasks } from '../../Redux/tasksSlice';

const DeletelistButtons: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <ButtonGroup
        size='large'
        variant='contained'
        aria-label='large button group'
        fullWidth
        color='warning'
      >
        <Button
          key='delete all tasks'
          onClick={() => {
            dispatch(deleteAllTasks());
          }}
        >
          delete all tasks
        </Button>
        <Button key='delete done tasks' onClick={() => dispatch(deleteDoneTasks())}>
          delete done tasks
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default DeletelistButtons;
