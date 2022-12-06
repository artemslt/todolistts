import React from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import SortButtons from '../SortButtons/SortButtons';
import DeletelistButtons from '../DeleteListButtons/DeleteListButtons';
import { useSelector } from 'react-redux';
import { getStatusFilter, getTasks } from '../../Redux/selectors';
import { statusFilters } from '../../Redux/constants';
import ContactItem from '../ContactItem/ContactItem';

interface IItem {
  id: string;
  text: string;
  completed: boolean;
}

const getVisibleTasks = (tasks: IItem[], statusFilter: string) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const ContactsList: React.FC = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <Paper
      elevation={6}
      sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 4, mt: 4 }}
    >
      <SortButtons />
      <List disablePadding>
        {visibleTasks.map((task: IItem) => {
          return <ContactItem key={task.id} {...task} />;
        })}
      </List>
      <DeletelistButtons />
    </Paper>
  );
};

export default ContactsList;
