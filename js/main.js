// Esperar a que cargue la página
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    
    setTimeout(function() {
        // Usamos display none para que el loader desaparezca físicamente
        loader.classList.add("loader-hidden");
        document.body.style.overflow = "auto";
    }, 1500);
});

// Bloquear scroll al inicio
document.body.style.overflow = "hidden";
