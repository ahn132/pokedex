import {useEffect, useState} from "react";
import {set, ref, remove} from "firebase/database";
import {database} from "./database";
import Type from "./Type.js"

function Card(props) {
    const [pokemon, setPokemon] = useState(null);
    const [types, setTypes] = useState([]);
    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/" + props.name;
        fetch(url)
            .then((response) => (response.json()))
            .then((response) => setPokemon(response))
            .then(() => console.log(pokemon))
    })

    if (pokemon == null) {
        return <div>Loading...</div>;
    }
    if (props.team === true) {
        return (
            <div className="card blue">
                <h1 className="cardItem">{pokemon.name}</h1>
                <div className="types">
                    {pokemon.types.map((object) => <Type type={object.type.name}/>)}
                </div>
                <img className="cardItem" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <button className="updateTeam removeTeam" onClick={() => {

                    remove(ref(database, "team/" + pokemon.id))
                        .then(() => console.log("success"));
                }
                }>Remove from team</button>
            </div>
        );
    } else {
        return (
            <div className="card red">
                <h1 className="cardItem">{pokemon.name}</h1>
                <div className="types">
                    {pokemon.types.map((object) => <Type type={object.type.name}/>)}
                </div>
                <img className="cardItem" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <button className="updateTeam addTeam" disabled={props.disabled} onClick={() => {
                    let data = {
                        name: pokemon.name,
                    }
                    set(ref(database, "/team/" + pokemon.id), data)
                        .then(() => console.log("success"));
                }
                }>Add to team</button>
            </div>
        );
    }



}

export default Card;