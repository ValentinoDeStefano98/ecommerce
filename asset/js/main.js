//Vue.js
var app = new Vue(
    {
        el: '#root',
        data: {
            products: [
                {
                    id: 1,
                    name: 'nike',
                    price: 120,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 2,
                    name: 'adidas',
                    price: 110,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 3,
                    name: 'vans',
                    price: 90,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 4,
                    name: 'jordan',
                    price: 160,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 5,
                    name: 'puma',
                    price: 60,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
                {
                    id: 6,
                    name: 'superga',
                    price: 70,
                    media: 'https://source.unsplash.com/random/400x200/?shoes'
                },
            ],
            carrello: [],
        },
        methods: {
            addToCart: function(element){
                this.carrello.push(element);
            }
        }
    }
)