import { agregarNodo, editarNodo, eliminarNodo, moverNodo, nodos } from './data.js';
import { renderListaNodos } from './ui.js';

window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 4.9195, lng: -74.03 },
        zoom: 15
    });

    map.addListener("click", (e) => {
        const nombre = prompt("Nombre del nodo:");
        if (!nombre) return;
        agregarNodo(nombre, e.latLng.lat(), e.latLng.lng());
        renderListaNodos();
    });
};

window.editarNodo = (i) => {
    const nuevo = prompt("Nuevo nombre:");
    if (nuevo) {
        editarNodo(i, nuevo);
        renderListaNodos();
    }
};

window.eliminarNodo = (i) => {
    eliminarNodo(i);
    renderListaNodos();
};

window.moverNodo = (i, dir) => {
    moverNodo(i, dir);
    renderListaNodos();
};
