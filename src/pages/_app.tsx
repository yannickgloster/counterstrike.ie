import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/theme";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <Head>
        <title>CounterStrike.ie</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/counterstrike_ie.svg" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </MantineProvider>
  );
}
