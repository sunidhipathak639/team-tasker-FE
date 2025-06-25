"use client";
import React, { useState } from "react";
import TaskGroup from "@/components/TaskGroup";
import GlobalActionsBar from "@/components/GlobalActionsBar";
import { Task } from "@/components/TaskGroup"; // Assuming Task interface is shared

const Home: React.FC = () => {
  // Manage task groups dynamically
  const [taskGroups, setTaskGroups] = useState([
    {
      groupName: "Agrim",
      tasks: [
        { id: "1", name: "Agrim rebranding", assignee: "SJ", dueDate: "2023-07-10", priority: "High", status: "Complete", timeTracked: "7h 51m" },
        { id: "2", name: "Loader & video change to TechAgrim", assignee: "SJ", dueDate: "2023-07-12", priority: "Medium", status: "In Progress", timeTracked: "2h 25m" },
      ],
    },
    {
      groupName: "Marketing",
      tasks: [
        { id: "3", name: "Marketing Campaign A", assignee: "John", dueDate: "2023-07-20", priority: "High", status: "In Progress", timeTracked: "5h 10m" },
        { id: "4", name: "Social Media Ads", assignee: "Sarah", dueDate: "2023-07-15", priority: "Low", status: "Not Started", timeTracked: "1h 20m" },
      ],
    },
  ]);

  // Add a new task to a specific group
  const handleAddTask = (groupName: string, newTask: Task) => {
    setTaskGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.groupName === groupName
          ? { ...group, tasks: [...group.tasks, newTask] }
          : group
      )
    );
  };

  // Update an existing task in a specific group
  const handleSaveTask = (groupName: string, updatedTask: Task) => {
    setTaskGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.groupName === groupName
          ? { ...group, tasks: group.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)) }
          : group
      )
    );
  };

  // Change task status (e.g., Complete, In Progress)
  const handleStatusChange = (groupName: string, id: string, newStatus: string) => {
    setTaskGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.groupName === groupName
          ? { ...group, tasks: group.tasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task)) }
          : group
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <GlobalActionsBar onAddTask={handleAddTask} />
      {/* Render TaskGroups dynamically based on their names */}
      {taskGroups.map((group) => (
        <TaskGroup
          key={group.groupName}
          groupName={group.groupName}
          status="Complete" // You can add logic to filter tasks by status
          tasks={group.tasks}
          onStatusChange={handleStatusChange}
          onSaveTask={handleSaveTask}
        />
      ))}
    </div>
  );
};

export default Home;
