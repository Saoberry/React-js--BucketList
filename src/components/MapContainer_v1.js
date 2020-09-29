import React, {Component} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import POSTS from '../data';

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };
   
    //this.onMarkerClick = this.onMarkerClick.bind(this);
    //this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    this.setState(
      { posts: POSTS }
    )
  }

  // onMarkerClick = (props, marker) => {
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });
  //   console.log(this.state.activeMarker)
  // }
    
  // onClose = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };
  render() {
    const { posts, activeMarker, showingInfoWindow, selectedPlace } = this.state;
    console.log(posts);
    return (
      <div id="map">
        <Map
          google={this.props.google}
          zoom={3}
          initialCenter={
            {
              lat: 48.915963, 
              lng: 2.290117
            }
          }
          //initialCenter={posts[0].coord}
        >
          {posts && posts.map((post, i) =>
          <Marker
            key={i}
            name={post.title}
            position={post.coord}
            //onClick={this.onMarkerClick}
          />
          )}
        </Map>
      </div>
    );
  }
}

//export default MapContainer;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDzL38_4e7Agwju5QMzto6SPHRxkSzHgYA'
})(MapContainer);