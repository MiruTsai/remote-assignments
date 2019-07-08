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


