import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "../utils/ReactQueryProvider";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "./globals.css";

const POKEMON = [
  {
      name: "stench",
      url: "https://pokeapi.co/api/v2/ability/1/"
  },
  {
      name: "drizzle",
      url: "https://pokeapi.co/api/v2/ability/2/"
  },
  {
      name: "speed-boost",
      url: "https://pokeapi.co/api/v2/ability/3/"
  },
  {
      name: "battle-armor",
      url: "https://pokeapi.co/api/v2/ability/4/"
  },
  {
      name: "sturdy",
      url: "https://pokeapi.co/api/v2/ability/5/"
  },
  {
      name: "damp",
      url: "https://pokeapi.co/api/v2/ability/6/"
  },
  {
      name: "limber",
      url: "https://pokeapi.co/api/v2/ability/7/"
  },
  {
      name: "sand-veil",
      url: "https://pokeapi.co/api/v2/ability/8/"
  },
  {
      name: "static",
      url: "https://pokeapi.co/api/v2/ability/9/"
  },
  {
      name: "volt-absorb",
      url: "https://pokeapi.co/api/v2/ability/10/"
  },
  {
      name: "water-absorb",
      url: "https://pokeapi.co/api/v2/ability/11/"
  },
  {
      name: "oblivious",
      url: "https://pokeapi.co/api/v2/ability/12/"
  },
  {
      name: "cloud-nine",
      url: "https://pokeapi.co/api/v2/ability/13/"
  },
  {
      name: "compound-eyes",
      url: "https://pokeapi.co/api/v2/ability/14/"
  },
  {
      name: "insomnia",
      url: "https://pokeapi.co/api/v2/ability/15/"
  },
  {
      name: "color-change",
      url: "https://pokeapi.co/api/v2/ability/16/"
  },
  {
      name: "immunity",
      url: "https://pokeapi.co/api/v2/ability/17/"
  },
  {
      name: "flash-fire",
      url: "https://pokeapi.co/api/v2/ability/18/"
  },
  {
      name: "shield-dust",
      url: "https://pokeapi.co/api/v2/ability/19/"
  },
  {
      name: "own-tempo",
      url: "https://pokeapi.co/api/v2/ability/20/"
  }
]

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
          {/* <ReactQueryDevtools /> */}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
