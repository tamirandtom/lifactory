$(document).ready(function() { 



    $("body").on('click touchend','.drag', function() {
        var el = $(this), // The box that was clicked
            max = 0;
        // Find the highest z-index
        $(".drag").each(function() {
            // Find the current z-index value
            var z = parseInt( $( this ).css( "z-index" ), 10 );
            // Keep either the current max, or the current z-index, whichever is higher
            max = Math.max( max, z );
        });

        // Set the box that was clicked to the highest z-index plus one
        el.css("z-index", max + 1 );
    });

var closeups = ["<span class='itemtitle alef'><u>The Lovers</u></span><div class='sliclass'><div><img src='images/thelovers1.jpg'></div><div><img src='images/thelovers2.jpg'></div><div><img src='images/thelovers3.jpg'></div><div><img src='images/thelovers4.jpg'></div></div>",
"<span class='itemtitle alef'><u>עסקית צהרים</u></span><div class='sliclass'><div><img src='images/Business_lunch1.jpg'></div><div><img src='images/Business_lunch2.jpg'></div><div><img src='images/Business_lunch3.jpg'></div><div><img src='images/Business_lunch4.jpg'></div></div>", 
            "<span class='itemtitle alef'><u>קפה ומאפה</u></span><div class='sliclass'><div><img src='images/Kafeve1.jpg'></div><div><img src='images/Kafeve2.jpg'></div><div><img src='images/Kafeve3.jpg'></div><div><img src='images/Kafeve4.jpg'></div><div><img src='images/Kafeve5.jpg'></div></div>", 
"<span class='itemtitle alef'><u>הטבות למחזיקים בכרטיס פלטינום</u></span><div class='sliclass'><div><img src='images/creditcard1.jpg'></div><div><img src='images/creditcard2.jpg'></div><div><img src='images/creditcard3.jpg'></div></div>", 
"<span class='itemtitle alef'><u>Feeling Exited</u></span><div class='sliclass'><div><img src='images/Bazarit1.jpg'></div><div><img src='images/Bazarit2.jpg'></div><div><img src='images/Bazarit3.jpg'></div></div>", 
"<span class='itemtitle alef'><u>Comfort</u></span><div class='sliclass'><div><img src='images/Mityabesh_.jpg'></div><div><img src='images/Mityabesh1.jpg'></div><div><img src='images/Mityabesh2.jpg'></div></div>",
"<span class='itemtitle alef'><u>The Lost Of Memory</u></span><div class='sliclass'><div><img src='images/Ipad1.jpg'></div><div><img src='images/Ipad2.jpg'></div><div><img src='images/Ipad3.jpg'></div></div>",
"<span class='itemtitle alef'><u>Recent Activity</u></span><div class='sliclass'><div><img src='images/recent_popup_01.jpg'></div><div><img src='images/recent_popup_02.jpg'></div><div><img src='images/recent_popup_03.jpg'></div><div><img src='images/recent_popup_04.jpg'></div><div><img src='images/recent_popup_05.jpg'></div></div>",
"<span class='itemtitle alef'><u>מראה הצבה</u></span><div class='sliclass'><div><img src='images/Shonut1_horiz.jpg'></div><div><img src='images/Shonut2_horizon.jpg'></div><div><img src='images/Shonut3_horizon.jpg'></div></div>" ];


var items = ["<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>הטבות למחזיקים בכרטיס פלטינום</u></span><br><img src='images/Credit_Card.jpg' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>Feeling Exited</u></span><br><img src='images/Feeling_exited.jpg' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>Comfort</u></span><br><img src='images/Mityabesh.jpg' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>Public</u></span><br><img src='images/public_1.jpg' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>Recent Activity</u></span><br><img src='images/Recent_Activity.jpg' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>עסקית צהרים</u></span><br><img src='images/Business_Lunch.jpg' class='contentimg'></div></div>",
  "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>The Lovers</u></span><br><img src='images/TheLovers.jpg' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>לכל איש יש שם</u></span><br><div class='vendor'><iframe src='https://www.youtube.com/embed/Ua37v9RwnVE?autoplay=0&loop=1&controls=0&showinfo=0;' frameborder='0' allowfullscreen></iframe></div></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>wedding magnets</u></span><br><div class='vendor'><iframe src='https://www.youtube.com/embed/2qtE_mrPK6g?autoplay=0&loop=1&controls=0&showinfo=0;' frameborder='0' allowfullscreen></iframe></div></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>Timeline Photos</u></span><br><div class='vendor'><iframe src='https://www.youtube.com/embed/qsySlx_Wq2w?autoplay=0&loop=1&controls=0&showinfo=0;' frameborder='0' allowfullscreen></iframe></div></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>את הגזם יש להוציא ערב לפני האיסוף</u></span><br><div class='vendor'><iframe src='https://www.youtube.com/embed/LA9ndXJhGCc?autoplay=0&loop=1&controls=0&showinfo=0;' frameborder='0' allowfullscreen></iframe></div></div></div>"];
shuffle(items);
var backgrounds = ["images/full-1.png", "images/full-2.png", "images/full-3.png","images/full-4.png","images/full-5.png","images/full-6.png","images/full-7.png","images/full-8.png","images/full-9.png","images/full-10.png","images/full-11.png","images/full-12.png","images/full-13.png","images/full-14.png","images/full-15.png","images/full-16.png","images/full-17.png","images/full-18.png"];



function pop(content) {
 $('body').append("<div class='drag popup' style='display:none;top:"+Math.floor(Math.random() * 50)+"vh;left:calc("+Math.floor(Math.random() * ($(window).width()-550))+"px);'><img src='images/button.png' class='closebut'><div class='dialogtop'></div><div class='slickwrapper'>"+content+"</div><div class='dialogbottom'></div></div>")
 $('.drag').show(400);
 $('.closebut').on('click touchstart', function() { $(this).parent('.popup').hide(400);$(this).parent('.popup').remove();}); 
   $('.sliclass').slick({autoplay:true ,arrows: false, infinite: true, speed: 300, slidesToShow: 1, touchMove: true, touchThreshold: 100});
   
}

$('#aboutdiv').on('click', function() {

 pop("<div id='aboutin' class='alef'>על 'מפעל חיים':<br>התערוכה מציעה מבט על שלל תבניות חזרתיות מחיי היום יום שלנו. ריטואלים שקופים שכולנו לוקחים בהם חלק; מנגנון שמשמר את תחושת ה״בסדר״ - ומה שנמצא בתוך הסדר. אנו נאחזים בארגון ובתפקוד דרך מערכת פעולות סדרתיות משותפות המנסות להפוך את המציאות למשהו ש״עובד״. פירוק המציאות הזו, הפיזית והוירטואלית, לאבני הבנין היסודיות, חושף את הרצון האנושי הבסיסי - לקבל אישור לכך שאנו חיים.<br><br>התערוכה נוצרה בתמיכת המחלקה לתקשורת חזותית בבצלאל, במסגרת שבוע האיור, 2014, תל אביב.<br><br>על היוצרים<br><br><b>ניב תשבי</b> - נולד ב1986, חי ויוצר בתל אביב. בוגר בהצטיינות של המחלקה לתקשורת חזותית, בצלאל 2012.מציג בתערוכות בישראל ובעולם ביניהן:<br>Comfort Zone (גלריה בנימין, ת\"א, 2015)<br>ReCover (משכנות שאננים ובית אריאלה, 2014)<br>הגירסה המאויירת (מוזיאון ארץ ישראל, 2014)<br>אומת האיור (בית האמנים, 2014)<br>משחקים במוזיאון העיצוב (מוזיאון העיצוב חולון, 2014)<br><div class='ltrabout'>By The Way (Photographic Society Dreiland, Germany, 2014)<br>International Art symposium (Stadtmuseum Neustadt an der Weinstraße, Germany, 2014)</div><br><br><b>טל גרנות</b> - נולדה ב1987, חיה ויוצרת בתל אביב. בוגרת בהצטיינות של המחלקה לתקשורת חזותית, בצלאל 2012.<br>זוכת 'Illustrative Festival, ‘Young Illustrators Award, ברלין 2014.<br>מציגה בתערוכות בישראל ובעולם, ביניהן:<br>Comfort Zone (גלריה בנימין, ת\"א, 2015)<br><div class='ltrabout'>Visual Poetry Festival (Center for Experimental Art, Athens, Greece, 2015)<br>(All Inclusive ,(Direktorenhaus Gallery, Berlin, 2014<br>(2014, In Print (Work Detroit Gallery, Dtroit, USA<br>Budapest Architecture Film Festival (Budapest, Hungary, 2014)<br></div>(גלריה התחנה, ת”א, 2013) Homophile <br></div>"); 
  pop("<div class='sliclass'><div><img src='images/about1.jpg'></div><div><img src='images/about2.jpg'></div><div><img src='images/about3.jpg'></div><div><img src='images/about4.jpg'></div><div><img src='images/about5.jpg'></div></div>"); 

});

  

// target elements with the "draggable" class
interact('.drag')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
   

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(event.dx * event.dx +
                     event.dy * event.dy)|0) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing demo
  window.dragMoveListener = dragMoveListener;
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#postswrapper').css('top',(0-(scrolled*1.5))+'px');
}




//glitched scroll
$("#wrapper").on('touchstart', function() {  
if (Math.floor(Math.random() * 10) == 9) {  $('#glitchdiv').show(); }
});
$("#wrapper").on('click touchend', function(event) {
       $('#glitchdiv').hide();
});


    function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var curritempos = 0 ;
        $(window).scroll(function(){
            parallaxScroll();
           if ((Math.floor(Math.random() * 99) == 9) && ($(window).scrollTop() > $(window).height()*5)) {  pop(closeups[Math.floor(Math.random()*closeups.length)]);  $('.sliclass').slick({ autoplay:true, arrows: false, infinite: true, speed: 300, slidesToShow: 1, touchMove: true, touchThreshold: 100});};
            
            if($(window).scrollTop() + $(window).height() + 300  >= getDocHeight())
            {
                $('#bodywrapper').append('<img src="' + backgrounds[Math.floor(Math.random()*backgrounds.length)] + '">');
                $('#postswrapper').append(items[curritempos]);
                curritempos++;
                if (curritempos > items.length) {curritempos=0; shuffle(items);}
                $('#postswrapper').append(items[curritempos]);
                curritempos++;
                if (curritempos > items.length) {curritempos=0; shuffle(items);}
            }
        });

//pop('<img src="images/opening.jpg"');
$('#bodywrapper').append('<img src="' + backgrounds[Math.floor(Math.random()*backgrounds.length)] + '">');
                
                $('#bodywrapper').append('<img src="' + backgrounds[Math.floor(Math.random()*backgrounds.length)] + '">');
                $('#postswrapper').append(items[Math.floor(Math.random()*items.length)])

});