import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFav } from "../redux/actions";
import { filterCards, orderCards } from "../redux/actions";
import Card from "./Card";

const Favorites = ({myFavorites, onClose, removeFav}) => {

    const closeFavorite = (id) => {
        onClose(id)
        removeFav(id)
    }

    const dispatch = useDispatch()

    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux);
    }

    const handleFilter = (e) => {
        const value = e.target.value;
        if (value === "all") {
            dispatch(filterCards(null));
        } else {
            dispatch(filterCards(value));
        }
    }

    return (
        <div>
            <select name="select1" onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendiente</option>
            </select>
            <select name="select2" onChange={handleFilter}>
                <option value="all">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {myFavorites && myFavorites.map(({name, species, gender, image, id, status, origin}) => (
            <Card 
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={() => closeFavorite(id)}
            />
            ))}
        </div>
    )
}

const mapState = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

const mapDispatch = (dispatch) => {
    return {
        removeFav: (id) => dispatch(removeFav(id))
    }
}

export default connect(mapState, mapDispatch)(Favorites)