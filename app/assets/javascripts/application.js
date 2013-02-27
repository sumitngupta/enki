// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require spin
//= require jquery.imgpreload
//= require common
//= require live-comment-preview
//= require_self


//http://i.embed.ly/1/image/resize?height=800&width=1100&url=http%3A%2F%2Fblog.sumitngupta.com%2Fassets%2Fcovers%2F2-bca392396952ed0909f5c37d38bfddf5.jpg&key=fb3c4ef788e74e888046dabf72245ec0

$(function () {
  var spinner,
    $headerContainer = $('#header-container'),
    $header = $('#header'),
    $spinner = $headerContainer.find('.spinner-container'),
    width = $(window).width(),
    url = 'http://i.embed.ly/1/image/resize?width=' + headerWidth(width) + '&url=http%3A%2F%2Fblog.sumitngupta.com%2Fassets%2Fcovers%2F2-bca392396952ed0909f5c37d38bfddf5.jpg&key=fb3c4ef788e74e888046dabf72245ec0/';

  spinner = new Spinner({color: '#666'}).spin();
  $spinner.append(spinner.el);

  $.imgpreload(url, function () {
    var backgroundImageStyle = 'url("' + this[0].src + '")';

    $header
      .css({
        'background-image': backgroundImageStyle,
        'opacity': 1
      });

    $spinner.remove();
  });
});

function headerWidth(width) {
  if (width < 400) {
    return 400;
  } else if (width > 400 && width < 1200) {
    return 1200;
  } else if (width > 1200 && width < 1600) {
    return 1600;
  } else if (width > 1600 && width < 2000) {
    return 2000;
  } else if (width > 2000) {
    return 2880;
  } else {
    return 1600;
  }
}
