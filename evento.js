var start = mobile ? "touchstart" : "mousedown";
document.addEventListener(start, presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);

document.getElementById("limpiar").addEventListener("mouseup",limpiarCanva);

var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var colorLinea = "blue";
var grosorLinea = 2;

var x;
var y;
var estadoClickMouse;


function dibujarMouse(evento) 
{
    if(estadoClickMouse == 1)
    {
        dibujarLinea(colorLinea, grosorLinea, x, y, evento.offsetX, evento.offsetY, papel);
    }
    x = evento.offsetX;
    y = evento.offsetY;
}

function presionarMouse(evento) 
{
    estadoClickMouse = 1;
    x = evento.offsetX;
    y = evento.offsetY;
    console.log(x, y);
}

function soltarMouse(evento) 
{
    estadoClickMouse = 0;
    x = evento.offsetX;
    y = evento.offsetY;   
}

function dibujarLinea(color, grosor, xInicial, yInicial, xFinal, yFinal, lienzo) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();    
}

function limpiarCanva() 
{
    papel.clearRect(0,0,cuadrito.width , cuadrito.height);   
}