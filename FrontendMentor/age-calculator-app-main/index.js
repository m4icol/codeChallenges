document.getElementById("date-submit").addEventListener("click", function() {
    const inputDay = parseInt(document.getElementById("input-day").value);
    const inputMonth = parseInt(document.getElementById("input-month").value);
    const inputYear = parseInt(document.getElementById("input-year").value);

    document.querySelectorAll('.input-error').forEach(function(error) {
        error.style.display = 'none';
    });

    let errorOccurred = false;

    if (isNaN(inputDay) || inputDay < 1 || inputDay > 31) {
        document.querySelector('.form-day .input-error').style.display = 'block';
        errorOccurred = true;
        
    } if (isNaN(inputMonth) || inputMonth < 1 || inputMonth > 12) {
        document.querySelector('.form-month .input-error').style.display = 'block';
        errorOccurred = true;

    } if (isNaN(inputYear) || inputYear < 0 || inputYear > 2024) {
        document.querySelector('.form-year .input-error').style.display = 'block';
        errorOccurred = true;
    }

    if (errorOccurred) {
        return;
    }

    const tiempoUser = new Date(inputYear, inputMonth - 1, inputDay);
    const tiempoActual = new Date();
    const differenceObj = difference(tiempoUser, tiempoActual);

    let yearDOM = document.getElementById("result-years");
    let monthDOM = document.getElementById("result-months");
    let dayDOM = document.getElementById("result-days");

    yearDOM.innerHTML = `${differenceObj.years}`;
    monthDOM.innerHTML = `${differenceObj.months}`;
    dayDOM.innerHTML = `${differenceObj.days}`;

});
