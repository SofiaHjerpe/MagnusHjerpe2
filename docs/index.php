<?php
// Inkludera start.php. Innehåller start-html och body
// header, navigation och start av sidinnehåll.



// Kolla vad (om något) som finns i querystringen
// som heter 'sida'. Inkludera sida som korresponerar mot
// värdet. Här kan ni lägga till ytterligare elseif-sater om de behövs.
// Default-sida är pagecontent_start.php
if($_GET['sida']==1){
	require 'page_1.html';
}
elseif($_GET['sida']==2){
	require 'page_2.html';
}
elseif($_GET['sida']==3){
	require 'page_3.html';
}
elseif($_GET['sida']==4){
	require 'page_4.html';
}
elseif($_GET['sida']==5){
	require 'page_5.html';
}

// Default-sida
else{
}

// Inkludera end.php. Innehåller sluttagg för sidinnehåll,
// footer och avslutningstaggar för body och html
require 'end.php';
    
?>
   
