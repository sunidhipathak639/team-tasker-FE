"use client";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/popover";
import { Button } from "@/shared/components/button";
import { Input } from "@/shared/components/input";
import { Select, SelectItem, SelectContent, SelectTrigger } from "@/shared/components/select";

interface GlobalActionsBarProps {
  onAddTask: (newTask: any, groupName: string) => void;
}

const GlobalActionsBar: React.FC<GlobalActionsBarProps> = ({ onAddTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    assignee: "SJ",
    priority: "Low",
    status: "Not Started",
  });
  const [groupName, setGroupName] = useState("Agrim"); // Default group name

  // Handle changes in input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setNewTask({
      ...newTask,
      [field]: value,
    });
  };

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle task creation (example logic)
  const handleSave = () => {
    onAddTask(newTask, groupName); // Add new task to the list under the group
    closeModal(); // Close modal after saving task
  };

  return (
    <div className="cu-hidden-print">
      <div className="global-actions-bar">
        {/* Left Section */}
        <div className="left-part">
          <a href="https://app.clickup.com/43317020/home" className="brand-logo">
            <img alt="" className="symbol" src="./media/clickup-symbol_color-VTPFUWKJ.svg" />
          </a>
        </div>

        {/* Right Section */}
        <div className="right-part">
          <Button onClick={openModal} variant="primary" size="sm">
            New Task
          </Button>
        </div>
      </div>

      {/* New Task Modal (Popup) */}
      {isModalOpen && (
        <Popover open={isModalOpen} onOpenChange={closeModal}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              Edit Task
            </Button>
          </PopoverTrigger>

          <PopoverContent className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
            <div className="w-96 p-6 bg-white rounded-md shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Create New Task</h3>

              <div className="space-y-6">
                {/* Task Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Task Name</label>
                  <Input
                    name="name"
                    value={newTask.name}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Assignee Select (ShadCN Select) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Assignee</label>
                  <Select
                    value={newTask.assignee}
                    onValueChange={(value) => handleSelectChange("assignee", value)}
                    className="mt-2"
                  >
                    <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md">
                      {newTask.assignee || "Select Assignee"}
                    </SelectTrigger>
                    <SelectContent className="bg-white w-[100px]">
                      <SelectItem value="SJ">SJ</SelectItem>
                      <SelectItem value="John">John</SelectItem>
                      <SelectItem value="Sarah">Sarah</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Priority Select (ShadCN Select) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Priority</label>
                  <Select
                    value={newTask.priority}
                    onValueChange={(value) => handleSelectChange("priority", value)}
                    className="mt-2"
                  >
                    <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md">
                      {newTask.priority || "Select Priority"}
                    </SelectTrigger>
                    <SelectContent className="bg-white w-[100px]">
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Status Select (ShadCN Select) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <Select
                    value={newTask.status}
                    onValueChange={(value) => handleSelectChange("status", value)}
                    className="mt-2"
                  >
                    <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md">
                      {newTask.status || "Select Status"}
                    </SelectTrigger>
                    <SelectContent className="bg-white w-[100px]">
                      <SelectItem value="Not Started">Not Started</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Group Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Group Name</label>
                  <Input
                    name="groupName"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <Button onClick={closeModal} variant="outline" size="sm">
                  Cancel
                </Button>
                <Button onClick={handleSave} variant="primary" size="sm">
                  Save
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default GlobalActionsBar;
