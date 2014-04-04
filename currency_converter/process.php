<?php
 $amount =(!empty($_REQUEST['selectedamount']))?$_REQUEST['selectedamount']:1;


if((!empty($_REQUEST["selectedCountries1"])) && (!empty($_REQUEST["selectedCountries2"])))
{
 
  $from_Currency = urlencode($_REQUEST["selectedCountries1"]);
  $to_Currency = urlencode($_REQUEST["selectedCountries2"]);
  $get = file_get_contents("http://www.google.com/finance/converter?a=$amount&from=$from_Currency&to=$to_Currency");
 
  $get = explode("<span class=bld>",$get);
  $get = explode("</span>",$get[1]);  
  $converted_amount = preg_replace("/[^0-9\.]/", null, $get[0]);
  echo "Today ".$amount." ".$_REQUEST["selectedCountries1"]." is ".$converted_amount." ".$_REQUEST["selectedCountries2"];
  exit;
  
}
else
{
 echo "OOPS! Something went Wrong";
}


  ?>
