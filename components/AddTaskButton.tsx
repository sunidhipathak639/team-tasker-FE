import React from "react";
import { Button } from "@/shared/components/button";

interface AddTaskButtonProps {
  onAddTask: () => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onAddTask }) => {
  return (
    <div className="p-4">
      <Button variant="ghost" size="sm" onClick={onAddTask}>
        + Add Task
      </Button>
    </div>
  );
};

export default AddTaskButton;