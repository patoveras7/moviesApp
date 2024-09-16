const CarritoCompra = require('./index');
// En este punto ya tenemos el mini-proyecto de testing listo para empezar a trabajar. Lo que haremos aquí será:
// Partir de un enunciado.
// Implementar los tests en un módulo dentro de la carpeta tests. (Recuerda que estos módulos deben tener la extensión “*.test.js”.).
// Luego, con los tests ya listos, trabajaremos en la implementación de la funcionalidad..

// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:
// constructor(): Inicializa el carrito como un array vacío.
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

let instanciaCarrito;

beforeEach(() => {
    instanciaCarrito = new CarritoCompra();
});

describe("Class CarritoCompra", () => {

    it("La clase CarritoCompra debe existir y debe ser una funcion", ()=>{
        expect(CarritoCompra).toBeInstanceOf(Function);
    })

    it("La clase CarritoCompra debe poder instanciar un objeto", ()=>{
        expect(instanciaCarrito).toBeInstanceOf(CarritoCompra);
    })

    it("La clase CarritoCompra debe contener los metodos constructor, agregarProducto, calcularTotal y aplicarDescuento", ()=>{
        expect(CarritoCompra.prototype.constructor).toBeDefined();//Primero nos enfocamos en que el metodo este definido, luego veremos su funcionamiento.
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();//Primero nos enfocamos en que el metodo este definido, luego veremos su funcionamiento.
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();//Primero nos enfocamos en que el metodo este definido, luego veremos su funcionamiento.
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();//Primero nos enfocamos en que el metodo este definido, luego veremos su funcionamiento.
    })

});

describe("constructor", () => {
    it("El constructor debe inicializar el carrito como un array vacío", ()=>{
        expect(instanciaCarrito.carrito).toEqual([]);
        expect(instanciaCarrito.carrito.length).toBe(0);
        expect(Array.isArray(instanciaCarrito.carrito)).toBe(true);//La instanciaCarrito.carrito debe ser un array, lo que hace ese metodo es devolver un booleano.
    })
})

describe("Metodos", ()=>{
    it("agregarProducto: Agregar productos al carrito", ()=>{
      instanciaCarrito.agregarProducto({nombre:"campera", precio:68000, cantidad:45});
      expect(instanciaCarrito.carrito.length).toBe(1);
      instanciaCarrito.agregarProducto({nombre:"pantalon", precio:47000, cantidad:55});
      instanciaCarrito.agregarProducto({nombre:"remera", precio:18000, cantidad:35});
      expect(instanciaCarrito.carrito.length).toBe(3);
    })

    it("calcularTolal: suma correctamente los precios de todos los productos del carrito", ()=>{
        instanciaCarrito.agregarProducto({nombre:"campera", precio:68000, cantidad:1}); // Se los agrega nuevamente porque estamos dentro de otro contexto de llaves.
        instanciaCarrito.agregarProducto({nombre:"pantalon", precio:47000, cantidad:1});
        instanciaCarrito.agregarProducto({nombre:"remera", precio:18000, cantidad:1});  
        expect(instanciaCarrito.calcularTotal()).toBe(133000);

    })

    it("aplicarDescuento: Aplica un descuento al total de la compra", ()=>{
      instanciaCarrito.agregarProducto({nombre:"campera", precio:68000, cantidad:1});
      instanciaCarrito.agregarProducto({nombre:"pantalon", precio:47000, cantidad:1});
      instanciaCarrito.agregarProducto({nombre:"remera", precio:18000, cantidad:1});
      expect(instanciaCarrito.aplicarDescuento(10)).toBe(119700);
      expect(instanciaCarrito.aplicarDescuento(50)).toBe(66500);
      expect(instanciaCarrito.aplicarDescuento(100)).toBe(0);
    })

})