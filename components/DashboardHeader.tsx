import Link from "next/link";
import ButtonAI from "./ButtonAI";
import ButtonActionNew from "./ButtonActionNew";
import ButtonQuickActionMenu from "./ButtonQuickActionMenu";
import ButtonUserMenu from "./ButtonUserMenu";
import SearchCommandPalette from "./SearchCommandPalette";
import { Button } from "../shared/components/button";
import Image from "next/image";

const DashboardHeader: React.FC = () => {
  return (
    <header
      id="header"
      className="flex items-center w-full h-[75px] px-4 shadow-sm bg-[#0a0a0a]"
    >
      <div className="flex items-center w-full text-xs">
        <div className="flex items-center w-14 h-14">
          <Link href="/dashboard">
     <img src={"/Lark.jpg"} alt="Logo"  className="scale-[1.4] ml-5" />
          </Link>
        </div>
        <div className="grow text-end md:flex md:items-center md:justify-center space-x-2 mr-8">
          <SearchCommandPalette />
          {/* <ButtonAI /> */}
        </div>
        <div className="inline-flex items-center gap-3">
          <Button
            asChild
            className="text-xl text-white"
            style={{ background: "linear-gradient(-45deg,#ffc800,#ff02f0,#8930fd,#49ccf9)" }}
          >
          </Button>
          <ButtonActionNew />
          {/* <ButtonQuickActionMenu /> */}
          <ButtonUserMenu />
        </div>
      </div>
    </header>
  );
};
export default DashboardHeader;
