export interface IAddTodo {
  userId: number;
  id: any;
  title: string;
  completed: boolean;
}

export interface ITodosState {
  list: IAddTodo[];
  loading: boolean;
  error: string | null;
}