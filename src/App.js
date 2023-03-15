import Header from "./Header.js"
import Card from "./Card.js"
import {database} from "./database";
import {onValue, ref} from "firebase/database";
import "./App.css"
import {useEffect, useState} from "react";

function App() {
    const [firstPokemon, updateFirstPokemon] = useState(0);
    const [pokemonList, updatePokemonList] = useState([]);
    const [prevDisabled, changePrev] = useState(true);
    const [nextDisabled, changeNext] = useState(false);
    const [totalPokemon, updateTotal] = useState(0);
    const [addDisabled, changeAdd] = useState(false);
    const [teamList, updateTeamList] = useState([]);

    useEffect(() => {
        //gets 100 pokemon from PokeAPI
        let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=" + firstPokemon;
        fetch(url)
            .then((results100) => results100.json())
            .then((response100) => {
                updatePokemonList(response100.results)
                updateTotal(response100.count);
            })

        //enabling or disabling previous button
        if (firstPokemon === 0) {
            changePrev(true);
        } else {
            changePrev(false);
        }

        //enabling or disabling next button
        if (firstPokemon + 100 > totalPokemon) {
            changeNext(true);
        } else {
            changeNext(false);
        }

        //enabling or disabling add to team button for cards
        //also gets team Pokemon
        onValue(ref(database, "/team"), (snap) => {
            if (snap.val() != null && Object.keys(snap.val()).length === 6) {
                changeAdd(true);
            } else {
                changeAdd(false);
            }
            updateTeamList([]);
            snap.forEach((child) => {
                updateTeamList((teamList) => [...teamList, child.val()]);
            });
        })
    }, [firstPokemon, totalPokemon, teamList]);



    return (
        <div className="page">
            <Header/>
            <div className="cards">
                {teamList.map((pokemon) => <Card team={true} name={pokemon.name} disabled={addDisabled}/>)}
            </div>
            <div className="cards">
                {pokemonList.map((pokemon) => <Card team={false} name={pokemon.name} disabled={addDisabled}/>)}
                <button className="previous" disabled={prevDisabled} onClick={() => updateFirstPokemon(firstPokemon - 100)}>
                    <h1>Load previous</h1>
                    <img className="rotate"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
                         alt="pokeball"/>
                </button>
                <button className="next" disabled={nextDisabled} onClick={() => updateFirstPokemon(firstPokemon + 100)}>
                    <h1>Load next</h1>
                    <img className="rotate"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
                         alt="pokeball"/>
                </button>
            </div>
        </div>
    );
}

export default App;
