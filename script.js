


Y
        // Define reusable functions
        function updateClock() {
            const clockElement = document.getElementById("clock");
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; // Convert to 12-hour format

            if (clockElement) {
                clockElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
            }
        }

        function pad(num) {
            return num.toString().padStart(2, '0');
        }

        function updateDate() {
            const now = new Date();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            const dayName = days[now.getDay()];
            const monthName = months[now.getMonth()];
            const year = now.getFullYear();

            const dateElement = document.getElementById('date');
            if (dateElement) {
                dateElement.textContent = `${dayName}, ${monthName} ${now.getDate()}, ${year}`;
            }
        }

        document.addEventListener("DOMContentLoaded", () => {
            // Initialize clock and date
            setInterval(updateClock, 1000); // Updates every second
            updateClock(); // Call once on load
            updateDate(); // Update date once on load

            // Example counts for notifications
            const expiryCount = 2; // Replace with dynamic count
            const outOfStockCount = 3; // Replace with dynamic count

            // Update the superscript numbers dynamically
            const expiryCountElement = document.getElementById("expiryCount");
            const outOfStockCountElement = document.getElementById("outOfStockCount");

            if (expiryCountElement) {
                expiryCountElement.textContent = expiryCount;
            } else {
                console.error("Element with ID 'expiryCount' not found.");
            }

            if (outOfStockCountElement) {
                outOfStockCountElement.textContent = outOfStockCount;
            } else {
                console.error("Element with ID 'outOfStockCount' not found.");
            }

            // Notification modals logic
            const expiryNotifBell = document.getElementById("expiryNotifBell");
            const outOfStockNotifCart = document.getElementById("outOfStockNotifCart");

            const expiryModal = document.getElementById("expiryModal");
            const outOfStockModal = document.getElementById("outOfStockModal");

            const closeExpiry = document.getElementById("closeExpiry");
            const closeOutOfStock = document.getElementById("closeOutOfStock");

            const nearExpiryNotifications = [
                { item: "Ibuprofen", expiryDate: "2025-04-15", details: "Batch #123, Storage A3" },
                { item: "Aspirin", expiryDate: "2025-04-20", details: "Batch #456, Storage B1" },
            ];
            const outOfStockNotifications = [
                { item: "Paracetamol", stockLevel: 0, details: "Reorder urgently. Supplier: MedCorp" },
                { item: "Amoxicillin", stockLevel: 0, details: "Expected delivery: 5 days" },
            ];

            expiryNotifBell?.addEventListener("click", () => {
                expiryModal.style.display = "flex";
                const tableBody = expiryModal.querySelector("tbody");
                tableBody.innerHTML = ""; // Clear previous rows
                nearExpiryNotifications.forEach((notification, index) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${notification.item}</td>
                        <td>${notification.expiryDate}</td>
                        <td><button class="action-button" data-index="${index}" data-type="expiry">View Details</button></td>
                    `;
                    tableBody.appendChild(row);
                });

                expiryModal.querySelectorAll(".action-button").forEach(button => {
                    button.addEventListener("click", (e) => {
                        const index = e.target.getAttribute("data-index");
                        const notification = nearExpiryNotifications[index];
                        alert(`Item: ${notification.item}\nDetails: ${notification.details}`);
                    });
                });
            });

            outOfStockNotifCart?.addEventListener("click", () => {
                outOfStockModal.style.display = "flex";
                const tableBody = outOfStockModal.querySelector("tbody");
                tableBody.innerHTML = ""; // Clear previous rows
                outOfStockNotifications.forEach((notification, index) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${notification.item}</td>
                        <td>${notification.stockLevel}</td>
                        <td><button class="action-button" data-index="${index}" data-type="out-of-stock">View Details</button></td>
                    `;
                    tableBody.appendChild(row);
                });

                outOfStockModal.querySelectorAll(".action-button").forEach(button => {
                    button.addEventListener("click", (e) => {            outOfStockModal.querySelectorAll(".action-button").forEach(button => {
                        button.addEventListener("click", (e) => {
                            const index = e.target.getAttribute("data-index");
                            const notification = outOfStockNotifications[index];
                            alert(`Item: ${notification.item}\nDetails: ${notification.details}`);
                        });
                    });
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
                    if (event.target === expiryModal && !expiryModal.querySelector('.modal-content').contains(event.target)) {
                        expiryModal.style.display = "none";
                    }
                    if (event.target === outOfStockModal && !outOfStockModal.querySelector('.modal-content').contains(event.target)) {
                        outOfStockModal.style.display = "none";
                    }
                });
            });
        
        
   const ctx = document.getElementById('myChart');

   new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       datasets: [{
         label: '# of Votes',
         data: [12, 19, 3, 5, 2, 3],
         borderWidth: 1
       }]
     },
     options: {
       scales: {
         y: {
           beginAtZero: true
         }
       }
     }
   });
        }
               

/*
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // convert to 12-hour format

    clockElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
}
function updateClock() {
    const expiryCountElement = document.getElementById("expiryCount");
    console.log("Expiry Count Element:", expiryCountElement); // Log element

    if (expiryCountElement) {
        expiryCountElement.textContent = "2"; // Replace with dynamic value
    } else {
        console.error("Element with ID 'expiryCount' not found.");
    }
}



function pad(num) {
    return num.toString().padStart(2, '0');
}

setInterval(updateClock, 1000);
updateClock(); // call once on load
*/

   

   /* function updateDate() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const year = now.getFullYear();

        const dateElement = document.getElementById('date');
        dateElement.textContent = `${dayName}, ${monthName} ${now.getDate()}, ${year}`;
    }
    updateDate();*/




   /*document.addEventListener("DOMContentLoaded", () => {
    // Select notification icons
    const expiryNotifBell = document.getElementById("expiryNotifBell");
    const outOfStockNotifCart = document.getElementById("outOfStockNotifCart");

    // Select modals
    const expiryModal = document.getElementById("expiryModal");
    const outOfStockModal = document.getElementById("outOfStockModal");

    // Select close buttons
    const closeExpiry = document.getElementById("closeExpiry");
    const closeOutOfStock = document.getElementById("closeOutOfStock");

    // Example data for notifications
    const nearExpiryNotifications = [
        { item: "Ibuprofen", expiryDate: "2025-04-15", details: "Batch #123, Storage A3" },
        { item: "Aspirin", expiryDate: "2025-04-20", details: "Batch #456, Storage B1" },
    ];
    const outOfStockNotifications = [
        { item: "Paracetamol", stockLevel: 0, details: "Reorder urgently. Supplier: MedCorp" },
        { item: "Amoxicillin", stockLevel: 0, details: "Expected delivery: 5 days" },
    ];

    // Show expiry modal and populate near-expiry data
    expiryNotifBell?.addEventListener("click", () => {
        expiryModal.style.display = "flex";

        const tableBody = expiryModal.querySelector("tbody");
        tableBody.innerHTML = ""; // Clear previous rows
        nearExpiryNotifications.forEach((notification, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${notification.item}</td>
                <td>${notification.expiryDate}</td>
                <td><button class="action-button" data-index="${index}" data-type="expiry">View Details</button></td>
            `;
            tableBody.appendChild(row);
        });

        // Add click event listeners to "View Details" buttons
        expiryModal.querySelectorAll(".action-button").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                const notification = nearExpiryNotifications[index];
                alert(`Item: ${notification.item}\nDetails: ${notification.details}`);
            });
        });
    });

    // Show out-of-stock modal and populate out-of-stock data
    outOfStockNotifCart?.addEventListener("click", () => {
        outOfStockModal.style.display = "flex";

        const tableBody = outOfStockModal.querySelector("tbody");
        tableBody.innerHTML = ""; // Clear previous rows
        outOfStockNotifications.forEach((notification, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${notification.item}</td>
                <td>${notification.stockLevel}</td>
                <td><button class="action-button" data-index="${index}" data-type="out-of-stock">View Details</button></td>
            `;
            tableBody.appendChild(row);
        });

        // Add click event listeners to "View Details" buttons
        outOfStockModal.querySelectorAll(".action-button").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                const notification = outOfStockNotifications[index];
                alert(`Item: ${notification.item}\nDetails: ${notification.details}`);
            });
        });
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
// Check if the click is outside the modal content
if (event.target === expiryModal && !expiryModal.querySelector('.modal-content').contains(event.target)) {
expiryModal.style.display = "none";
}
if (event.target === outOfStockModal && !outOfStockModal.querySelector('.modal-content').contains(event.target)) {
outOfStockModal.style.display = "none";
}
});

});
document.addEventListener("DOMContentLoaded", () => {
    // Example counts for notifications
    const expiryCount = 2; // Replace with dynamic count
    const outOfStockCount = 3; // Replace with dynamic count

    // Update the superscript numbers dynamically
    document.getElementById("expiryCount").textContent = expiryCount;
    document.getElementById("outOfStockCount").textContent = outOfStockCount;
});
document.addEventListener("DOMContentLoaded", () => {
    updateClock();
});

*/