//jquery 

// $(document).ready(function()
// {
//     $('.list').click(function(){
//         const value = $(this).attr('data-filter');
//         if (value == 'All'){
//             $('.itembox').show('1000');
//         }
//         else{
//             $('.itembox').not('.'+value).hide('1000');
//             $('.itembox').filter('.'+value).show('1000');
//         }
//     })
//     //add active class on selected item

// $('.list').click(function(){
//     $(this).addClass('active').siblings().removeClass('active');
// })
// })

// javascript
// document.querySelector('.list.active').addEventListener('click', filterGallery);
// document.querySelectorAll('.list:not(.active)').forEach(function(button) 
// {
//   button.addEventListener('click', filterGallery);
// });

// // Get all gallery items
// var items = document.querySelectorAll('.itembox');

// // Filter gallery
// function filterGallery(event) {
//   var category = event.target.getAttribute('data-filter');
//   items.forEach(function(item) {
//     if (category === 'All' || item.classList.contains(category)) {
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }




// document.querySelector('.list.active').addEventListener('click', filterGallery);
// document.querySelectorAll('.list:not(.active)').forEach(function (button) {
//     button.addEventListener('click', filterGallery);
// });

// var items = document.querySelectorAll('.itembox');
// function filterGallery(event) {

//     var category = event.target.getAttribute('data-filter');
//     items.forEach(function (item) {
//         if (category === 'All' || item.classList.contains(category)) {
//             document.querySelector('.list.active').classList.remove('.list.active');
//             event.target.classList.add('.list.active');
//             item.style.display = 'block';
//             item.classList.remove("hide");
//             item.classList.add("show");
//         }
//         else {
//             document.querySelector('.list.active').classList.add('.list.active');
//             event.target.classList.remove('.list.active');
//             item.style.display = 'none';
//             item.classList.remove("show");
//             item.classList.add("hide");
//         }
//     });
// }

// const filterContainer = document.querySelector(".list");
// const galleryItems = document.querySelectorAll(".itembox");
// filterContainer.addEventListener("click", (event) =>{
//     if(event.target.classList.contains("list")){
//       // deactivate existing active ‘filter-item’
//         filterContainer.querySelector(".active").classList.remove("active");
//       // activate new ‘filter-item’
//         event.target.classList.add("active");
//         const filterValue = event.target.getAttribute("data-filter");
//         galleryItems.forEach((item) =>{
//         if(item.classList.contains(filterValue) || filterValue === 'all'){
//             item.classList.remove("hide");
//              item.classList.add("show");
//         }
//         else{
//             item.classList.remove("show");
//             item.classList.add("hide");
//         }
//          });
//     }
//   });
 



// var items = document.querySelectorAll('.itembox');
// function filterGallery(event) {
//     var category = event.target.getAttribute('data-filter');
//     items.forEach(function (item) {
//         if (category === 'All' || item.classList.contains(category)) {
//             item.style.display = 'block';
//         }
//         else {
//             item.style.display = 'none';
//         }
//     });
//     // Get all buttons with class="btn" inside the container
//     var btns = document.querySelectorAll('.list');
//     // Loop through the buttons and remove the active class from the current one
//     btns.forEach(function (btn) {
//         btn.classList.remove('active');
//     });
//     // Add the active class to the clicked button
//     event.target.classList.add('active');
// }

// var imageUrls = gallery.filter(item => item.category === "Nature").map(item => item.image);


