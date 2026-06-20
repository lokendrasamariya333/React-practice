import { useState } from "react";
import type { Task, TaskStatus, TaskStatusFilter } from "../types/task";
import { filterTasksByStatus, updateTaskStatus } from "../utils/taskFilters";
import { TaskItem } from "./TaskItem";

type TaskBoardProps = {
  initialTasks: Task[];
};

const ALL_FILTERS: TaskStatusFilter[] = ["all", "pending", "in_progress", "done"];

export function TaskBoard({ initialTasks }: TaskBoardProps) {

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeFilter, setActiveFilter] = useState<TaskStatusFilter>("all");

  function handleStatusChange(taskId: number, newStatus: TaskStatus) {
    const updatedTasks = updateTaskStatus(tasks, taskId, newStatus);
    setTasks(updatedTasks);
  }

  const filteredTasks = filterTasksByStatus(tasks, activeFilter);

  return (
    <div>
      <h3>Task Board</h3>

      <div>
        {ALL_FILTERS.map(function(filter) {
          return (
            <button key={filter} onClick={function() { setActiveFilter(filter); }}>
              {filter}
            </button>
          );
        })}
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks match this filter</p>
      ) : (
        <ul>
          {filteredTasks.map(function(task) {
            return (
              <TaskItem
                key={task.id}
                task={task}
                onStatusChange={handleStatusChange}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}