import { Todo } from "./Example";

type TaskListProps = {
  todos: Todo[];
};

export const TaskList: React.FC<TaskListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};
