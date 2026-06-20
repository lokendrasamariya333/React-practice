import type { Task, TaskStatus} from "../types/task";

type TaskItemProps = {
  task: Task;
  onStatusChange: (taskId: number, status: TaskStatus) => void;
};

export function TaskItem({ task, onStatusChange }: TaskItemProps) {

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = event.target.value as TaskStatus;
    onStatusChange(task.id, newStatus);
  }

  return (
    <li>
      <strong>{task.title}</strong>
      {" - "}
      <span>{task.status}</span>
      {" "}
      <select value={task.status} onChange={handleSelectChange}>
        <option value="pending">pending</option>
        <option value="in_progress">in_progress</option>
        <option value="done">done</option>
      </select>
    </li>
  );
}