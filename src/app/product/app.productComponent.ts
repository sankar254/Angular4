import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.html',
  providers : [productComponent]
})

export class productComponent  {
  products = [
    {
      "id" : 1,
      "name" : "Surface Book",
      "price" : "₹1,56,300 ",
      "image" : "surfacebook-1.jpg",
      "mode" : "Laptop Mode",
      "desc" : "Lorem ipsum  accumsan  dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id" : 2,
      "name" : "Acer Aspire R11",
      "price" : "₹22,990",
      "image" : "product2.jpg",
      "mode" : "4 GB/500 GB HDD/Windows 10 Home",
      "desc" : "et molestie velit congue et. Nulla accumsan diam vel mattis tempus."
    },
    {
      "id" : 3,
      "name" : "Lenovo i3 6th Gen",
      "price" : "₹ 43,199 ",
      "image" : "product3.jpg",
      "mode" : "4 GB/500 GB HDD/DOS",
      "desc" : "Pellentesque consequat  accumsan  ligula nec rutrum tincidunt."
    },
    {
      "id" : 4,
      "name" : "Lenovo i5 6th Gen",
      "price" : "₹ 31,444 ",
      "image" : "product4.jpg",
      "mode" : "8 GB/1 TB HDD/DOS/2 GB Graphics",
      "desc" : "hasellus ac odio ullamcorper, commodo lacus eget, porttitor nunc."
    },
    {
      "id" : 5,
      "name" : "Apple MacBook Air i5",
      "price" : "₹ 54,888 ",
      "image" : "product5.jpg",
      "mode" : "2 GB/32 GB /Windows 10 Home",
      "desc" : "Nam vel magna dapibus, malesuada euismod metus id, pharetra tortor."
    },
    {
      "id" : 6,
      "name" : "Micromax Laptab II",
      "price" : "₹ 23,887 ",
      "image" : "product6.jpg",
      "mode" : "8 GB/128 GB SSD",
      "desc" : "Ut vitae sem nulla. Quisque ac malesuada nisi, non fermentum enim."
    },
    {
      "id" : 7,
      "name" : "Acer Aspire R11",
      "price" : "₹22,990",
      "image" : "product2.jpg",
      "mode" : "4 GB/500 GB HDD/Windows 10 Home",
      "desc" : "et molestie velit congue et. Nulla accumsan diam vel mattis tempus."
    },
    {
      "id" : 8,
      "name" : "Surface Book",
      "price" : "₹1,56,300 ",
      "image" : "surfacebook-1.jpg",
      "mode" : "Laptop Mode",
      "desc" : "Lorem ipsum  accumsan  dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id" : 9,
      "name" : "Lenovo i5 6th Gen",
      "price" : "₹ 31,444 ",
      "image" : "product4.jpg",
      "mode" : "8 GB/1 TB HDD/DOS/2 GB Graphics",
      "desc" : "hasellus ac odio ullamcorper, commodo lacus eget, porttitor nunc."
    },
    {
      "id" : 10,
      "name" : "Lenovo i3 6th Gen",
      "price" : "₹ 43,199 ",
      "image" : "product3.jpg",
      "mode" : "4 GB/500 GB HDD/DOS",
      "desc" : "Pellentesque consequat  accumsan  ligula nec rutrum tincidunt."
    },
    {
      "id" : 12,
      "name" : "Micromax Laptab II",
      "price" : "₹ 23,887 ",
      "image" : "product6.jpg",
      "mode" : "8 GB/128 GB SSD",
      "desc" : "Ut vitae sem nulla. Quisque ac malesuada nisi, non fermentum enim."
    },
    {
      "id" : 11,
      "name" : "Apple MacBook Air i5",
      "price" : "₹ 54,888 ",
      "image" : "product5.jpg",
      "mode" : "2 GB/32 GB /Windows 10 Home",
      "desc" : "Nam vel magna dapibus, malesuada euismod metus id, pharetra tortor."
    }
  ]
}
