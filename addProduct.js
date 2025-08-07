const addProductForm = document.getElementById("addProduct-form");
const addProductButton = document.getElementById("addProduct-btn");

let products = JSON.parse(localStorage.getItem("products")) || [];

addProductButton.addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image-url").value;
    let id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

    if (!name || !price || !category || !image) {
        Swal.fire({
            title: "Error!",
            text: "Please fill all fields",
            icon: "error"
        });
        return;
    }

    products.push({ id, name, price, image, category });

    localStorage.setItem("products", JSON.stringify(products));

    Swal.fire({
        title: "Success!",
        text: "Product added successfully",
        icon: "success"
    }).then(() => {
        addProductForm.reset();
    });
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