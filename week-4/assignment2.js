function ajax(src, callback) { 
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
     if (xhr.readyState === 4) {
      callback(xhr.responseText);
     }
    };
    xhr.open('GET',src);
    xhr.send();
   }
   
   function render(response) {
    let goodList = JSON.parse(response);
    let html = '';
    for (let i = 0; i < goodList.length; i += 1) {
     html += `<div class=goodList${i}>`;
     html += `<h2 class=name>${goodList[i].name}</h2>`;
     html += `<div class=price>$${goodList[i].price}</div>`;
     html += `<div class=desc>${goodList[i].description}</div>`;
     html += `</div>`;
    }
    document.getElementById('goods').innerHTML = html;
   }
   
   ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response) {
    render(response);
   });








// function ajax(src, callback) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function callback(response) {
//         if (xhr.readyState === 4) {
//             response = JSON.parse(xhr.responseText);
//             console.log(response);
//             let goodsList = '';
//             for (let i = 0; i < response.length; i += 1) {
//                 goodsList += `<div class=goodList${i}>`;
//                 goodsList += `<h2 class=name>${response[i].name}</h2>`;
//                 goodsList += `<div class=price>$${response[i].price}</div>`;
//                 goodsList += `<div class=desc>${response[i].description}</div>`;
//                 goodsList += `</div>`;
//             }
//             document.getElementById('goods').innerHTML = goodsList;
//         }
//     }
//     xhr.open('GET', src);
//     xhr.send();
// }
// ajax("https://cwpeng.github.io/live-records-samples/data/products.json",
//     function (response) { render(response); });     