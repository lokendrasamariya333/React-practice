import { useState } from "react";
import type { TaskStatusFilter } from "../types/task";
import type {
  Task,
} from "../types/task";

import {
  filterTasksByStatus,
  updateTaskStatus,
} from "../utils/taskFilters";

import { TaskItem } from "./TaskItem";

type TaskBoardProps = {
  initialTasks: Task[];
};

export function TaskBoard({
  initialTasks,
}: TaskBoardProps) {
  const [tasks, setTasks] =
    useState(initialTasks);

  const [filter, setFilter] =
    useState<TaskStatusFilter>("all");

  const filteredTasks =
    filterTasksByStatus(
      tasks,
      filter,
    );

  function handleStatusChange(
    taskId: number,
    status:
      | "pending"
      | "in_progress"
      | "done",
  ) {
    const updatedTasks =
      updateTaskStatus(
        tasks,
        taskId,
        status,
      );

    setTasks(updatedTasks);
  }

  return (
    <div>
      <h2>Task Board</h2>

      <div>
        <button
          onClick={() =>
            setFilter("all")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setFilter("pending")
          }
        >
          Pending
        </button>

        <button
          onClick={() =>
            setFilter("in_progress")
          }
        >
          In Progress
        </button>

        <button
          onClick={() =>
            setFilter("done")
          }
        >
          Done
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>
          No tasks match this filter
        </p>
      ) : (
        <ul>
          {filteredTasks.map(
            (task) => (
              <TaskItem
                key={task.id}
                task={task}
                onStatusChange={
                  handleStatusChange
                }
              />
            ),
          )}
        </ul>
      )}
    </div>
  );
}