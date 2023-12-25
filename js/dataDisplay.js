function myRemove(myid)
{
  let url=`http://localhost:3000/student/${myid}`;
  fetch(url,{method:"DELETE"})
  .then(()=>{
    alert("Data Delete Succesffuly");

  });
}

function editSave()
{
  // alert("hello");
  let myRollno = document.getElementById("rno").value;
  let myName = document.getElementById("nm").value;
  let myCity = document.getElementById("city").value;
  let myFees = document.getElementById("fees").value;
  let myId = document.getElementById("stuid").value;

  // alert(myId);
  let url=`http://localhost:3000/student/${myId}`;
  fetch(url,{
    method:'PUT',
    body:JSON.stringify({
      "rollno":myRollno,
      "name":myName,
      "city":myCity,
      "fees":myFees
    }),
    headers:{
      "Content-type":"application/json; character=utf-8"
    }
  }).then((data)=>{
    alert("Data Updated Successfully");
  })

}

function myEdit(myid)
{
  let url=`http://localhost:3000/student/${myid}`;
  // alert(url);
  
  async function mydataDisplay(){
    let myObj = await fetch(url);
    let myData = await myObj.json();
    let myText=`
    <h1 align="center">Update Details</h1>
    <center>
    <input type="hidden" value="${myData.id}" id="stuid"><br><br>
    Enter Roll No:<input type="text" value="${myData.rollno}" id="rno"><br><br>
    Enter Name:<input type="text" value="${myData.name}" id="nm"><br><br>
    Enter City:<input type="text" value="${myData.city}" id="city"><br><br>
    Enter Fees:<input type="text" value="${myData.fees}" id="fees"><br><br>
    <button id="btn1" onclick="editSave()">Update Details</button>
    </center>
    `;
    document.getElementById("demo1").innerHTML=myText;

  }
  mydataDisplay();
}

async function myData()
{
    let table=`
    <table border="4" bgcolor="white" width="800" align="center">
    <tr>
       <th>Rollno</th>
       <th>Student Name</th>
       <th>City</th>
       <th>Fees</th>
       <th>Delete</th>
       <th>Edit</th>
    </tr>
    `;
    let url ="http://localhost:3000/student";

    let myObj = await fetch(url);
    let myData = await myObj.json();
    myData.map((key)=>{
        table +=`
        <tr>
          <td>${key.rollno}</td>
          <td>${key.name}</td>
          <td>${key.city}</td>
          <td>${key.fees}</td>
          <td>
          <a href="#" onclick="myRemove(${key.id});">
          <img src="delete.png" height="50" width="50">
          </a>
          </td>
          <td>
          <a href="#" onclick="myEdit(${key.id});">
          <img src="edit.png" height="50" width="50">
          </a>
          </td>  
        </tr>
        `;
    });
    table+="</table>";
    document.getElementById("demo").innerHTML=table;
}
myData();

