import {
    MARKERS_LIST,
    SHOW_PLACES_LIST,
    SHOW_FORM,
    ADD_NEW_PLACE,
    SET_NEW_PLACE
} from '../constants/actions';

export const markers_list = payload => {
    return {
        type: MARKERS_LIST, payload
    };
}

export const show_places_list = payload => {
    return {
        type: SHOW_PLACES_LIST, payload
    };
}

export const show_form = () => {
    return {
        type: SHOW_FORM
    };
}

export const set_new_place = payload => {
    return {
        type: SET_NEW_PLACE, payload
    };
}

export const add_new_place = payload => {
    return {
        type: ADD_NEW_PLACE, payload
    };
}