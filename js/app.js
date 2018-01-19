$(document).ready(function() {
  var utc = $('#utcTime');

  utc.html(getTime());
  $('#utcLabel').html('UTC Time');

  setInterval(function() {
    utc.html(getTime());
  }, 1000);

  function getTime() {
    var d = new Date();
    var hour = d.getUTCHours();
    var minute = d.getUTCMinutes();
    var second = d.getUTCSeconds();
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    return hour + ':' + minute + ':' + second;
  }

});
$(document).ready(function() {
    $('#data-table').DataTable( {
        "paging":   true,
        "length": false,
        "info":     true
    } );
});
$('.lazy img')
  .visibility({
    type       : 'image',
    transition : 'fade in',
    duration   : 1000
 });