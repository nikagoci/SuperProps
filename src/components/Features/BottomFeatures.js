import { Stack } from "@mui/system";
import {motion } from 'framer-motion';
import React from "react";

const BottomFeatures = () => {
  return (
    <Stack justifyContent='center' alignItems='center' maxWidth='1200px' position='relative' className="decoration">
      <motion.img
        src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FwebAppMinimal%2Fdashboard-2.d622cda5c874acefee8f1e0600f2f6cf.png&w=1920&q=75"
        alt="card"
        style={{height: '100%', width: '100%', zIndex: '2'}}
        initial={{y: 200, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
      />
    </Stack>
  );
};

export default BottomFeatures;
