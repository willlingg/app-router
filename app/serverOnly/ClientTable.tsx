"use client"

import { useState } from "react"

type ClientTableType = {
  pokemon: any
}

const ClientTable = ({pokemon}: ClientTableType) => {
  const [searchInput, setSearchInput] = useState("")

  return (
    <>
    <input 
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {pokemon.map((ability: any) => {
        if (ability.name.includes(searchInput)) {
          return <div key={ability.name}>The ability is {ability.name}</div>;
        }
      })}
    </>
  )
}

export default ClientTable