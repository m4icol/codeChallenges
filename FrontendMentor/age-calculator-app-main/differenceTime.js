
const tiempoActual = new Date();

function difference(lastDate, nowDate) {
    const mLastDate = lastDate.getTime();
    const mDate = nowDate.getTime();

    const resDate = mDate - mLastDate;

    const days = Math.floor(resDate / (1000 * 60 * 60 * 24));

    const years = Math.floor(days / 365.25); 
    const daysInYears = Math.floor(days % 365.25);
    const months = Math.floor(daysInYears / 30.4375); 
    const daysRes = Math.floor(daysInYears % 30.4375); 

    return { years: years, months: months, days: daysRes };
}