import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../Redux/filtersSlice';

const SortButtons: React.FC = () => {
  const dispatch = useDispatch();

  const [alignment, setAlignment] = useState('all');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
    dispatch(setStatusFilter(newAlignment));
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <ToggleButtonGroup
        color='info'
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label='Platform'
      >
        <ToggleButton value='all'>all</ToggleButton>
        <ToggleButton value='completed'>done</ToggleButton>
        <ToggleButton value='active'>todo</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SortButtons;
