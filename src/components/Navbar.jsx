import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#0f2027",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={40} />
      <Typography variant="h6" fontWeight="bold" ml={1} sx={{ color: "white" }}>
        YL Media
      </Typography>
    </Link>
    <SearchBar />
    <Box mr={1}></Box>
  </Stack>
);

export default Navbar;
