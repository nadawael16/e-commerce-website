let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function () {

    const cartContainer = document.getElementById("cartContainer");

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p> Your cart is empty.</p>";
        return
    }

    cart.forEach(product => {
        const card = document.createElement("div");
        card.className = "card text-center me-5 mb-5";
        card.style.width = "18rem";

        card.innerHTML = `
        <img src= ${product.image} class="card-img-top" alt="...">
            <div class="card-body">
                 <h5 style="color: rgb(51, 1, 92);">${product.name}</h5>
                 <h5 class="card-title" style="color: rgb(51, 1, 92);">${product.price} EGP</h5>
                 <h6 class="quantity" style="color: rgb(51, 1, 92);">Quantity: ${product.quantity}</h6>
            </div>
        </div>`;

        const cardBody = card.querySelector(".card-body");

        const removeButton = document.createElement("button");
        removeButton.className = "btn btn-light w-100 text-danger border-danger remove-button";
        removeButton.setAttribute("data-id", product.id);
        removeButton.innerHTML = `<i class="fa-solid fa-trash"></i> Remove`;

        removeButton.addEventListener("click", function (e) {
            const productId = parseInt(e.target.getAttribute("data-id"));

            Swal.fire({
                title: "Are you sure you want to remove this product from your cart?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, remove it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    cart = cart.filter(p => p.id !== productId);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    card.remove();

                    Swal.fire({
                        title: "Deleted!",
                        text: `${product.name} has been removed from your cart`,
                        icon: "success"
                    });
                }
            });

        })

        cardBody.appendChild(removeButton);
        cartContainer.appendChild(card);
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




