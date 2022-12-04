import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const SortButtons: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <ButtonGroup size='large' variant='text' aria-label='large button group'>
        <Button key='All'>All</Button>
        <Button key='Done'>Done</Button>
        <Button key='Todo'>Todo</Button>
      </ButtonGroup>
    </Box>
  );
};

export default SortButtons;
