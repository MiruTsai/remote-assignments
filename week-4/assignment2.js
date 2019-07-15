function ajax(src, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    };
    xhr.open('GET', src);
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

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
});




// part 3 test

for (let i = 0; i < data.length; i += 1) {
    let content = document.createElement('div');
    let pic = document.createElement('div');
    let picsrc = document.createElement('img')
    let id = document.createElement('div');
    let title = document.createElement('div');
    let price = document.createElement('div');
    let category = document.createElement('div');
    let color = document.createElement('div');
    let rect = document.createElement('div');
    content.className = "p_content";
    pic.className = "p_pic";
    picsrc.src = `${data[i].main_image}`
    id.className = "p_id";
    id.innerText = `${data[i].id}`
    id.style.display = "none";
    title.className = "p_title";
    price.className = "p_price";
    category.style.display = "none";
    category.innerText = `${data[i].category}`;
    color.className = "p_color";
    rect.className = "rect";
    for (let j = 0; j < data[i].colors.lenth; j += 1) {
        rect.style.backgroundColor = `#${data[i].colors[j].code}`
    }
    title.innerText = `${data[i].title}`
    price.innerText = `TWD.${data[i].price}`

    color.appendChild(rect);
    pic.appendChild(picsrc);
    content.appendChild(pic);
    content.appendChild(id);
    content.appendChild(category);
    content.appendChild(color);
    content.appendChild(title);
    content.appendChild(price);
    document.getElementById('p_containter').appendChild(content);

    products += `<div class="p_content">`;
    products += `<div class="p_pic"><img src="${data[i].main_image}"></div>`;
    products += `<div class="p_id" style="display:none">${data[i].id}</div>`;
    products += `<div class="p_category" style="display:none">${data[i].category}</div>`;
    products += `<div class="p_color">`
    for (let j = 0; j < data[i].colors.length; j += 1) {
        products += `<div class="rect" style="background-color:#${data[i].colors[j].code}"></div>`;
    }
    products += `</div>`
    products += `<div class="p_title">${data[i].title}</div>`;
    products += `<div class="p_price">TWD.${data[i].price}</div>`;
    products += `</div>`;
}
document.getElementById('p_container').innerHTML = products;