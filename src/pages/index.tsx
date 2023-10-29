import { Box } from "@mantine/core";
import Image from "next/image";

export default function Index() {
  return (
    <Box>
      <Box
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          height: 600,
        }}
      >
        <Image
          src="/counterstrike/header_ctt.png"
          layout="fill"
          objectFit="contain"
          alt="CounterStrike players"
        />
      </Box>
      <Image
        src="/counterstrike/header_bg_green.svg"
        layout="fill"
        objectFit="cover"
        alt="CounterStrike background"
        style={{ zIndex: -1 }}
      />
    </Box>
  );
}
