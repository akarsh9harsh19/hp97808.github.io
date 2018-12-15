function dateCalculater() {
    var date = document.getElementById('date').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var firstTwoYear = year.substring(0, 2);
    var lastTwoYear = year.substring(2, 4);
    var byFour = Math.floor(lastTwoYear / 4);

    if (firstTwoYear == 16) {
        firstTwoYear = 6;
    }
    if (firstTwoYear == 17) {
        firstTwoYear = 4;
    }
    if (firstTwoYear == 18) {
        firstTwoYear = 2;
    }
    if (firstTwoYear == 19) {
        firstTwoYear = 0;
    }
    if (firstTwoYear == 20) {
        firstTwoYear = 6;
    }
    if (firstTwoYear == 21) {
        firstTwoYear = 4;
    }

    var sum = Number(date) + Number(lastTwoYear) + Number(firstTwoYear) + Number(byFour) + Number(month);
    var day = sum % 7;
    if (day == 0) {
        day = 'Saturday';
    }
    if (day == 1) {
        day = 'Sunday';
    }
    if (day == 2) {
        day = 'Monday';
    }
    if (day == 3) {
        day = 'Tuesday';
    }
    if (day == 4) {
        day = 'Wednesday';
    }
    if (day == 5) {
        day = 'Thursday';
    }
    if (day == 6) {
        day = 'Friday';
    }

    document.getElementById('para').innerHTML = 'This day is ' + day + '.';
}