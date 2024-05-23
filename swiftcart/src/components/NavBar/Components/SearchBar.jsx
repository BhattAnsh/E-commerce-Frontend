import SearchIcon from "../assets/search.svg";
import {Divider} from "@nextui-org/divider";
export default function SearchBar() {
  return (
    <>
        <div className="flex flex-row gap-2 bg-textColor rounded p-1 px-2">
            <img src={SearchIcon} alt="" />
            <Divider orientation="vertical"/>
            <input className="h-8 rounded w-full outline-none"  type="search" name="search" id="search" />
        </div>
    </>
  );
}
