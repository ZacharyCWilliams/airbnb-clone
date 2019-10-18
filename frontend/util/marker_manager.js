import React from 'react';


class MarkerManager extends React.Component {
  constructor(map) {
    super(map)
    this.map = map;
    this.markers = {};
  }

  updateMarkers(homes) {
    console.log("time to update");
  }

  createHomeMarker(home) {
    const pos = new google.maps.LatLng(home.lat, home.lng);
    const marker = new google.maps.Marker({
      pos,
      map: this.map,
      homeId: home.id
    });
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default MarkerManager
