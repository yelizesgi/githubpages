import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import { Outlet } from "react-router-dom"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

function Dashboard() {
  const currentUser = true

  return (
    <Box sx={{ display: "flex" }}>
      s
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           NEW JUNIOR STOCK APP
          </Typography>
          {currentUser && <Button color="inherit">Logout</Button>}
        </Toolbar>
        <Outlet/>
      </AppBar>
    </Box>
  )
}

export default Dashboard
