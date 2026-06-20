import type { Task, TaskStatus } from "../types/task";

export function filterTasksByStatus(tasks: Task[], status: TaskStatus | "all"): Task[] {
  if (status === "all") {
    return [...tasks];
  }
  return tasks.filter(function(task) {
    return task.status === status;
  });
}

export function updateTaskStatus(tasks: Task[], taskId: number, status: TaskStatus): Task[] {
  return tasks.map(function(task) {
    if (task.id === taskId) {
      return { ...task, status: status };
    }
    return task;
  });
}