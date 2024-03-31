fetch("Grocery1.json").then((VegData)=>{
    console.log(VegData);
    return VegData.json();
}).then((objectVegData) => {
console.log(objectVegData);
let TableVegData = "";
objectVegData.map((values)=>{
    TableVegData+=`<tr>
    <td>${values.name}</td>
    <td><img src = ${values.image} /></td>
    <td>${values.price}</td>
    </tr>`;
});
document.getElementById("table_body1").innerHTML=TableVegData;
}).catch((err)=>{
    console.log(err);
})