import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZG9kaS10YW5rIiwiYSI6ImNtOWI5ZHEybDA3MmEybXNha3BnZGJzZnQifQ.-5OA4VXlJCu9rW4NU8nNYw";

  const mapStyles = {
    light: 'mapbox://styles/mapbox/light-v11',
    dark: 'mapbox://styles/mapbox/dark-v11',
  };

const WorldMapMapbox = ({ theme = 'light' }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyles[theme],
      center: [72.54667961552113, 23.046787514150985], // Starting position
      zoom: 16,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
    });

    map.on("style.load", () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer) => layer.type === "symbol" && layer.layout["text-field"]
      ).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Add a custom marker
    new mapboxgl.Marker({ color: "red" })
      .setLngLat([72.54667961552113, 23.046787514150985])
      .setPopup(new mapboxgl.Popup().setText("Delhi, India")) // optional popup
      .addTo(map);

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (mapRef.current && mapRef.current.isStyleLoaded()) {
      mapRef.current.setStyle(mapStyles[theme]);
    }
  }, [theme]);

  return (
    <div style={{ height: "500px", width: "100%", marginBottom: "20px" }}>
      <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default WorldMapMapbox;
