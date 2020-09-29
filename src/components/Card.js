import React from 'react';
import FormAddPlaces from './FormAddPlaces'
import { useSelector, useDispatch } from 'react-redux';
import { show_places_list, show_form } from '../actions/actions-types'

const Card = () => {
  const { destinations, showForm } = useSelector(state => state.destinationsReducer);
  const dispatch = useDispatch();

  const showPlaces = (item) => {
    dispatch(show_places_list(item))
  }
  const showFormAddPlaces = () => {
    dispatch(show_form())
  }
  return (
    <>
    <ul className="destinationsList">
    {destinations && destinations.map((destination, i) =>
      <li key={i} id={destination.country}>
        <p onClick={() => showPlaces(destination.id)}>{destination.country}</p>
        {destination.show === true ? 
        <div>
          <button onClick={showFormAddPlaces}>Ajouter un lieu à visiter</button> 
          {showForm === true ? <FormAddPlaces /> : null}
          {destination.places && destination.places.map((place, i) => 
            <div className="card" key={i}>
            <p>{place.title} à {place.city}</p>
            <p>{place.content}</p>
          </div>
          )}
        </div>: null
        }
      </li>
    )}
    </ul>
    </>
  );
}

export default Card;