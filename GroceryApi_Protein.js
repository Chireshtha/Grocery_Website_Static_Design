fetch("Grocery3.json").then((ProteinData)=>{
    console.log(ProteinData);
    return ProteinData.json();
}).then((objectProteinData)=>{
    console.log(objectProteinData);
    TableProteinData = "";
    objectProteinData.map((values)=>{
        TableProteinData +=`<tr>
        <td>${values.name}</td>
        <td><img src = ${values.image} /> </td>
        <td>${values.price}</td>
        </tr>`;
    });
    document.getElementById("table_body3").innerHTML = TableProteinData;
}).catch((err)=>{
    console.log(err);
})