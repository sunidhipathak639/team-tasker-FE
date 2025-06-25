import React from "react";
import { Badge } from "@/shared/components/badge";

interface TaskGroupHeaderProps {
  groupName: string;
  status: string;
}

const TaskGroupHeader: React.FC<TaskGroupHeaderProps> = ({ groupName, status }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-gray-50">
      <h3 className="font-semibold text-lg">{groupName}</h3>
      <Badge variant={status === "Complete" ? "success" : "warning"}>{status}</Badge>
    </div>
  );
};

export default TaskGroupHeader;