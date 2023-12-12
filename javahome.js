// mensajeBienvenida.js

document.addEventListener('DOMContentLoaded', function() {
    const mensajeBienvenida = document.createElement('div');
    mensajeBienvenida.innerText = 'Creada por Pilar Juarez';
    mensajeBienvenida.style.position = 'fixed';
    mensajeBienvenida.style.bottom = '20px';
    mensajeBienvenida.style.right = '20px';  // Cambié de 'left' a 'right'
    mensajeBienvenida.style.padding = '15px';
    mensajeBienvenida.style.backgroundColor = '#333';
    mensajeBienvenida.style.color = '#fff';
    mensajeBienvenida.style.borderRadius = '5px';
    mensajeBienvenida.style.display = 'none';

    const cerrarBoton = document.createElement('button');
    cerrarBoton.innerText = 'x';
    cerrarBoton.style.background = 'none';
    cerrarBoton.style.border = 'none';
    cerrarBoton.style.color = '#fff';
    cerrarBoton.style.cursor = 'pointer';
    cerrarBoton.style.marginLeft = '10px';
    cerrarBoton.addEventListener('click', function() {
        mensajeBienvenida.style.display = 'none';
    });

    mensajeBienvenida.appendChild(cerrarBoton);

    document.body.appendChild(mensajeBienvenida);

    setTimeout(function() {
        mensajeBienvenida.style.display = 'block';
    }, 1000);
});


