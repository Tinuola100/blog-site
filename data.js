module.exports = getDate;
function getDate() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = new Date()
    var day = '';
    day = date.toLocaleDateString("en-US", options);
    return day;
}
