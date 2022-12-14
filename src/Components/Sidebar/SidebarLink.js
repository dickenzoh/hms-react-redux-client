import { NavLink } from "react-router-dom";
import "./SidebarLink.css";

function SidebarLink({ text, Icon, loca }) {
  const activeLink =
    "hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500";
  const normalLink =
    "hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold";
  return (
    <>
      <NavLink to={loca} underline="none">
        <div className="link">
          <Icon />
          <h4>{text}</h4>
        </div>
      </NavLink>
    </>
  );
}
export default SidebarLink;
