import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLink text="Home" Icon={HomeIcon} loca="/" />
      <SidebarLink text="Patients" Icon={HomeIcon} loca="/patients" />
      <SidebarLink text="Appointments" Icon={SearchIcon} loca="/patients" />
      <SidebarLink text="Calendar" Icon={ListAltIcon} loca="/calendar" />
      <SidebarLink text="Profile" Icon={ListAltIcon} loca="/calendar" />
      <SidebarLink text="Settings" Icon={ListAltIcon} loca="/calendar" />
    </div>
  );
}

export default Sidebar;
