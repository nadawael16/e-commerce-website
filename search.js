
let products = JSON.parse(localStorage.getItem("products")) || [];
document.addEventListener("DOMContentLoaded", function () {

    const searchQuery = localStorage.getItem("searchQuery");
    let allProducts = JSON.parse(localStorage.getItem("products")) || [];
    let searchProducts = [];

    if (searchQuery) {
        searchProducts = allProducts.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            (p.category && p.category.toLowerCase().includes(searchQuery))
        );

        localStorage.removeItem("searchQuery");


    }
    else {
        // If no search query, show message
        searchProducts = [];
    }

    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous results


    if (searchProducts.length === 0) {
        container.innerHTML = "<p>No products found.</p>";
        return
    }

    searchProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "card text-center me-5 mb-5";
        card.style.width = "18rem";

        card.innerHTML = `
        <img src= ${product.image} class="card-img-top" alt="...">
            <div class="card-body">
                 <h5 style="color: rgb(51, 1, 92);">${product.name}</h5>
                 <h5 class="card-title" style="color: rgb(51, 1, 92);">${product.price} EGP</h5>
            </div>
        </div>`;

        const cardBody = card.querySelector(".card-body");

        const addToCartButton = document.createElement("button");
        addToCartButton.className = "btn btn-light w-100 text-success border-success add-to-cart-button";
        addToCartButton.setAttribute("data-id", product.id);
        addToCartButton.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add To Cart`;


        const removeButton = document.createElement("button");
        removeButton.className = "btn btn-light w-100 text-danger border-danger remove-button mt-3";
        removeButton.setAttribute("data-id", product.id);
        removeButton.innerHTML = `<i class="fa-solid fa-trash"></i> Remove`;


        removeButton.addEventListener("click", function (e) {
            const productId = parseInt(e.target.getAttribute("data-id"));

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

                    // Get fresh products from localStorage
                    let currentProducts = JSON.parse(localStorage.getItem("products")) || [];

                    // Filter out the deleted product
                    currentProducts = currentProducts.filter(p => p.id !== productId);

                    // Update localStorage
                    localStorage.setItem("products", JSON.stringify(currentProducts));

                    card.remove();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });

        })

        addToCartButton.addEventListener("click", function (e) {
            const productId = parseInt(e.target.getAttribute("data-id"));
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let products = JSON.parse(localStorage.getItem("products"));

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

        cardBody.appendChild(addToCartButton);
        cardBody.appendChild(removeButton);

        container.appendChild(card);
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





