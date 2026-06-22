import type {
  Task,
  TaskStatus,
} from "../types/task";

export type TaskStatusFilter =
  | "all"
  | TaskStatus;

export function filterTasksByStatus(
  tasks: Task[],
  status: TaskStatusFilter,
): Task[] {
  if (status === "all") {
    return [...tasks];
  }

  return tasks.filter(
    (task) => task.status === status,
  );
}

export function updateTaskStatus(
  tasks: Task[],
  taskId: number,
  status: TaskStatus,
): Task[] {
  return tasks.map((task) =>
    task.id === taskId
      ? {
          ...task,
          status,
        }
      : task,
  );
}