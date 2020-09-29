import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_new_place, add_new_place } from '../actions/actions-types';


const FormAddPlaces = () => {
    const { title, city, content } = useSelector(state => state.destinationsReducer);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        dispatch(set_new_place({name: name, value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        let New = [];
        New = {title: title, city: city, content: content };
        dispatch(add_new_place(New));
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>
            Intitulé du lieu : <input type="text" name="title" value={title} onChange={handleChange} />
        </label>
        <label>
            Ville : <input type="text" name="city" value={city} onChange={handleChange} />
        </label>
        <label>
            Description : <input type="text" name="content" value={content} onChange={handleChange} />
        </label>
        <button>Ajouter</button>
    </form>
    );
}

export default FormAddPlaces;