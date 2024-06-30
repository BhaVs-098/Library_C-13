<?php
    $Name=$_POST['Name'];
    $EMail=$_POST['EMail'];
    $Username=$_POST['Username'];
    $Password=$_POST['Password'];

    $conn=new mysqli('localhost', 'root', '', 'register');
    if($conn->connect_error){
        die('Connection failed: ' .$conn->connect_error);
    }else{
        $stmt=$conn->prepare("Insert into registration(Name, EMail, Username, Password)
        values(?, ?, ?, ?)");
        // Bind the parameter to variable Name
        $stmt->bind_param("ssss",$Name,$EMail,$Username,$Password);
        $stmt->execute();
        echo "registered Successfully!!";
        $stmt->close();
        $conn->close();

    }    

?>