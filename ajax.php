<?php

$dataType = $_GET["dataType"];

$servername = "localhost";
$username = "root";
$password = "";
//$username = "AdminRafal"; //dla CBA
//$password = "Sp_12!"; //dla CBA
$dbname ="rafal9004";

$conn = new mysqli($servername, $username, $password, $dbname);


if($dataType == "company"){

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $result = $conn->query("SELECT id_firmy, nazwa, adres, nip, nr_konta FROM lista_firm");

        while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $rows[] = $row;
        }

        $result = array('records' => $rows);
        $json = json_encode($result);
        $conn->close();

        echo($json);
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $name = $request->nazwa;
        $address = $request->adres;
        $nip = $request->nip;
        $bankAccount = $request->nr_konta;

        $sql = "INSERT INTO lista_firm (id_firmy, nazwa, adres, nip, nr_konta)
        VALUES ('', '$name', '$address', '$nip', '$bankAccount')";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($postdata);
    }

    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        $idData = $_GET["idData"];

        $sql = "DELETE FROM lista_firm WHERE id_firmy=$idData";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($idData);
    }

    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $idFirmy = $request->id_firmy;
        $name = $request->nazwa;
        $address = $request->adres;
        $nip = $request->nip;
        $bankAccount = $request->nr_konta;

        $sql = "UPDATE lista_firm SET
                nazwa = '$name',
                adres = '$address',
                nip = '$nip',
                nr_konta = '$bankAccount'
                WHERE id_firmy = '$idFirmy'";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($postdata);
    }

} elseif($dataType = "products") {
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $result = $conn->query("SELECT id_produktu, nazwa, cena_netto, cena_brutto FROM lista_produktow");

        while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $rows[] = $row;
        }

        $result = array('records' => $rows);
        $json = json_encode($result);
        $conn->close();

        echo($json);
    }

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $name = $request->nazwa;
        $netPrice = $request->cena_netto;
        $grossPrice = $request->cena_brutto;

        $sql = "INSERT INTO lista_produktow (id_produktu, nazwa, cena_netto, cena_brutto)
        VALUES ('', '$name', '$netPrice', '$grossPrice')";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($postdata);
    }

    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        $idData = $_GET["idData"];

        $sql = "DELETE FROM lista_produktow WHERE id_produktu=$idData";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($idData);
    }

    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $idProduktu = $request->id_produktu;
        $name = $request->nazwa;
        $netPrice = $request->cena_netto;
        $grossPrice = $request->cena_brutto;

        $sql = "UPDATE lista_produktow SET
                nazwa = '$name',
                cena_netto = '$netPrice',
                cena_brutto = '$grossPrice'
                WHERE id_produktu = '$idProduktu'";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($sql);
    }

}


?>
