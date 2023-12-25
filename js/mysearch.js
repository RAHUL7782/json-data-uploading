document.getElementById("btn1").addEventListener("click", stuSearch);

function stuSearch() {
    // alert("hii");
    let myRollno = document.getElementById("rno").value;

    let url = `http://localhost:3000/student/?rollno=${myRollno}`;

    async function myDisplay() {
        let myobj = await fetch(url);
        let myData = await myobj.json();

        let myTable = `
        <table border="1" width="400" bgcolor="yellow">
        <tr >
             <th> Roll NO</th>
             <th> Name </th>
             <th>City</th>
             <th> Fees</th>
             
        </tr> 

        <tr align="center">
             <td>${myData[0].rollno}</td>
             <td>${myData[0].name}</td>
             <td>${myData[0].city}</td>
             <td>${myData[0].fees}</td>

        </tr>
        </table>

        `;


        document.getElementById("demo").innerHTML=myTable
    }
    
    // myDisplay();
    myDisplay();
}
