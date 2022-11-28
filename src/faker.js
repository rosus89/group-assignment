import { faker } from '@faker-js/faker';

class Product {
    constructor(id, name, image, description, price, stock){
        this._id = id
        this.name = name
        this.image = image
        this.description = description
        this.price = price
        this.stock = stock
    }
  }

let createProduct = (
    id = faker.datatype.uuid(),
    name = faker.commerce.productName(),
    image = faker.image.fashion(),
    description = faker.commerce.productDescription(),
    price = faker.commerce.price(15, 150, 2, '£'),
    stock = faker.datatype.number({max: 100, min: 0})
) => new Product(id, name, image, description, price, stock)

let createProducts = (number) => {
    let list = []
    for (let i=1 ; i <= number ;i++){
        list.push(createProduct())
    }
    return list
}

export {createProduct, createProducts};

