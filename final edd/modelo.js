export let nodos = [];

export function agregarNodo(nombre, lat, lng) {
    nodos.push({ nombre, lat, lng, seleccionado: true });
}

export function editarNodo(index, nuevoNombre) {
    nodos[index].nombre = nuevoNombre;
}

export function eliminarNodo(index) {
    nodos.splice(index, 1);
}

export function moverNodo(index, dir) {
    const nuevoIndex = index + dir;
    if (nuevoIndex >= 0 && nuevoIndex < nodos.length) {
        [nodos[index], nodos[nuevoIndex]] = [nodos[nuevoIndex], nodos[index]];
    }
}
