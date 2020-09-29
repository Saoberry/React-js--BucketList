import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_new_place, add_new_place, idGenerator } from '../actions/actions-types';


const FormAddPlaces = () => {
    const { title, city, content, lat, lng } = useSelector(state => state.destinationsReducer);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        dispatch(set_new_place({name: name, value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        let New = [];
        New = {placeID: idGenerator(),title: title, city: city, content: content, coord: {lat: lat, lng: lng} };
        dispatch(add_new_place(New));
    }

    return (
    <form className="addPlacesForm" onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Intitulé du lieu : </label>
            <input type="text" name="title" value={title} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label>Ville : </label>
            <input type="text" name="city" value={city} onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>Coordonnées</p>
            <label>latitude </label>
            <input type="text" name="lat" value={lat} onChange={handleChange} />
            <label>longitude </label>
            <input type="text" name="lng" value={lng} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label>Description :</label> 
            <textarea name="content" value={content} onChange={handleChange} ></textarea>
        </div>
        <button>Ajouter</button>
    </form>
    );
}

export default FormAddPlaces;