"use client";
import React from "react";
import { Badge } from "@/shared/components/badge";
import { Avatar } from "@/shared/components/avatar";
import { Button } from "@/shared/components/button";

interface TaskRowProps {
  id: string;
  name: string;
  assignee: string;
  dueDate: string;
  priority: string;
  status: string;
  timeTracked: string;
  onStatusChange: (id: string, newStatus: string) => void;
  onEditTask: (id: string) => void;
}

const TaskRow: React.FC<TaskRowProps> = ({
  id,
  name,
  assignee,
  dueDate,
  priority,
  status,
  timeTracked,
  onStatusChange,
  onEditTask
}) => {
  const handleStatusToggle = () => {
    const newStatus = status === "Complete" ? "In Progress" : "Complete";
    onStatusChange(id, newStatus);
  };

  return (
    <div className="grid grid-cols-7 gap-2 p-4 border-b">
      <div className="flex items-center gap-2 col-span-2">
        <input type="checkbox" checked={status === "Complete"} onChange={handleStatusToggle} />
        {name}
      </div>
      <div className="flex items-center">
        <Avatar>{assignee}</Avatar>
      </div>
      <div>{dueDate}</div>
      <div>{priority}</div>
      <div>
        <Badge variant={status === "Complete" ? "success" : "warning"}>{status}</Badge>
      </div>
      <div>{timeTracked}</div>
      <div>
        <Button onClick={() => onEditTask(id)} variant="outline" size="sm">Edit</Button>
      </div>
    </div>
  );
};

export default TaskRow;
