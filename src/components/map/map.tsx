import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import { City, Points } from '../../types/map';
import useMap from '../../hooks/use-map';
import { Icon, layerGroup, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: City;
  points: Points;
  height: number;
  width?: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, points, height, width} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);

  return <div style={{height: `${height}px`, width: `${width}px`, margin: '0 auto'}} ref={mapRef}></div>;
}

export default Map;
