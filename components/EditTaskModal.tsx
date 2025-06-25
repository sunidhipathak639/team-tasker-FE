"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/shared/components/button";
import { Input } from "@/shared/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker styles
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/popover";

interface EditTaskModalProps {
  isOpen: boolean;
  task: any; // Task details to edit
  onClose: () => void;
  onSave: (updatedTask: any) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ isOpen, task, onClose, onSave }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask({
      ...updatedTask,
      [e.target.name]: e.target.value,
    });
  };

  // Handle select field change for Priority and Assignee
  const handleSelectChange = (field: string, value: string) => {
    setUpdatedTask({
      ...updatedTask,
      [field]: value,
    });
  };

  // Handle Date change
  const handleDateChange = (date: Date) => {
    setUpdatedTask({
      ...updatedTask,
      dueDate: date,
    });
  };

  // Handle Save
  const handleSave = () => {
    onSave(updatedTask);
  };

  useEffect(() => {
    setUpdatedTask(task); // Reset task when prop changes
  }, [task]);

  return (
    <Popover open={isOpen} onOpenChange={onClose}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          Edit Task
        </Button>
      </PopoverTrigger>

      <PopoverContent className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
        <div className="w-96 p-6 bg-white rounded-md shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Edit Task</h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Task Name</label>
              <Input
                name="name"
                value={updatedTask.name}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Assignee Select (ShadCN Select) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Assignee</label>
              <Select
                value={updatedTask.assignee}
                onValueChange={(value) => handleSelectChange("assignee", value)}
                className="mt-2"
              >
                <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md">
                  {updatedTask.assignee || "Select Assignee"}
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
                value={updatedTask.priority}
                onValueChange={(value) => handleSelectChange("priority", value)}
                className="mt-2"
              >
                <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md">
                  {updatedTask.priority || "Select Priority"}
                </SelectTrigger>
                <SelectContent className="bg-white w-[100px]">
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Due Date DatePicker */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              <DatePicker
                selected={updatedTask.dueDate ? new Date(updatedTask.dueDate) : null}
                onChange={handleDateChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                dateFormat="yyyy/MM/dd"
                placeholderText="Select a date"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <Button onClick={onClose} variant="outline" size="sm">
              Cancel
            </Button>
            <Button onClick={handleSave} variant="primary" size="sm">
              Save
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EditTaskModal;
