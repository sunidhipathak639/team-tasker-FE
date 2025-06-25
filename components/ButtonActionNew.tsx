import { Button } from "@/shared/components/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/shared/components/dialog";
import { Input } from "@/shared/components/input";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/shared/components/tooltip";
import { PlusSquareIcon } from "lucide-react";

const ButtonActionNew: React.FC = (props) => {
  return (
    <Dialog>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
            <span tabIndex={0}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="relative text-lg text-white bg-[#0a0a0a] hover:bg-gray-800">
                  <PlusSquareIcon size="24" className="text-white mr-2" />
                  New
                </Button>
              </DialogTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-white">Create Item</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <DialogHeader>
          <DialogTitle className="sr-only">Tickup AI Helper</DialogTitle>
          <Input 
            placeholder="Bạn muốn AI viết gì cho bạn nào?" 
            className="bg-gray-800 text-white placeholder-gray-400" 
          />
        </DialogHeader>
        <div className="grid gap-4 py-4 text-white">Hello AI</div>
        <DialogFooter>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonActionNew;
