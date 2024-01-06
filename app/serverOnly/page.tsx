// "use client"
import ClientTable from "./ClientTable"

const serverOnly = async () => {
  const isServer = typeof window === "undefined" ? true : false;
  console.log("isServer", isServer);
  const res = await fetch(`https://pokeapi.co/api/v2/ability?limit=20`);
  const data = await res.json();
  const results = data.results

  return (
    <ClientTable pokemon={results}/>
    // <>
    //   {

    //   }
    //   {results?.map((ability: any) => {
    //     return <div>The ability is {ability.name}</div>;
    //   })}
    // </>
  );
};

export default serverOnly;
