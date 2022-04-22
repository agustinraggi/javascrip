let variedadGaseosa = [];

class gaseosa {
    constructor (nombre, precio, impuesto) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.impuesto = parseFloat(impuesto);
        this.vendido = false;
        this.array();
    }

    array() {
        variedadGaseosa.push(this);
    }

    sii() {
        this.impuesto = this.impuesto * 1.4;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    vender(){
        this.vendido = true;
    }
}

const prodcuto1 = new gaseosa ("coca-cola", "100", "121");
const prodcuto2 = new gaseosa ("pepsi", "80", "96.8");
prodcuto1.sumaIva();
prodcuto2.sumaIva();
prodcuto1.vender();
prodcuto1.sii();
prodcuto2.sii();


prodcuto2.fria = true;
console.log(prodcuto1);
console.log(prodcuto2);

console.log(variedadGaseosa[0].nombre);
console.log(variedadGaseosa[1].nombre);