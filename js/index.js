//* DEVICE DETECTION
var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}


//* Inefficient loading screen stuff. Feel free to create a pull request to fix it



//* Flickity .main-gallery
var flkty = new Flickity('.main-gallery', {
  cellAlign: 'left',
  wrapAround: true,
  prevNextButtons: true,
  autoPlay: 5000
});

//* hex to rgba
function hexToRgba(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}


//* rgba 2 hex
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}


//* Scroll to top
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900);
  });
});
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#to-top').fadeIn('slow');
    } else {
      $('#to-top').fadeOut('slow');
    }
  });
});


//* Auto year (copyright)
$(document).ready(function () {

  var currentTime = new Date()
  var year = currentTime.getFullYear();
  $("#currentYear").html(year);
});


//* Custom cursor
var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: (window.innerWidth / 2),
  endY: (window.innerHeight / 2),
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('.cursor-dot'),
  $outline: document.querySelector('.cursor-dot-outline'),
  init: function () {
    // Set up element sizes
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;
    this.setupEventListeners();
    this.animateDotOutline();
  },
  setupEventListeners: function () {
    var self = this;
    // Anchor hovering
    document.querySelectorAll('a').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener('mouseout', function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });
    // Click events
    document.addEventListener('mousedown', function () {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    document.addEventListener('mouseup', function () {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });
    document.addEventListener('mousemove', function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
      self.$dot.style.top = self.endY + 'px';
      self.$dot.style.left = self.endX + 'px';
    });
    // Hide/show cursor
    document.addEventListener('mouseenter', function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    });
    document.addEventListener('mouseleave', function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    });
  },
  animateDotOutline: function () {
    var self = this;
    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + 'px';
    self.$outline.style.left = self._x + 'px';
    requestAnimationFrame(this.animateDotOutline.bind(self));
  },
  toggleCursorSize: function () {
    var self = this;
    if (self.cursorEnlarged) {
      self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  },
  toggleCursorVisibility: function () {
    var self = this;
    if (self.cursorVisible) {
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  }
}

//* Mobile toggles
if ((document.URL.indexOf("index.html") > -1) && isMobile == false) { 
    document.getElementById('mobileInsert1').innerHTML = `<div class="image"><a href="https://docs.wixstatic.com/ugd/95f27c_72a48d50ec884b488dbb6e6f07ff9c1d.pdf" target="_blank" style="font-weight: bold; text-decoration: none; color: inherit;"><img class="img-responsive" src="media/charms.png" style="transform: scale(0.7);"></a></div>`;
    document.getElementById('mobileInsert2').innerHTML = `<div class="image"><a href="https://docs.wixstatic.com/ugd/95f27c_3d99b0a15db34dd6a0f3a648342f27e0.pdf" target="_blank" style="text-decoration: none; color: inherit;"><img class="img-responsive" src="media/remind.png" style="transform: scale(0.7);"></a></div>`;
    document.getElementById('mobileInsert3').innerHTML = `<div class="image"><a href="#index" style="text-decoration: none; color: inherit;"><img class="img-responsive" src="media/calendar.png" style="transform: scale(0.7);"></a></div>`;
    /*cursor.init(); --Deprecated*/
}

//* Random color between 2 colors
function randomColor(color1, color2) {
  var _regs = {
    "hex3": /^#([a-f\d])([a-f\d])([a-f\d])$/i,
    "hex6": /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    "rgb": /^rgb\s*\(\s*([\d\.]+%?)\s*\,\s*([\d\.]+%?)\s*\,\s*([\d\.]+%?)\s*\)$/
  };
  var _obj1 = getValues(color1);
  var _obj2 = getValues(color2);
  //---Get the colors
  function getValues(color) {
    var values = false;
    for (var prop in _regs) {
      if (_regs[prop].test(color)) {
        values = {};
        values.r = color.replace(_regs[prop], "$1");
        values.g = color.replace(_regs[prop], "$2");
        values.b = color.replace(_regs[prop], "$3");
        if (prop === "rgb") {
          values.r = Number(values.r);
          values.g = Number(values.g);
          values.b = Number(values.b);
        } else {
          values.r = parseInt(values.r, 16);
          values.g = parseInt(values.g, 16);
          values.b = parseInt(values.b, 16);
        }
        break;
      }
    }
    return values;
  }
  //---str_pad
  function str_pad(str, pad_length, pad_string, pad_type) {
    var len = pad_length - str.length;
    if (len < 0) {
      return str
    };
    var pad = new Array(len + 1).join(pad_string);
    if (pad_type === "STR_PAD_LEFT") {
      return pad + str
    };
    return str + pad;
  }
  //---Get a value
  function getRandom(c1, c2, pcent) {
    var color = c1 + Math.floor((c2 - c1) * pcent);
    if (color < 0) color = 0;
    return str_pad(color.toString(16), 2, "0", "STR_PAD_LEFT");
  }
  //---Get a random color
  this.getColor = function () {
    if (_obj1 && _obj2) {
      var random = Math.random();
      var r = getRandom(_obj1.r, _obj2.r, random);
      var g = getRandom(_obj1.g, _obj2.g, random);
      var b = getRandom(_obj1.b, _obj2.b, random);
      return "#" + r + g + b;
    }
    return false;
  };
}

randomColor("#003366", "#00aeef")
var gc1 = getColor();
var gc2 = getColor();


//* random header gradient
function homeHeaderGradient() {
  document.getElementById("home").setAttribute("style", `background: linear-gradient(200deg, ${hexToRgba(gc1, 0.75)} 0%, ${hexToRgba(gc2, 0.75)} 100%);`)
}


//* Random background
function randomBackgroundOnLoad() {
  var x = Math.round(Math.random())
  if (x == 0) {
    document.getElementById("headerbg").setAttribute("style", "background:url(media/background.jpg) no-repeat center center; background-size: cover;")
  } else {
    document.getElementById("headerbg").setAttribute("style", "background:url(media/background2.jpg) no-repeat center center; background-size: cover;")
  }
}


//* add/remove header gradients
function addNavHeaderGradient() {
  document.getElementById("nav").setAttribute("style", `background: linear-gradient(200deg, ${hexToRgba(gc1, 0.75)} 0%, ${hexToRgba(gc2, 0.75)} 100%);`)
}
function remNavHeaderGradient() {
  document.getElementById("nav").setAttribute("style", ``)
}

//* Cursor gradients
function cursorColor() {
  document.getElementById("cursor-dot-outline").setAttribute("style", `background-color: ${gc2};`)
  document.getElementById("cursor-dot").setAttribute("style", `background-color: ${hexToRgba(gc1, 1.0)};`)
}

//* Footer color
function footer() {
  document.getElementById("footer").setAttribute("style", `background: linear-gradient(200deg, ${hexToRgba(gc1, 1.0)} 0%, ${hexToRgba(gc2, 1.0)} 100%);`)
}

//* fix for sticky gradients
let winWidth = window.innerWidth - 120;
(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 180) {
      $('.navbar').addClass('nav--sticky');
      addNavHeaderGradient();
      document.getElementById("colorGradient").setAttribute("style", `filter: invert(100%);`);
    } else {
      $('.navbar').removeClass('nav--sticky');
      remNavHeaderGradient();
      let winConcat = `filter: invert(100%); transform: translate("${winWidth}px", 0px) scale(0.5, 0.5); opacity: 0;`
      document.getElementById("colorGradient").setAttribute("style", winConcat);
    }
  });
})();


//* Mobile fix for sticky navbar
function mobileCompat() {
  if (isMobile == true) {
    if (this.scrollY < 180) {
      if (($('.navbar-collapse').attr('aria-expanded') === "false") || ($('.navbar-collapse').attr('aria-expanded') === undefined)) {
        console.log("hey bit");
        document.getElementById("nav").setAttribute("style", `background: linear-gradient(200deg, ${hexToRgba(gc1, 0.75)} 0%, ${hexToRgba(gc2, 0.75)} 100%);`)
        $('.navbar').addClass('nav--sticky');
      } else if ($('.navbar-collapse').attr('aria-expanded') === "true") {
        document.getElementById("nav").setAttribute("style", ``)
        $('.navbar').removeClass('nav--sticky');
      }
    }
  }
}

$(document).ready(function() {
    
    var eventDataSourceURL = 'https://www.googleapis.com/calendar/v3/calendars/moorehskeyclub@gmail.com/events?key=NTM4MmMwOTUxbzZnNW5xZ241bTUxMWxycDMgbW9vcmVoc2tleWNsdWJAbQ';

    var calendarupdateInterval = 5000;
    var calendarAddedtoPage = false;
    var eventsArray = [];

    
    // Grab json data from Google calendar API
    function getData() {
        eventsArray = [];
        $.getJSON(
            eventDataSourceURL,
            function(result) {
                $.each(result.items, function(i, val) {
                    if (result.items[i].status === "confirmed" && result.items[i].start.dateTime) {
                        if (!result.items[i].summary){
                            result.items[i].summary = 'No Summary found in google calendar'
                        }
                        eventsArray.push({
                            title: val.summary.replace(/['"]+/g, "") + '\n -- event #'+i,
                            start: val.start.dateTime
                        });
                    } else {
                        console.log("could not add due to lacking data ... event date/time or status not confirmed");
                    }
                });
              drawCalendar();
            }
        );
    }



    function drawCalendar() {
        if (calendarAddedtoPage == false) {
            calendarAddedtoPage = true;
            console.log('Create NEW Calendar for dom ' + new Date())
            $("#calendar").fullCalendar({
                defaultView: "month",
                header: {
                    left: "title",
                    center: "",
                    right: 'agendaDay,agendaWeek,month,prev,next'
                },
                buttonIcons: {
                    prev: "left-single-arrow",
                    next: "right-single-arrow",
                    prevYear: "left-double-arrow",
                    nextYear: "right-double-arrow"
                }
            });
            $("#calendar").fullCalendar("removeEventSources");
            $("#calendar").fullCalendar("addEventSource",eventsArray);
            
            setInterval(function(){
                getData()
            }, calendarupdateInterval)
            
        } else if (calendarAddedtoPage == true) {
            console.log('Updating calendar data - ' + new Date())
            
            $("#calendar").fullCalendar('removeEvents');
            $("#calendar").fullCalendar('addEventSource',eventsArray)
        }  
    }
    
    getData();
});



document.onload = randomBackgroundOnLoad(), /*cursorColor() --Deprecated,*/ homeHeaderGradient(), footer();
