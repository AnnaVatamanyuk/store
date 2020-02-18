function navOpener() {
  $('.nav-opener').on('click', function () {
    if($('body').hasClass('active')){
      $('body').removeClass('active');
    }else {
      $('body').addClass('active');
    }
  });
}

function topBarOpener() {
  $('.top-bar-opener').on('click', function () {
    if($('body').hasClass('active-top-bar')){
      $('body').removeClass('active-top-bar');
    }else {
      $('body').addClass('active-top-bar');
    }
  });
}

$(function () {
  $('#tabs-block_holder').tabs({
    activate: function (event, ui) {
      ui.oldTab.removeClass('active');
      ui.newTab.addClass('active');
    },
  });
});

$(function () {
  $('.quote-slide .slider .slider-content').slick({
    dots:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    responsive:[
      {
        breakpoint:1151,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint:921,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint:580,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(function(){
  navOpener();
  rangeSlider();
  asideOpen();
  asideClose();
  dialogInit();
  profileOpen();
  topBarOpener();
});

function rangeSlider() {
  if ($('#price-range').length) {
    $('#price-range').ionRangeSlider({
      type: 'double',
      grid: false,
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$",
      hide_min_max: true
    });
  }

  if ($('#price-range-row').length) {
    $('#price-range-row  ').ionRangeSlider({
      type: 'double',
      grid: false,
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$",
      hide_min_max: true
    });
  }
}

function asideOpen() {
  $('.aside-opener').on('click', function(){
    if($('body').hasClass('active-aside')){
      $('body').removeClass('active-aside');
    } else {
      $('body').addClass('active-aside');
    }
  });
}

function asideClose() {
  $('.aside-close').on('click', function(){
    if($('body').hasClass('active-aside')){
      $('body').removeClass('active-aside');
    } else {
      $('body').addClass('active-aside');
    }
  });
}

function dialogInit() {

  var setFormSize = function () {
    if ($(window).width() <= 768 && $(window).width() > 620) {
      return 600;
    }
    else if ($(window).width() <= 620 && $(window).width() > 520) {
      console.log($(window).width());
      return 500;
    }
    else if ($(window).width() <= 520 && $(window).width() > 375) {
      console.log($(window).width());
      return 350;
    }
    else if ($(window).width() <= 375) {
      console.log($(window).width());
      return 250;
    }
    else {
      return 730;
    }
  };

  $( "#dialog" ).dialog({
    width:setFormSize(),
    autoOpen: false,
    show: {
      effect: "fade",
      duration: 300
    },
    hide: {
      effect: "fade",
      duration: 300
    }
  });

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
  });
}

function profileOpen () {
  $('.js-opener').on('click', function(){
    if($(this).hasClass('active')){
      $('.js-opener').removeClass('active');
    } else {
      $('.js-opener').removeClass('active');
      $(this).addClass('active');
    }
  })
}