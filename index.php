<?php
$bbsSite = "ko";
include("../_admin/lib/config.php");
include("../_admin/lib/common.php");
$url = $_REQUEST["url"];

if(!$url){
	$r_url = $_SERVER['REQUEST_URI'];
	$r_url = explode("?",$r_url);
	$arg = explode("&",$r_url[1]);
	$url = $arg[0];
}
if(!$url) { $url = "main";}
?>
<?php include_once ("include/header.html"); ?>
<?php include_once ($url.".html"); ?>
<?php include_once ("include/footer.html"); ?>
