export type TaskStatus = "pending" | "in_progress" | "done";
export type TaskStatusFilter = "all"| TaskStatus;
export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};