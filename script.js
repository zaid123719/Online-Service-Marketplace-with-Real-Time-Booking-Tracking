function goServices() {
    window.location.href = "services.html";
}

// SELECT SERVICE
function selectService(service) {
    localStorage.setItem("service", service);
    window.location.href = "booking.html";
}

// SHOW SERVICE NAME
if (document.getElementById("serviceName")) {
    document.getElementById("serviceName").innerText =
        "Service: " + localStorage.getItem("service");
}

// CONFIRM BOOKING
function confirmBooking() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;

    if (name === "" || address === "") {
        alert("Please fill all details");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("address", address);

    alert("Booking Confirmed ✅");
    window.location.href = "dashboard.html";
}

// DASHBOARD DATA
if (document.getElementById("service")) {
    document.getElementById("service").innerText =
        localStorage.getItem("service");
}

// LIVE TRACKING SIMULATION
if (document.getElementById("distance")) {
    let distance = 5;

    setInterval(() => {
        if (distance > 0) {
            distance--;
            document.getElementById("distance").innerText = distance;
        }
    }, 2000);
}
function selectService(service) {
    localStorage.setItem("service", service);
    window.location.href = "booking.html";
}
function selectService(service) {
    localStorage.setItem("service", service);
    window.location.href = "booking.html";
}

if (document.getElementById("serviceName")) {
    document.getElementById("serviceName").innerText =
        "Booking for: " + localStorage.getItem("service");
}

function confirmBooking() {
    alert("Booking Confirmed!");
}