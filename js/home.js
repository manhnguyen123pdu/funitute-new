
productitem = [
    new item('17', './img/item1.PNG', 'Batchata lamp', 4, '15.00', 'Lamps', '1'),
    new item('', './img/item2.PNG', 'Circle corners table', 3, '145.00', 'Tables', '1'),
    new item('18', './img/item3.PNG', 'Circle lamp', 4, '120.00', 'lamps', '1'),
    new item('', './img/item4.PNG', 'Cozy armchair', 2, '221.99', 'Chairs', '1'),
    new item('7', './img/item5.PNG', 'Dining table', 5, '7.100', 'Tables', '1'),
    new item('2', './img/item6.PNG', 'Fancy armchair', 5, '855.00', 'Chairs', '1'),
]

if (JSON.parse(window.localStorage.getItem('product1')).length == 0) {
    localStorage.setItem('product1', JSON.stringify(productitem));
}
console.log(JSON.parse(window.localStorage.getItem('product1')).length)
product = JSON.parse(window.localStorage.getItem('product1'));
display();


function display() {
    let content = "";
    for (i = 0; i < product.length; i++) {
        content += `
        <div class="product__item">`;
        if (product[i].discount != 0) {
            content += `<p>${product[i].discount} %</p>`;
        }

        content += `<div class="puch">
    <div onclick=viewProduct(${i}) class="puch__item"><i class="fa fa-link"> </i><span>View Product</span></div>
    <div onclick=add(${i}) class="puch__item"><i class="fa fa-heart"></i><span>Add to wishlist</span></div>
    <div onclick=preview(${i}) class="puch__item"><i class="fa fa-arrows-alt"></i><span>Preview</span></div>

   </div>`;
        content += `<img src="${product[i].image}" alt="">
                <div class="product__text">
                    <span>${product[i].name}</span>
                    <div class="vote">`;
        for (k = 0; k < product[i].vote; k++) {
            content += `<i class="fa fa-star"></i>`;
        }
        for (k = 0; k < 5 - product[i].vote; k++) {
            content += `<i class="fa fa-star-o" aria-hidden="true"></i>`;
        }
        content += `
            </div>
            <p>$ ${product[i].price}</p>
            </div>
            </div>`;

    }
    let productcontent = document.querySelector('.product__content');
    productcontent.innerHTML = content;
}
// localStorage.setItem('purchlist', JSON.stringify(""));
// localStorage.setItem('list_departments', JSON.stringify(""));
let wishlist = []
function add(i) {
    check = true;
    for (k = 0; k < wishlist.length; k++) {
        if (product[i].name == wishlist[k].name) {
            check = false;
            break;
        }
    }
    if (check) {
        wishlist.push(product[i]);
    }
    localStorage.setItem('list_departments', JSON.stringify(wishlist));
    wishQuanlity();
}




// let vd = document.querySelector('.vd')
// setInterval(function () {
//     if (i < 5000) {
//         vd.innerHTML = i
//         i = i + 10
//     }
// }, 2)





