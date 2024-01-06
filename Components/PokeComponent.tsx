interface PokeProp {
  name: string
}

const PokeComponent = async ({name}: PokeProp) => {
  const isServer = (typeof window === 'undefined')? true : false;
  console.log("isServer", isServer)
  return (
    <div>This is the bobby {name}</div>
  )
} 

export default PokeComponent