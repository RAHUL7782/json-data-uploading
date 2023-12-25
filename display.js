document.getElementById("btn1").addEventListener("click",myshow);
function myshow(){
    let myTab=`<table border="1" width="500"
    <tr>
    <td>Roll No</td>
    <td>Name</td>
    <td>City</td>
    <td>Fees</td>
    </tr> 
    `;
    let url="http://localhost:3000/student";

    async function myDisplay()
    {
        let myObj = await fetch(url);
        let myData = await myObj.json();
        //console.log(myData);
        myData.map((key)=>{
            myTab +=`
            <tr>
            <td>${key.rollno}</td>
            <td>${key.name}</td>
            <td>${key.city}</td>
            <td>${key.fees}</td>
            </tr>
            `;
        });
        myTab+="</table>";
        document.getElementById("demo").innerHTML=myTab;
    }
    myDisplay();
}