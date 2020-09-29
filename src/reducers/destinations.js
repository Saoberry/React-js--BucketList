import {
    MARKERS_LIST,
    SHOW_PLACES_LIST,
    SHOW_FORM,
    ADD_NEW_PLACE,
    SET_NEW_PLACE
} from "../constants/actions";

import POSTS from '../data.js'

const stateInit = {
    destinations: POSTS,
    markers: [],
    showForm: false,
    title: '',
    content: '',
    city: '',
    coord: []
}

const reducer = (state = stateInit, action = {}) => {
    let Destinations;
    switch (action.type) {

        case MARKERS_LIST:
            Destinations = state.destinations;   
            let markersList = [];
            for(let i=0; i < Destinations.length; i++){
                for(let j=0; j < Destinations[i].places.length; j++){
                    markersList = markersList.concat(Destinations[i].places[j])
                }
            }
        return {
            ...state,
            markers: markersList
        }

        case SHOW_PLACES_LIST:
            const id = action.payload;
            Destinations = state.destinations;
            if (Destinations[id].show === false){
                Destinations[id].show = true;
            } else {
                Destinations[id].show = false;
            }

        return {
            ...state,
            destinations: Destinations
        }

        case SHOW_FORM:
            let showForm = state.showForm;
            if (showForm === false){
                showForm = true;
            } else {
                showForm = false;
            }
        return {
            ...state,
            showForm: showForm
        }

        case SET_NEW_PLACE:
            const test = action.payload;
            console.log(test)
        return {
            ...state,
        }

        case ADD_NEW_PLACE:
            const yep = action.payload;
            console.log(yep)
        return {
            ...state,
        }

        default:
            return state;
    }
}

export default reducer;