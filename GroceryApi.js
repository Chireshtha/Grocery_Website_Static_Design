fetch("Grocery.json").then((fruitsData)=>{
console.log(fruitsData);
return fruitsData.json();
}).then((objectfruitsData)=>{
    console.log(objectfruitsData[0].name);
    let TablefruitsData = "";
    objectfruitsData.map((values)=>{
        TablefruitsData += `<tr> 
        <td>${values.name}</td>
        <td><img src = ${values.image} /></td>
        <td>${values.price}</td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=TablefruitsData;
}).catch((err)=>{
    console.log(err);
})




