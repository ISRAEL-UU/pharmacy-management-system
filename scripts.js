document.addEventListener("DOMContentLoaded", () => {
    // Select notification elements
    const expiryNotif = document.getElementById("expiryNotif");
    const outOfStockNotif = document.getElementById("outOfStockNotif");

    // Select modals
    const expiryModal = document.getElementById("expiryModal");
    const outOfStockModal = document.getElementById("outOfStockModal");

    // Select close buttons
    const closeExpiry = document.getElementById("closeExpiry");
    const closeOutOfStock = document.getElementById("closeOutOfStock");

    // Show the correct modal when notification icons are clicked
    expiryNotif?.addEventListener("click", () => {
        expiryModal.style.display = "flex";
    });

    outOfStockNotif?.addEventListener("click", () => {
        outOfStockModal.style.display = "flex";
    });

    // Close modals when close buttons are clicked
    closeExpiry?.addEventListener("click", () => {
        expiryModal.style.display = "none";
    });

    closeOutOfStock?.addEventListener("click", () => {
        outOfStockModal.style.display = "none";
    });

    // Close modals when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === expiryModal) {
            expiryModal.style.display = "none";
        }
        if (event.target === outOfStockModal) {
            outOfStockModal.style.display = "none";
        }
    });
});
