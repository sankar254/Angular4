<?php
  if (isset($_REQUEST['email']))  {

  //Email information
  $admin_email = "sankar.raj@rebackoffice.com";
  $name = $_REQUEST['name'];
  $mob = $_REQUEST['mob'];
  $email = $_REQUEST['email'];
  $mess = $_REQUEST['mess'];

  //send email
  mail($admin_email, "$subject", $mess, "From:" . $email);

  //Email response
  echo "Thank you for contacting us!";
  }

  else  {
    echo "There was a problem submitting the form";
  }
?>
