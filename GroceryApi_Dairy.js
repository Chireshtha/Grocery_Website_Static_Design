fetch("Grocery4.json").then((DairyData)=>{
    console.log(DairyData);
    return DairyData.json();
}).then((objectDairyData)=>{
    console.log(objectDairyData);
    TableDairyData = "";
    objectDairyData.map((values)=>{
        TableDairyData += `<tr>
        <td>${values.name}</td>
        <td><img src = ${values.image} /> </td>
        <td>${values.price} </td>
        </tr>`;
    });
    document.getElementById("table_body4").innerHTML = TableDairyData;
}).catch((err)=>{
    console.log(err);
})