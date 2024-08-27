import { useEffect, useState } from "react"


const Characters = () => {

    const [character, setCharacter] = useState([])
    const [rotateCharacter, setRotateCharacter] = useState({})

    useEffect(() => {
        const getCharacter = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const  character = await response.json()
            console.log(character.results);
            setCharacter(character.results)
    }
        getCharacter()
      
    },[])
    
    const handleImageClick = (id) => {
        setRotateCharacter((prevRotated) =>({
            ...prevRotated,
            [id]: !prevRotated[id]
        }))
    }

    return (
        <div className="flex flex-wrap items-center gap-5 mx-32 my-10">
            {
                character.map((character) => (
                    <div key={character.id}>
                        <h1>{character.name}</h1>
                        <img src={character.image} 
                            alt={character.name}
                            className={`transition-transform duration-500 cursor-pointer ${rotateCharacter[character.id] ? "rotate-180" : ""}`}
                            onClick={() => handleImageClick(character.id)}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Characters