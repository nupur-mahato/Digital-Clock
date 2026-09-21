function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const time =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + " " +
        ampm;

    document.getElementById("clock").textContent = time;

    const date = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("date").textContent = date;
}

updateClock();

setInterval(updateClock, 1000);
