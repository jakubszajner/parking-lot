import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const API_TOKEN = 'pk.eyJ1IjoiamFrdWIyODAiLCJhIjoiY2pxbzdxeXlzMHN6ZzN3bm9zMXkzMWJ0MiJ9.h-GMX-Ih2pF-WDDGuHuVmQ';

class App extends Component {

    state = {
        viewport: {
            width: '100%',
            height: 750,
            latitude: 52.181103,
            longitude: 21.022131,
            zoom: 13
        }
    };

    _goToPan = () => {
        const viewport = {...this.state.viewport, longitude: 21.010749, latitude: 52.230258, zoom: 18};
        this.setState({viewport});
    }

    render() {

        const {viewport} = this.state;

        return (
            <div>
                <ReactMapGL {...viewport}
                            mapStyle={'mapbox://styles/mapbox/navigation-preview-night-v4'}
                            mapboxApiAccessToken={API_TOKEN}
                            {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport})}>

                </ReactMapGL>

                <button onClick={this._goToPan}>Pokaż patelnię</button>
            </div>
        );
    }
}

export default App;

// https://stackoverflow.com/questions/38111157/react-map-gl-map-does-not-appear
// https://www.mapbox.com/api-documentation/#styles
