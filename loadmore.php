
<?php 



$frontworks = array("images/Business_Lunch.jpg", "images/Credit_Card.jpg", "images/Feeling_exited.jpg","images/Mityabesh.jpg","images/public_1.jpg","images/Recent_Activity.jpg");
$fronttitles = array("עסקית צהרים", "הטבות למחזיקים בכרטיס פלטינום", "Feeling Exited","Comfort", "Public", "Recent Activity");

$toecho = array("<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>".$fronttitles[1]."</u></span><br><img src='".$frontworks[1]."' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>".$fronttitles[2]."</u></span><br><img src='".$frontworks[2]."' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>".$fronttitles[3]."</u></span><br><img src='".$frontworks[3]."' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>".$fronttitles[4]."</u></span><br><img src='".$frontworks[4]."' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>".$fronttitles[5]."</u></span><br><img src='".$frontworks[5]."' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>".$fronttitles[0]."</u></span><br><img src='".$frontworks[0]."' class='contentimg'></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>לכל איש יש שם</u></span><br><div class='vendor'><iframe src='https://www.youtube.com/embed/Ua37v9RwnVE?autoplay=0&loop=1&controls=0&showinfo=0;' frameborder='0' allowfullscreen></iframe></div></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>wedding magnets</u></span><br><div class='vendor'><iframe src='https://www.youtube.com/embed/tTIaMsCTOWw?autoplay=0&loop=1&controls=0&showinfo=0;' frameborder='0' allowfullscreen></iframe></div></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>Timeline Photos</u></span><br><div class='vendor'><iframe src='https://www.youtube.com/embed/qsySlx_Wq2w?autoplay=0&loop=1&controls=0&showinfo=0;' frameborder='0' allowfullscreen></iframe></div></div></div>",
 "<div class='aligncenter'><div class='item'><span class='itemtitle alef'><u>את הגזם יש להוציא ערב לפני האיסוף</u></span><br><div class='vendor'><iframe src='https://www.youtube.com/embed/LA9ndXJhGCc?autoplay=0&loop=1&controls=0&showinfo=0;' frameborder='0' allowfullscreen></iframe></div></div></div>");
shuffle($toecho);

foreach ($toecho as $value) {
    echo $value;
}


?>