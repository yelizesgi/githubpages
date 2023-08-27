import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import InventoryIcon from "@mui/icons-material/Inventory"
import StoreIcon from "@mui/icons-material/Store"
import StarsIcon from "@mui/icons-material/Stars"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount"
import { useNavigate } from "react-router-dom"

const icons=[
    {
        icon: <DashboardCustomizeIcon/>,
        title: "Dashboard",
        url: "/stock/",
    },
    {
        title: "Purchase",
        icon: <ShoppingCartIcon />,
        url: "/stock/purchases/",
      },
      {
        title: "Sales",
        icon: <AttachMoneyIcon />,
        url: "/stock/sales/",
      },
      {
        title: "Firms",
        icon: <StoreIcon />,
        url: "/stock/firms/",
      },
      {
        title: "Brands",
        icon: <StarsIcon />,
        url: "/stock/brands/",
      },
      {
        title: "Products",
        icon: <InventoryIcon />,
        url: "/stock/products/",
      },
      {
        title: "Admin Panel",
        icon: <SupervisorAccountIcon />,
        url: "https://10001.fullstack.clarusway.com/admin",
      },
]


const MenuListItem = () => {
 const navigate = useNavigate()

  return (
    <div>
         <List>
        {icons.map((item, index) => (
          <ListItem key={text} disablePadding onClick={() => {
            item.url.includes("http" || "www") 
            ? window.open(item.url, "_blank")
            : navigate(item.url)
          }}
          sx={{
            color: "#e0e0e0", 
            "& .MisvgIcon-root" : {color: "#e0e0e0"},
            "&:hover" : {color: "#e64a19"},
            "&:hover .MuiSvgIcon-root" :  {color: "#e64a19"},
          }}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </div>
  )
}

export default MenuListItem