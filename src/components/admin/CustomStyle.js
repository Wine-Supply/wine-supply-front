import { Menu } from 'react-admin';
import WineBarIcon from '@mui/icons-material/WineBar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



export const MyMenu = () => (
  <Menu>
      <Menu.DashboardItem />
      <Menu.Item  to="/admin/admin/wines" primaryText="Wines" leftIcon={<WineBarIcon />}/>
      <Menu.Item to="/admin/admin/users" primaryText="Users" leftIcon={<PersonOutlineIcon />}/>
      <Menu.Item to="/admin/newsletter" primaryText="Newsletter" leftIcon={<MailOutlineIcon />}/>  
  </Menu>
);
