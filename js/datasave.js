document.getElementById("btn1").addEventListener("click",mySave);

function mySave()
{
    //alert("hello");
    let rollno = document.getElementById("rno").value;
    let name = document.getElementById("nm").value;
    let city = document.getElementById("city").value;
    let fees = document.getElementById("fees").value;

    let url ="http://localhost:3000/student";
    fetch(url,{

        method:"POST",
        body:JSON.stringify({
            "rollno":rollno,
            "name":name,
            "city":city,
            "fees":fees
        }),
        headers: {
            "Content-type": "application/json; character =utf-8"
        }
    });
}