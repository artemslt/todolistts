interface IItem {
  id: string;
  text: string;
  completed: boolean;
}

export const getTasks = (state: { tasks: IItem[] }) => state.tasks;

export const getStatusFilter = (state: { filters: { status: string } }) => state.filters.status;
