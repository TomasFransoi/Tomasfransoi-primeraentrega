class Producto {
    constructor(nombre, precio, id, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.cantidad = cantidad;
    }
}
let calcosFantasia = new Producto("Calcos Fantacia",150,1,0);
let calcosPersonalizadas = new Producto("Calcos Personalizadas",200,2,0);
let calcosParaMotos = new Producto("Calcos Para Motos",140,3,0);
let calcosParaBaterias = new Producto("Calcos Para Baterias",130,4,0);
let calcosParaLanchas = new Producto("Calcos Para Lanchas",10450,5,0);
let bolsosPortaCelular = new Producto("Bolsos Porta Celular",660,6,0);
let bolsoBajoAsiento = new Producto("Bolso Bajo Asiento",550,7,0);
let cubreVaina = new Producto("Cubre Vaina",250,8,0);
let pinesParaRayos = new Producto("Pines Para Rayos",280,9,0);
let protectoresAntiRalladura = new Producto("Protectores Anti Ralladura",300,10,0);
let fundasFantasia = new Producto("Fundas Fantasia",280,11,0);
let fundasMtb = new Producto("Fundas Mtb",650,12,0);
const productos = [calcosFantasia,calcosPersonalizadas,calcosParaMotos,calcosParaBaterias,calcosParaLanchas,bolsosPortaCelular,bolsoBajoAsiento,cubreVaina,pinesParaRayos,protectoresAntiRalladura,fundasFantasia,fundasMtb];
let carrito = []
const mostrarProductos = (array) => {
        let texto = "Seleccione el Numero de un producto \n";
        let orden = 0
        array.forEach((element) => {
            orden = orden + 1;
            texto += `${orden} ${element.nombre} ${element.precio} \n`;
        })
        let NumeroProducto = parseInt(prompt(texto));
        return NumeroProducto
    };
let Numero = 0
let SiNo = "";
do {
    Numero = mostrarProductos(productos);
    while (Numero > 12 || Numero <= 0) {
        Numero = mostrarProductos(productos);
    }
    switch (Numero) {
    case 1:
        alert(`Usted selecciono ${calcosFantasia.nombre} con un precio por unidad de ${calcosFantasia.precio}`);
        calcosFantasia.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(calcosFantasia);
    break;
    case 2:
        alert(`Usted selecciono ${calcosPersonalizadas.nombre} con un precio por unidad de ${calcosPersonalizadas.precio}`);
        calcosPersonalizadas.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(calcosPersonalizadas);
    break;
    case 3:
        alert(`Usted selecciono ${calcosParaMotos.nombre} con un precio por unidad de ${calcosParaMotos.precio}`);
        calcosParaMotos.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(calcosParaMotos);
    break;
    case 4:
        alert(`Usted selecciono ${calcosParaBaterias.nombre} con un precio por unidad de ${calcosParaBaterias.precio}`);
        calcosParaBaterias.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(calcosParaBaterias);
    break;
    case 5:
        alert(`Usted selecciono ${calcosParaLanchas.nombre} con un precio por unidad de ${calcosParaLanchas.precio}`);
        calcosParaLanchas.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(calcosParaLanchas);
    break;
    case 6:
        alert(`Usted selecciono ${bolsosPortaCelular.nombre} con un precio por unidad de ${bolsosPortaCelular.precio}`);
        bolsosPortaCelular.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(bolsosPortaCelular);
    break;
    case 7:
        alert(`Usted selecciono ${bolsoBajoAsiento.nombre} con un precio por unidad de ${bolsoBajoAsiento.precio}`);
        bolsoBajoAsiento.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(bolsoBajoAsiento);
    break;
    case 8:
        alert(`Usted selecciono ${cubreVaina.nombre} con un precio por unidad de ${cubreVaina.precio}`);
        cubreVaina.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(cubreVaina);
    break;
    case 9:
        alert(`Usted selecciono ${pinesParaRayos.nombre} con un precio por unidad de ${pinesParaRayos.precio}`);
        pinesParaRayos.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(pinesParaRayos);
    break;
    case 10:
        alert(`Usted selecciono ${protectoresAntiRalladura.nombre} con un precio por unidad de ${protectoresAntiRalladura.precio}`);
        protectoresAntiRalladura.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(protectoresAntiRalladura);
    break;
    case 11:
        alert(`Usted selecciono ${fundasFantasia.nombre} con un precio por unidad de ${fundasFantasia.precio}`);
        fundasFantasia.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(fundasFantasia);
    break;
    case 12:
        alert(`Usted selecciono ${fundasMtb.nombre} con un precio por unidad de ${fundasMtb.precio}`);
        fundasMtb.cantidad = parseInt(prompt("Porfavor ingrese la cantidad del producto que desea"));
        carrito.push(fundasMtb);
    break;
}
    SiNo = prompt("quiere otro producto? (responda con un si o no)");
} while (SiNo.toUpperCase() == "SI");
    let texto = "Su compre es: \n";
    let orden = 0;
    let precioCompra = 0
carrito.forEach(element => {
    let PrecioProductoTotal = element.precio * element.cantidad;
    texto += `${element.cantidad} ${element.nombre} = ${PrecioProductoTotal} \n`;
    precioCompra = precioCompra + PrecioProductoTotal;
});
alert(`${texto}El precio total de se compra es de ${precioCompra}`);
let nombre = prompt ("ingrese su nombre");
let ubicacion = prompt ("ingrese la ubicacion de su casa porfavot");
let telefono = prompt ("para poder contactarlo");
let gmail = prompt ("ingrese su gmail");
alert(`Gracias ${nombre} por el pedido, este llegara a su casa de 10-15 dias `)
