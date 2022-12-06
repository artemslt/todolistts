import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../Redux/tasksSlice';
import BasicModal from '../Modal/Modal';

interface IItem {
  id: string;
  text: string;
  completed: boolean;
}

const ContactItem: React.FC<IItem> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  return (
    <div>
      <ListItem divider sx={{ justifyContent: 'space-between' }}>
        <Typography>{props.text}</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Checkbox
            checked={props.completed}
            onChange={() => dispatch(toggleCompleted(props.id))}
          />
          <Button variant='contained' onClick={handleOpen}>
            Edit
          </Button>
          <Button variant='contained' onClick={() => dispatch(deleteTask(props.id))}>
            Delete
          </Button>
        </Box>
      </ListItem>
      <BasicModal id={props.id} taskText={props.text} open={open} handleClose={handleClose} />
    </div>
  );
};

export default ContactItem;
