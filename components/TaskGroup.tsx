"use client";
import React from "react";
import TaskRow from "./TaskRow"; // Task row rendering
import TaskGroupHeader from "./TaskGroupHeader"; // Header for task group
import AddTaskButton from "./AddTaskButton"; // Add Task button
import EditTaskModal from "./EditTaskModal"; // Edit Task modal for editing tasks
import { Task } from "./TaskRow"; // Assuming Task interface is shared

interface TaskGroupProps {
  groupName: string;
  status: string;
  tasks: Task[];
  onStatusChange: (groupName: string, id: string, newStatus: string) => void;
  onSaveTask: (groupName: string, updatedTask: Task) => void;
}

const TaskGroup: React.FC<TaskGroupProps> = ({ groupName, status, tasks, onStatusChange, onSaveTask }) => {
  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null); // The task to be edited
  const [isModalOpen, setIsModalOpen] = React.useState(false); // Modal state

  // Trigger edit modal for a task
  const handleEditTask = (id: string) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setSelectedTask(taskToEdit);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="bg-white rounded-md border shadow-sm mb-6">
      <TaskGroupHeader groupName={groupName} status={status} />
      {tasks.map((task) => (
        <TaskRow
          key={task.id}
          id={task.id}
          name={task.name}
          assignee={task.assignee}
          dueDate={task.dueDate}
          priority={task.priority}
          status={task.status}
          timeTracked={task.timeTracked}
          onStatusChange={(newStatus) => onStatusChange(groupName, task.id, newStatus)}
          onEditTask={handleEditTask}
        />
      ))}
      <AddTaskButton onAddTask={(newTask) => onSaveTask(groupName, newTask)} />
      
      {/* Only pass the selectedTask if it is not null */}
      {selectedTask && (
        <EditTaskModal
          isOpen={isModalOpen}
          task={selectedTask}
          onClose={() => setIsModalOpen(false)}
          onSave={(updatedTask) => onSaveTask(groupName, updatedTask)}
        />
      )}
    </div>
  );
};

export default TaskGroup;
