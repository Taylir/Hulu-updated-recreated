import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon, CheckBadgeIcon, RectangleStackIcon, BoltIcon, MagnifyingGlassIcon, UserIcon  } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="Home" />
        <HeaderItem Icon={BoltIcon} title="Trending" />
        <HeaderItem Icon={CheckBadgeIcon} title="Verified" />
        <HeaderItem Icon={RectangleStackIcon} title="Collections" />
        <HeaderItem Icon={MagnifyingGlassIcon} title="Search" />
        <HeaderItem Icon={UserIcon} title="Account" />
      </div>
      <Image
        className="object-contain"
        src={"https://links.papareact.com/ua6"}
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
