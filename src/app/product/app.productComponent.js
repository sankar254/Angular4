"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var productComponent = productComponent_1 = (function () {
    function productComponent() {
        this.products = [
            {
                "id": 1,
                "name": "Surface Book",
                "price": "₹1,56,300 ",
                "image": "surfacebook-1.jpg",
                "mode": "Laptop Mode",
                "desc": "Lorem ipsum  accumsan  dolor sit amet, consectetur adipiscing elit."
            },
            {
                "id": 2,
                "name": "Acer Aspire R11",
                "price": "₹22,990",
                "image": "product2.jpg",
                "mode": "4 GB/500 GB HDD/Windows 10 Home",
                "desc": "et molestie velit congue et. Nulla accumsan diam vel mattis tempus."
            },
            {
                "id": 3,
                "name": "Lenovo i3 6th Gen",
                "price": "₹ 43,199 ",
                "image": "product3.jpg",
                "mode": "4 GB/500 GB HDD/DOS",
                "desc": "Pellentesque consequat  accumsan  ligula nec rutrum tincidunt."
            },
            {
                "id": 4,
                "name": "Lenovo i5 6th Gen",
                "price": "₹ 31,444 ",
                "image": "product4.jpg",
                "mode": "8 GB/1 TB HDD/DOS/2 GB Graphics",
                "desc": "hasellus ac odio ullamcorper, commodo lacus eget, porttitor nunc."
            },
            {
                "id": 5,
                "name": "Apple MacBook Air i5",
                "price": "₹ 54,888 ",
                "image": "product5.jpg",
                "mode": "2 GB/32 GB /Windows 10 Home",
                "desc": "Nam vel magna dapibus, malesuada euismod metus id, pharetra tortor."
            },
            {
                "id": 6,
                "name": "Micromax Laptab II",
                "price": "₹ 23,887 ",
                "image": "product6.jpg",
                "mode": "8 GB/128 GB SSD",
                "desc": "Ut vitae sem nulla. Quisque ac malesuada nisi, non fermentum enim."
            },
            {
                "id": 7,
                "name": "Acer Aspire R11",
                "price": "₹22,990",
                "image": "product2.jpg",
                "mode": "4 GB/500 GB HDD/Windows 10 Home",
                "desc": "et molestie velit congue et. Nulla accumsan diam vel mattis tempus."
            },
            {
                "id": 8,
                "name": "Surface Book",
                "price": "₹1,56,300 ",
                "image": "surfacebook-1.jpg",
                "mode": "Laptop Mode",
                "desc": "Lorem ipsum  accumsan  dolor sit amet, consectetur adipiscing elit."
            },
            {
                "id": 9,
                "name": "Lenovo i5 6th Gen",
                "price": "₹ 31,444 ",
                "image": "product4.jpg",
                "mode": "8 GB/1 TB HDD/DOS/2 GB Graphics",
                "desc": "hasellus ac odio ullamcorper, commodo lacus eget, porttitor nunc."
            },
            {
                "id": 10,
                "name": "Lenovo i3 6th Gen",
                "price": "₹ 43,199 ",
                "image": "product3.jpg",
                "mode": "4 GB/500 GB HDD/DOS",
                "desc": "Pellentesque consequat  accumsan  ligula nec rutrum tincidunt."
            },
            {
                "id": 12,
                "name": "Micromax Laptab II",
                "price": "₹ 23,887 ",
                "image": "product6.jpg",
                "mode": "8 GB/128 GB SSD",
                "desc": "Ut vitae sem nulla. Quisque ac malesuada nisi, non fermentum enim."
            },
            {
                "id": 11,
                "name": "Apple MacBook Air i5",
                "price": "₹ 54,888 ",
                "image": "product5.jpg",
                "mode": "2 GB/32 GB /Windows 10 Home",
                "desc": "Nam vel magna dapibus, malesuada euismod metus id, pharetra tortor."
            }
        ];
    }
    return productComponent;
}());
productComponent = productComponent_1 = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: 'app/product/product.html',
        providers: [productComponent_1]
    })
], productComponent);
exports.productComponent = productComponent;
var productComponent_1;
//# sourceMappingURL=app.productComponent.js.map