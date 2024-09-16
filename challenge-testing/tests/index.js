class CarritoCompra{
    constructor(){ 
        this.carrito = []; 
    } 
    agregarProducto(producto){
        this.carrito.push(producto);
    };
    calcularTotal(){

        return this.carrito.reduce((acum,item) =>{
        return acum += item.precio * item.cantidad;    
        }, 0)


    };
    aplicarDescuento(porcentaje){
        const totalCompra = this.carrito.reduce((acum,item) =>{
            return acum += item.precio * item.cantidad;    
            }, 0)
        const descuento = (porcentaje * totalCompra) / 100    
        return totalCompra - descuento;     
    };
}

module.exports = CarritoCompra;
