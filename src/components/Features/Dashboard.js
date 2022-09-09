import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
import React from "react";

const Dashboard = () => {
  return (
    <Stack
      direction={{ sx: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      width={{xs: '100%', md: '800px'}}
    >
      <Stack alignItems="center" marginBottom={{xs: '40px', md: '0'}}>
        <motion.img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/process1.5e5c97c6e97a8b68ebeb4ca6623b5b7d.png"
          alt="user"
          style={{
            width: "70%",
            height: "60%",
            marginBottom: "25px",
            cursor: "pointer",
          }}
          initial={{ y: 0 }}
          whileHover={{ y: -20 }}
        />
        <Typography variant="h6" component="h6" fontWeight={40}>
          User Management
        </Typography>
      </Stack>
      <Stack alignItems="center" marginBottom={{xs: '40px', md: '0'}}>
        <motion.img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/process2.313064a35c128c1aade253c1ae614daa.png"
          alt="online"
          style={{
            width: "70%",
            height: "60%",
            marginBottom: "25px",
            cursor: "pointer",
          }}
          initial={{ y: 0 }}
          whileHover={{ y: -20 }}
        />
        <Typography variant="h6" component="h6" fontWeight={40}>
          Online e-Commerce
        </Typography>
      </Stack>
      <Stack alignItems="center" marginBottom={{xs: '40px', md: '0'}}>
        <motion.img
          src="https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/icons/process3.0dd32784fa1c146074a5345a69ce0a7c.png"
          alt="security"
          style={{
            width: "70%",
            height: "60%",
            marginBottom: "25px",
            cursor: "pointer",
          }}
          initial={{ y: 0 }}
          whileHover={{ y: -20 }}
        />
        <Typography variant="h6" component="h6" fontWeight={40}>
          Security & Privacy
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
