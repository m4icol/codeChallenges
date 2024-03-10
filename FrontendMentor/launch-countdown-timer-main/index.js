

setInterval(() => {

    const timeNow = new Date();
    const timeSelect = new Date();

    timeSelect.setDate(95);
    timeSelect.setHours(0);
    timeSelect.setMinutes(0);
    timeSelect.setSeconds(0);

    const diff = timeSelect - timeNow;
    const secondsDiff = Math.floor((diff / 1000) % 60);
    const minutesDiff = Math.floor((diff / (60 * 1000)) % 60);
    const hoursDiff = Math.floor((diff / (60 * 60 * 1000)) % 24);
    const daysDiff = Math.floor(diff / (24 * 60 * 60 * 1000));

    if (timeSelect >= timeNow) {

        document.getElementById('daysDOM').innerHTML = daysDiff.toString().padStart(2, '0');
        document.getElementById('hoursDOM').innerHTML = hoursDiff.toString().padStart(2, '0');
        document.getElementById('minutesDOM').innerHTML = minutesDiff.toString().padStart(2, '0');
        document.getElementById('secondsDOM').innerHTML = secondsDiff.toString().padStart(2, '0');

    } else {
        alert("Vuelve a probarlo");
    }

}, 1000);
