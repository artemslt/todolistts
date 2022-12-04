import React from 'react';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  return (
    <>
      <Typography variant='h1' my={2} align='center' sx={{ textTransform: 'uppercase' }}>
        to do list
      </Typography>
    </>
  );
};

export default Header;
