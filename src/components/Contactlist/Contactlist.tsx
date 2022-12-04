import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import SortButtons from '../SortButtons/SortButtons';
import DeletelistButtons from '../DeleteListButtons/DeleteListButtons';

const ContactsList: React.FC = () => {
  return (
    <Paper
      elevation={6}
      sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 4, mt: 4 }}
    >
      <SortButtons />
      <List disablePadding>
        <ListItem divider sx={{ justifyContent: 'space-between' }}>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptates.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Checkbox defaultChecked />
            <Button variant='contained'>Edit</Button>
            <Button variant='contained'>Delete</Button>
          </Box>
        </ListItem>
        <ListItem divider sx={{ justifyContent: 'space-between' }}>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptates.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Checkbox defaultChecked />
            <Button variant='contained'>Edit</Button>
            <Button variant='contained'>Delete</Button>
          </Box>
        </ListItem>
        <ListItem divider sx={{ justifyContent: 'space-between' }}>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptates.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Checkbox defaultChecked />
            <Button variant='contained'>Edit</Button>
            <Button variant='contained'>Delete</Button>
          </Box>
        </ListItem>
      </List>
      <DeletelistButtons />
    </Paper>
  );
};

export default ContactsList;
