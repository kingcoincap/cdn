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
$('#data-table').DataTable({
   drawCallback: function(){
    $('.lazy img')
      .visibility({
        type       : 'image',
        transition : 'fade in',
        duration   : 1000
    });
   }
});
semantic.menu = {};

// ready event
semantic.menu.ready = function() {

  // selector cache
  var
    $dropdownItem = $('.main.container .menu .dropdown .item'),
    $popupItem    = $('.main.container .popup.example .browse.item'),
    $menuItem     = $('.main.container .menu a.item, .menu .link.item').not($dropdownItem),
    $dropdown     = $('.main.container .menu .ui.dropdown'),
    // alias
    handler = {

      activate: function() {
        if(!$(this).hasClass('dropdown browse')) {
          $(this)
            .addClass('active')
            .closest('.ui.menu')
            .find('.item')
              .not($(this))
              .removeClass('active')
          ;
        }
      }

    }
  ;

  $dropdown
    .dropdown({
      on: 'hover'
    })
  ;

  $('.main.container .ui.search')
    .search({
      type: 'category',
      apiSettings: {
        action: 'categorySearch'
      }
    })
  ;

  $('.school.example .browse.item')
    .popup({
      popup     : '.admission.popup',
      hoverable : true,
      position  : 'bottom left',
      delay     : {
        show: 300,
        hide: 800
      }
    })
  ;

  $popupItem
    .popup({
      inline   : true,
      hoverable: true,
      popup    : '.fluid.popup',
      position : 'bottom left',
      delay: {
        show: 300,
        hide: 800
      }
    })
  ;

  $menuItem
    .on('click', handler.activate)
  ;

};


// attach ready event
$(document)
  .ready(semantic.menu.ready)
;