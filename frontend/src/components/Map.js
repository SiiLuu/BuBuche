import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default class Map extends React.Component {

    componentDidMount() {
        this.map = L.map('map', {
            center: [42.632201, 2.458057],
            zoom: 16,
            zoomControl: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        L.circle([42.632201, 2.458057], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 40
        }).addTo(this.map);
        L.popup()
            .setLatLng([42.632201, 2.458057])
            .setContent("Retrouvez-moi ici !")
            .openOn(this.map);
    }

    render() {
        return <Wrapper width="100%" height="50vh" id="map" />
    }
}