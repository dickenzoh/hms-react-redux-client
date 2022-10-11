import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLink text="Overview" Icon={HomeIcon} loca="/overview" />
      <SidebarLink text="Patients" Icon={PeopleAltOutlinedIcon} loca="/patients" />
      <SidebarLink text="Today's Visits" Icon={SearchIcon} loca="/patients" />
      <SidebarLink text="Schedule" Icon={CalendarMonthOutlinedIcon} loca="/calendar" />
      <SidebarLink text="To-Do" Icon={PlaylistAddCheckRoundedIcon} loca="/calendar" />
      <SidebarLink text="Inbox" Icon={ForwardToInboxRoundedIcon} loca="/calendar" />
      <SidebarLink text="Staff" Icon={PersonOutlineOutlinedIcon} loca="/calendar" />
      <SidebarLink text="Lab" Icon={BiotechOutlinedIcon} loca="/calendar" />
      <SidebarLink text="Radiology" Icon={CompareOutlinedIcon} loca="/calendar" />
      <SidebarLink text="Profile" Icon={PermIdentityOutlinedIcon} loca="/calendar" />
      <SidebarLink text="Settings" Icon={SettingsOutlinedIcon} loca="/calendar" />
    </div>
  );
}

export default Sidebar;
