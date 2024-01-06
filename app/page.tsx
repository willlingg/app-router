"use client";
import Pokemon from "../Components/Pokemon";
import PokeComponent from "../Components/PokeComponent";
import Image from "next/image";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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

async function getPokemons({ pageParam }: { pageParam: number }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/ability?limit=20&offset=${pageParam}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log("Res", data);
  let filtered = await data.results.map((pokemon: {}, index: number) => {
    let paddedIndex =
      pageParam === 0
        ? ("00" + (index + 1)).slice(-3)
        : ("00" + (index + 1 + pageParam)).slice(-3);

    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`;
    return {
      ...pokemon,
      imageUrl: image,
    };
  });
  return filtered;
}

export default function Home() {
  const [searchInput, setSearchInput] = useState("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="mt-4">Welcome to Em's house!</h2>
      <input 
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="w-full md:w-10/12 m-auto flex mt-5 mb-5 flex-col md:grid md:grid-cols-3 md:grid-row-1 md:items-center gap-4">
        {POKEMON.map((pokemon) => {
          if (pokemon.name.includes(searchInput)) {
            return <PokeComponent key={pokemon.name} name={pokemon.name} />
          }
        })}
        {/* {pokemons?.pages?.map((page) =>
          page.map(
            (
              pokemon: {
                imageUrl: string;
                name: string;
              },
              index: number
            ) => {
              if (page.length == index + 1) {
                return (
                  <Pokemon
                    image={pokemon.imageUrl}
                    name={pokemon.name}
                    key={index}
                    innerRef={ref}
                  />
                );
              } else {
                return (
                  <Pokemon
                    image={pokemon.imageUrl}
                    name={pokemon.name}
                    key={index}
                  />
                );
              }
            }
          )
        )} */}
      </div>
    </main>
  );
}
