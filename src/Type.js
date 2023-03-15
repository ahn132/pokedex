function Type(props) {
    if (props.type === "normal") {
        return (
            <div className="NORMAL type">
                NORMAL
            </div>
        )
    } else if (props.type === "fighting") {
        return (
            <div className="FIGHTING type">
                FIGHTING
            </div>
        )
    } else if (props.type === "flying") {
        return (
            <div className="FLYING  type">
                FLYING
            </div>
        )
    } else if (props.type === "poison") {
        return (
            <div className="POISON type">
                POISON
            </div>
        )
    } else if (props.type === "ground") {
        return (
            <div className="GROUND type">
                GROUND
            </div>
        )
    } else if (props.type === "rock") {
        return (
            <div className="ROCK type">
                ROCK
            </div>
        )
    } else if (props.type === "bug") {
        return (
            <div className="BUG type">
                BUG
            </div>
        )
    } else if (props.type === "ghost") {
        return (
            <div className="GHOST type">
                GHOST
            </div>
        )
    } else if (props.type === "steel") {
        return (
            <div className="STEEL type">
                STEEL
            </div>
        )
    } else if (props.type === "fire") {
        return (
            <div className="FIRE type">
                FIRE
            </div>
        )
    } else if (props.type === "water") {
        return (
            <div className="WATER type">
                WATER
            </div>
        )
    } else if (props.type === "grass") {
        return (
            <div className="GRASS type">
                GRASS
            </div>
        )
    } else if (props.type === "electric") {
        return (
            <div className="ELECTRIC type">
                ELECTRIC
            </div>
        )
    } else if (props.type === "psychic") {
        return (
            <div className="PSYCHIC type">
                PSYCHIC
            </div>
        )
    } else if (props.type === "ice") {
        return (
            <div className="ICE type">
                ICE
            </div>
        )
    } else if (props.type === "dragon") {
        return (
            <div className="DRAGON type">
                DRAGON
            </div>
        )
    } else if (props.type === "dark") {
        return (
            <div className="DARK type">
                DARK
            </div>
        )
    } else if (props.type === "fairy") {
        return (
            <div className="FAIRY type">
                FAIRY
            </div>
        )
    } else if (props.type === "unknown") {
        return (
            <div className="UNKNOWN type">
                UNKNOWN
            </div>
        )
    } else if (props.type === "shadow") {
        return (
            <div className="SHADOW type">
                SHADOW
            </div>
        )
    } else {
        return (
            <p>{props.type}</p>
        )
    }
}

export default Type;