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
        $result = $conn->query("SELECT idCompany, nameCompany, address, nip, accountNumber FROM list_company");

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
        $name = $request->nameCompany;
        $address = $request->address;
        $nip = $request->nip;
        $accountNumber = $request->accountNumber;

        $sql = "INSERT INTO list_company (idCompany, nameCompany, address, nip, accountNumber)
        VALUES ('', '$name', '$address', '$nip', '$accountNumber')";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($postdata);
    }

    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        $idData = $_GET["idData"];

        $sql = "DELETE FROM list_company WHERE idCompany=$idData";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($idData);
    }

    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $idCompany = $request->idCompany;
        $name = $request->nameCompany;
        $address = $request->address;
        $nip = $request->nip;
        $accountNumber = $request->accountNumber;

        $sql = "UPDATE list_company SET
                nameCompany = '$name',
                address = '$address',
                nip = '$nip',
                accountNumber = '$accountNumber'
                WHERE idCompany = '$idCompany'";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($postdata);
    }

} elseif($dataType == "products") {
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $result = $conn->query("SELECT idProduct, nameProduct, netPrice FROM list_product");

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
        $name = $request->nameProduct;
        $netPrice = $request->netPrice;
        $grossPrice = $request->grossPrice;

        $sql = "INSERT INTO list_product (idProduct, nameProduct, netPrice)
        VALUES ('', '$name', '$netPrice')";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($postdata);
    }

    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        $idData = $_GET["idData"];

        $sql = "DELETE FROM list_product WHERE idProduct=$idData";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($idData);
    }

    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $idProduct = $request->idProduct;
        $name = $request->nameProduct;
        $netPrice = $request->netPrice;

        $sql = "UPDATE list_product SET
                nameProduct = '$name',
                netPrice = '$netPrice'
                WHERE idProduct = '$idProduct'";
        mysqli_query($conn, $sql);

        $conn->close();
        echo($sql);
    }

} elseif($dataType == "invoice") {
    
    $dataFrom = $_GET["dataFrom"];
    
    if($dataFrom == "invoice") {
        if($_SERVER['REQUEST_METHOD'] === 'GET'){
            $result = $conn->query("SELECT idProduct, nameProduct, netPrice, grossPrice FROM list_product");
            
            $sql = "SELECT list_company.nameCompany, list_invoice.numberInvoice, list_product.nameProduct, list_product_for_invoice.numbersProduct FROM list_invoice INNER JOIN list_company on list_invoice.idCompany=list_company.idCompany INNER JOIN list_product_for_invoice on list_invoice.idListProduct=list_product_for_invoice.idListProduct INNER JOIN list_product ON list_product_for_invoice.idProduct = list_product.idProduct";
                
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
            $numberInvoice = $request->numberInvoice;
            $idCompany = $request->idCompany;
            $idProduct = $request->idProduct;
            $numberProduct = $request->numberProduct;

            $sql = "INSERT INTO list_invoice (idProduct, nameProduct, netPrice, grossPrice)
            VALUES ('', '$name', '$netPrice', '$grossPrice')";
            mysqli_query($conn, $sql);

            $conn->close();
            echo($postdata);
        }

        if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
            $idData = $_GET["idData"];

            $sql = "DELETE FROM list_product WHERE idProduct=$idData";
            mysqli_query($conn, $sql);

            $conn->close();
            echo($idData);
        }

        if($_SERVER['REQUEST_METHOD'] === 'PUT'){
            $postdata = file_get_contents("php://input");
            $request = json_decode($postdata);
            $idProduct = $request->idProduct;
            $name = $request->nameProduct;
            $netPrice = $request->netPrice;
            $grossPrice = $request->grossPrice;

            $sql = "UPDATE list_product SET
                    nameProduct = '$name',
                    netPrice = '$netPrice',
                    grossPrice = '$grossPrice'
                    WHERE idProduct = '$idProduct'";
            mysqli_query($conn, $sql);

            $conn->close();
            echo($sql);
        }
    }
    
    if($dataFrom == "company"){
        if($_SERVER['REQUEST_METHOD'] === 'GET'){
            $result = $conn->query("SELECT idCompany, nameCompany, address, nip FROM list_company");

            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $rows[] = $row;
            }

            $result = array('records' => $rows);
            $json = json_encode($result);
            $conn->close();

            echo($json);
        }
    }
    
    if($dataFrom == "product"){
        if($_SERVER['REQUEST_METHOD'] === 'GET'){
            $result = $conn->query("SELECT idProduct, nameProduct, netPrice FROM list_product");

            while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $rows[] = $row;
            }

            $result = array('records' => $rows);
            $json = json_encode($result);
            $conn->close();

            echo($json);
        }
    }
}


?>
