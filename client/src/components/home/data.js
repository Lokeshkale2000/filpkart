const products = [
    { 
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        quantity: 1,
        description: 'This electric kettle from Pigeon is perfect for boiling water and making instant noodles, soup, coffee, and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day',
        rating: 4.5,
        stock: true,
        category: 'Kitchen Appliances'
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        quantity: 1,
        description: 'This non-stick sandwich toaster is easy to use and handy for making delicious toasted sandwiches over a flame.',
        discount: 'From ₹99 + 5% Off', 
        tagline: 'Prestige, Nova & more',
        rating: 4.0,
        stock: true,
        category: 'Kitchen Appliances'
    },
    { 
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        quantity: 1,
        description: 'This unique product can tone your back muscles, reduce belly fat, and improve blood circulation. It also increases stamina and energy.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day',
        rating: 4.3,
        stock: true,
        category: 'Fitness Equipment'
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch (Black Strap, Freesize)'
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        quantity: 1,
        description: 'The Molife Sense 500 features a large display with seamless Bluetooth connectivity. Changeable straps allow for personal style every day.',
        discount: 'Grab Now', 
        tagline: 'Best Seller',
        rating: 4.6,
        stock: true,
        category: 'Wearable Technology'
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        quantity: 1,
        description: 'This professional hair dryer is designed for effective styling and drying, giving you salon-like results at home.',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more',
        rating: 4.1,
        stock: true,
        category: 'Hair Care'
    },
    { 
        id: 'product6',
        url: 'https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70', 
        title: {
            shortTitle: 'Table Fans',
            longTitle: 'Portable 300 mm Ultra High Speed 3 Blade Table Fan (Black, Pack of 1)'
        }, 
        price: {
            mrp: 2250,
            cost: 1199,
            discount: '46%'
        },
        quantity: 1,
        description: 'This whisper-quiet portable table fan provides powerful airflow in a compact size, ideal for home or office use.',
        discount: 'Minimum 40% Off', 
        tagline: 'Top Selling',
        rating: 4.4,
        stock: true,
        category: 'Home Appliances'
    },
    { 
        id: 'product7',
        url: 'https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70', 
        title: {
            shortTitle: 'Headphones',
            longTitle: 'boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset'
        }, 
        price: {
            mrp: 2990,
            cost: 1199,
            discount: '59%'
        },
        quantity: 1,
        description: 'Experience music like never before with the boAt 235v2 Fast Charging Bluetooth Headset, featuring advanced controls and call vibration alert.',
        discount: 'Minimum 50% Off', 
        tagline: 'Grab Now!',
        rating: 4.5,
        stock: true,
        category: 'Audio & Headphones'
    } 
];

export default products;
