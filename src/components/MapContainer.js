import React, {useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useSelector, useDispatch } from 'react-redux';
import { markers_list } from '../actions/actions-types'

const MapContainer = (props) => {
  const { destinations, markers } = useSelector(state => state.destinationsReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(markers_list());
  }, [dispatch]);

  return (
    <div id="map">
      <Map
        google={props.google}
        zoom={3}
        initialCenter={destinations[0].places[0].coord}
      >
        {markers && markers.map((marker, i) =>
          <Marker
            key={i}
            name={marker.title}
            position={marker.coord}
          />
        )}
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDzL38_4e7Agwju5QMzto6SPHRxkSzHgYA'
})(MapContainer);