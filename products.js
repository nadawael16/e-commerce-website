let defaultProducts = [
    {
        id: 1,
        name: "Loose Fit Striped Shirt",
        price: 590,
        image: "shirt5.jpg",
        category: "Shirts"
    },
    {
        id: 2,
        name: "Blue Jean Shirt",
        price: 500,
        image: "shirt1.jpg",
        category: "Shirts"
    },
    {
        id: 3,
        name: "Classic White Shirt",
        price: 460,
        image: "shirt2.jpg",
        category: "Shirts"
    },
    {
        id: 4,
        name: "Oversized Flannel Shirt",
        price: 780,
        image: "shirt3.jpg",
        category: "Shirts"
    },
    {
        id: 5,
        name: "Striped Blouse",
        price: 690,
        image: "shirt4.jpg",
        category: "Shirts"
    },
    {
        id: 6,
        name: "Formal Striped Blouse",
        price: 720,
        image: "shirt6.jpg",
        category: "Shirts"
    },
    {
        id: 7,
        name: "Colorful Summer Blouse",
        price: 830,
        image: "shirt7.jpg",
        category: "Shirts"
    },
    {
        id: 8,
        name: "Brown Linen Pants",
        price: 590,
        image: "pants1.jpg",
        category: "Trousers"
    },
    {
        id: 9,
        name: "Maroon Trousers",
        price: 500,
        image: "pants2.jpg",
        category: "Trousers"
    },
    {
        id: 10,
        name: "Wide Leg Striped Pants",
        price: 460,
        image: "pants3.jpg",
        category: "Trousers"
    },
    {
        id: 11,
        name: "Flared Floral Trousers",
        price: 780,
        image: "pants4.jpg",
        category: "Trousers"
    },
    {
        id: 12,
        name: "High Waist Floral Pants",
        price: 690,
        image: "pants5.jpg",
        category: "Trousers"
    },
    {
        id: 13,
        name: "Formal Pants",
        price: 720,
        image: "pants6.jpg",
        category: "Trousers"
    },
    {
        id: 14,
        name: "Purple Linen Pants",
        price: 830,
        image: "pants7.jpg",
        category: "Trousers"
    },
    {
        id: 15,
        name: "Loose FitLight  Blue Jeans",
        price: 660,
        image: "jeans1.jpg",
        category: "Jeans"
    },
    {
        id: 16,
        name: "Loose Fit Dark Blue Jeans",
        price: 590,
        image: "jeans2.jpg",
        category: "Jeans"
    },
    {
        id: 17,
        name: "Blue Double Button Jeans",
        price: 590,
        image: "jeans3.jpg",
        category: "Jeans"
    },
    {
        id: 18,
        name: "Vintage Flared Jeans",
        price: 590,
        image: "jeans4.jpg",
        category: "Jeans"
    },
    {
        id: 19,
        name: "Black Baggy Jeans",
        price: 590,
        image: "jeans5.jpg",
        category: "Jeans"
    },
    {
        id: 20,
        name: "Washed Blue Jeans",
        price: 590,
        image: "jeans6.jpg",
        category: "Jeans"
    },
    {
    id: 21,
    name: "Floral Midi Skirt",
    price: 490,
    image: "skirt1.jpg",
    category: "Skirts"
},
{
    id: 22,
    name: "Green Striped Skirt",
    price: 520,
    image: "skirt2.jpg",
    category: "Skirts"
},
{
    id: 23,
    name: "Blue-Green Boho Skirt",
    price: 570,
    image: "skirt5.jpg",
    category: "Skirts"
},
{
    id: 24,
    name: "Blue printed Skirt",
    price: 530,
    image: "skirt4.jpg",
    category: "Skirts"
},
{
    id: 25,
    name: "Satin Skirt",
    price: 560,
    image: "skirt3.jpg",
    category: "Skirts"
},
{
    id: 26,
    name: "Silk Printed Scarf",
    price: 220,
    image: "scarf1.jpg",
    category: "Scarves"
},
{
    id: 27,
    name: "Blue Floral Scarf",
    price: 180,
    image: "scarf2.jpg",
    category: "Scarves"
},
{
    id: 28,
    name: "Purple Scarf",
    price: 200,
    image: "scarf3.jpg",
    category: "Scarves"
},
{
    id: 29,
    name: "Boho Yellow Tassel Scarf",
    price: 250,
    image: "scarf4.jpg",
    category: "Scarves"
}

];

let products = JSON.parse(localStorage.getItem("products")) || defaultProducts;

if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(defaultProducts));
}

const shirtsWrapper = document.querySelector("#shirtsSwiper .swiper-wrapper");
const trousersWrapper = document.querySelector("#trousersSwiper .swiper-wrapper");
const jeansWrapper = document.querySelector("#jeansSwiper .swiper-wrapper");
const skirtsWrapper = document.querySelector("#skirtsSwiper .swiper-wrapper");
const scarvesWrapper = document.querySelector("#scarvesSwiper .swiper-wrapper");



products.forEach(product => {
    const card = createProductCard(product);

    if (product.category === "Shirts")
        shirtsWrapper.appendChild(card);
    else if (product.category === "Trousers")
        trousersWrapper.appendChild(card);
    else if (product.category === "Jeans")
        jeansWrapper.appendChild(card);
    else if (product.category === "Skirts")
        skirtsWrapper.appendChild(card);
    else if (product.category === "Scarves")
        scarvesWrapper.appendChild(card);


})

function createProductCard(product) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
    <div class="card text-center me-5 mb-5">
        <img src= ${product.image} class="card-img-top" alt="...">
            <div class="card-body">
                 <h5 style="color: rgb(51, 1, 92);">${product.name}</h5>
                 <h5 class="card-title" style="color: rgb(51, 1, 92);">${product.price} EGP</h5>
                 <button type="button"
                     class="btn btn-light mb-3 mt-3 w-100 text-success border-success add-to-cart-button" 
                     data-id =${product.id}>
                     <i class="fa-solid fa-cart-plus"></i> Add To Cart</button>
                <button type="button" class="btn btn-light w-100 text-danger border-danger remove-button"
                data-id = ${product.id}>
                <i class="fa-solid fa-trash"></i> Remove</button>
            </div>
        </div>`

    return slide;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCartBtn = document.querySelectorAll(".add-to-cart-button");
addToCartBtn.forEach(button => {
    button.addEventListener("click", function (e) {
        const productId = parseInt(e.target.getAttribute("data-id"));

        const selectedProduct = products.find(p => p.id === productId);

        if (selectedProduct) {

            const existingProduct = cart.find(item => item.id === productId);

            if (existingProduct)
                existingProduct.quantity += 1;
            else
                cart.push({ ...selectedProduct, quantity: 1 });

            localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
                title: `${selectedProduct.name} added to cart!`,
                icon: "success",
                draggable: true
            });
        }

    })
})

const removeBtn = document.querySelectorAll(".remove-button");

removeBtn.forEach(button => {
    button.addEventListener("click", function (e) {
        const productId = parseInt(e.target.getAttribute("data-id"));

        const selectedProduct = products.find(p => p.id === productId);

        if (selectedProduct) {
            Swal.fire({
                title: "Are you sure you want to remove product?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    products = products.filter(p => p.id !== productId);
                    localStorage.setItem("products", JSON.stringify(products));

                    const card = e.target.closest(".card");
                    if (card)
                        card.remove();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
            


        }
    })
})

const logout = document.getElementById("logout");

logout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    Swal.fire({
        title: "Logged out successfully!",
        icon: "success",
        draggable: true
    }).then(() => {
            window.location.href = "index.html";
        });

})



