import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const DeletelistButtons: React.FC = () => {
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
        <Button key='delete all tasks'>delete all tasks</Button>
        <Button key='delete done tasks'>delete done tasks</Button>
      </ButtonGroup>
    </Box>
  );
};

export default DeletelistButtons;
