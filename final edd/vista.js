import { nodos } from './data.js';

export function renderListaNodos() {
    const lista = document.querySelector("#nodosLista ol");
    lista.innerHTML = "";
    nodos.forEach((n, i) => {
        const li = document.createElement("li");
        li.innerHTML = `
      <span>
        <input type="checkbox" onchange="toggleSeleccion(${i})" ${n.seleccionado ? "checked" : ""}>
        <b>${n.nombre}</b>
      </span>
      <span>
        <button class="btnSmall" onclick="moverNodo(${i}, -1)">⬆️</button>
        <button class="btnSmall" onclick="moverNodo(${i}, 1)">⬇️</button>
        <button class="btnSmall" onclick="editarNodo(${i})">✏️</button>
        <button class="btnSmall" onclick="eliminarNodo(${i})">🗑️</button>
      </span>
    `;
        lista.appendChild(li);
    });
}
