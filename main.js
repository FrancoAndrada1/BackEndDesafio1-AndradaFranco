class ProductManager {
    constructor (){
        this.Products = [];
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const CodigoRep = this.Products.some(product => product.code == code);
        if (CodigoRep) {
            throw new Error("Error el codigo ya esta repetido.");
        }
        this.Products.push({id:this.productIdCounter++ , title, description, price, thumbnail, code,stock});
        

    }

    getProduct() {
        return this.Products;
    }

    getProductById(id) {
        const producta = this.Products.find(product => product.id === id);
        if (!producta) {
            console.error("No se encuentra en la base de datos");
        }
       else{
        console.log("Existe")
    }
    }
  
}

const productos = new ProductManager

// Arreglo vacio
console.log(productos.getProduct())


// Agregue de productos
productos.addProduct("producto prueba", "Este es un producto prueba", "200", "Sin imagen", "abc123", "25");
productos.addProduct("producto prueba2", "Este es un producto prueba2", "300", "Sin imagen2", "abc124", "26");
productos.addProduct("producto prueba3", "Este es un producto prueba3", "400", "Sin imagen3", "abc125", "28");
// Segundo llamado a GetProduct
console.log(productos.getProduct())

console.log("hello")

// Agregue de productos para generar error
//productos.addProduct("producto prueba", "Este es un producto prueba", "200", "Sin imagen", "abc123", "25");
console.log(productos.getProductById(3))
