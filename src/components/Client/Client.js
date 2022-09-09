import { Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
import React from "react";

const info = [
  {
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fclients%2Fenvato.32c3ab1332b5b39b49c9f92d8a4f2ddb.png&w=128&q=75",
    alt: "envato",
    id: 1,
  },
  {
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fclients%2Fevernote.13626b10dcdfbee1b12349f1c38cd05f.png&w=256&q=75",
    alt: "evernote",
    id: 2,
  },
  {
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fclients%2Fforbes.b023ea802131b66bae6ea905d7e84ed6.png&w=96&q=75",
    alt: "forebes",
    id: 3,
  },
  {
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fclients%2Fgeekwire.44529a56c0ead8910f7493cab5fe67e4.png&w=256&q=75",
    alt: "geekwire",
    id: 4,
  },
  {
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fclients%2Fslack.365bff1a9ca5ec9e7106e082e07955af.png&w=96&q=75",
    alt: "slack",
    id: 5,
  },
  {
    src: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fclients%2Fusa-today.416e115e17a3416498744d0788cf55d3.png&w=96&q=75",
    alt: "usaToday",
    id: 6,
  },
];

const Client = () => {
  return (
    <section
      id="client"
      style={{ padding: "40px 0", backgroundColor: "rgb(255, 255, 255)" }}
    >
      <Container>
        <Stack justifyContent="center" alignItems="center">
          <Typography
            variant="subtitle1"
            component="p"
            color="rgba(91, 111, 130, 0.6)"
            marginBottom="50px"
          >
            Join the 20,000+ companies using the Segment platform
          </Typography>
        </Stack>
        <Stack direction={{xs: 'column', md: 'row'}} spacing={{xs: '35px'}} alignItems={{xs: 'center'}} justifyContent="space-between">
          {info.map((item) => {
            return (
              <motion.img
                style={{
                  cursor: "pointer",
                  opacity: 0.7,
                }}
                initial={{ x: 0 }}
                whileHover={{
                  y: [0, -5, 5, 0, -5, 5, 0],
                }}
                key={item.id}
                src={item.src}
                alt={item.alt}
              ></motion.img>
            );
          })}
        </Stack>
      </Container>
    </section>
  );
};

export default Client;
