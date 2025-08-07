const isLoggedIn = localStorage.getItem("isLoggedIn");

window.onload = function () {
    const protectedLinks = document.querySelectorAll(".protected-link");

    protectedLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (!isLoggedIn) {
                e.preventDefault(); // Stop navigation
                Swal.fire({
                    title: "Access Denied",
                    text: "Please log in to access this page.",
                    icon: "error"
                });
            }
            // If logged in, allow default navigation
        });
    });
}

const shopNow = document.getElementById("shopNow");

shopNow.addEventListener("click", function () {
    if (!isLoggedIn) {
        Swal.fire({
            title: "Access Denied",
            text: "Please log in to access this page.",
            icon: "error"
        });
    }
    else
        window.location.href = "products.html";
})

const viewProducts = document.getElementById("viewProducts");

viewProducts.addEventListener("click", function () {
    if (!isLoggedIn) {
        Swal.fire({
            title: "Access Denied",
            text: "Please log in to access this page.",
            icon: "error"
        });
    }
    else
        window.location.href = "products.html";
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

