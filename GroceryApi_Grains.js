fetch("Grocery2.json").then((GrainsData)=>{
    console.log(GrainsData);
    return GrainsData.json();
}).then((objectGrainsData)=>{
    console.log(objectGrainsData);
    TableGrainsData = "";
    objectGrainsData.map((values)=>{
        TableGrainsData +=`<tr>
        <td>${values.name}</td>
        <td><img src = ${values.image} /> </td>
        <td>${values.price}</td>
        </tr>`;
    });
    document.getElementById("table_body2").innerHTML = TableGrainsData;
}).catch((err)=>{
    console.log(err);
})