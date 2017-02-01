<?php
	// write in databse//
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: X-Requested-With');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

  $host = 'localhost';
	$dbname = 'mtruckhostin_contactsconstantbourgois';
	try {
	$dbh = new PDO("mysql:host=$host;port=3306;dbname=$dbname", 'mtruckhostin_mtruckhostin', 'MTruck4ever');

	} catch (PDOException $e) {
	print "Erreur !: " . $e->getMessage() . "<br/>";
	die();
	}
  $jsonData = file_get_contents('php://input');
  $formData = json_decode(file_get_contents('php://input'));
      foreach ($formData as $key=>$value) {
          $_POST[$key]=$value;
      }


	$req = $dbh->prepare('INSERT INTO ID(Name,Email,Text) VALUES(:name, :email, :message)');
	$req->execute(array(
	'name' => $_POST['name'],
	'email' => $_POST['email'],
	'message' => $_POST['message'],
	));

	//send email//
     $to      = 'constantbourgois@gmail.com';
     $subject = 'contact site web';
     $message = 'from: '.' '.$_POST['name'] . ' ' . $_POST['email'] . ' ' . $_POST['message'];

     mail($to, $subject, $message );

     $json = json_encode($_POST['name']);

	echo $jsonData;
?>
