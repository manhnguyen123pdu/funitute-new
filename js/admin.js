productitem = [
    new item('17', './img/item1.PNG', 'Batchata lamp', 4, '15.00', 'Lamps', '1'),
    new item('', './img/item2.PNG', 'Circle corners table', 3, '145.00', 'Tables', '1'),
    new item('18', './img/item3.PNG', 'Circle lamp', 4, '120.00', 'lamps', '1'),
    new item('', './img/item4.PNG', 'Cozy armchair', 2, '221.99', 'Chairs', '1'),
    new item('7', './img/item5.PNG', 'Dining table', 5, '7.100', 'Tables', '1'),
    new item('2', './img/item6.PNG', 'Fancy armchair', 5, '855.00', 'Chairs', '1'),
]
localStorage.setItem('product', JSON.stringify(productitem));

function login() {
    let acount = document.querySelector('#acount').value;
    let pass = document.querySelector('#password').value;
    let log_in = document.querySelector('.log__in');
    if (acount == 'manhnguyen.ptit@gmail.com' && pass == '1234') {
        log_in.classList.add('hind')
    }
}

function displayAdmin() {
    let product = JSON.parse(window.localStorage.getItem('product'));
    let content5 = `
<tr>
<td>STT</td>
<td>Name</td>
<td>Image</td>
<td>Price $</td>
<td>Discount %</td>
<td>Catarary</td>
<td>Vote</td>
<td>Status</td>
</tr>
`
    for (i = 0; i < product.length; i++) {
        content5 += `
    <tr>
    <td>${i + 1}</td>
    <td>${product[i].name}</td>
    <td><img src="${product[i].image}" alt=""></td>
    <td>$ ${product[i].price}</td>
    <td>${product[i].discount} </td>
    <td>${product[i].cata}</td>
    <td>${product[i].vote}</td>
    <td><button onclick="remove(${i})" >Delete</button></td>
    </tr>
    `
    }
    let listAdmin = document.querySelector('.listAdmin');
    listAdmin.innerHTML = content5;

}
displayAdmin()


function insert() {
    let product = JSON.parse(window.localStorage.getItem('product'));
    let name = document.querySelector('#name').value;
    let image = document.querySelector('#image').value;
    let price = document.querySelector('#price').value;
    let discount = document.querySelector('#discount').value;
    let cata = document.querySelector('#cata').value;
    let vote = document.querySelector('#vote').value;
    let insertItem = new item(discount, image, name, vote, price, cata, 1, 0)
    product.push(insertItem)
    localStorage.setItem('product', JSON.stringify(product));
    document.querySelector('.insert__product').classList.remove('d-flex')
    displayAdmin()

}
function remove(i) {
    let product = JSON.parse(window.localStorage.getItem('product'));
    product.splice(i, 1);
    localStorage.setItem('product', JSON.stringify(product));
    displayAdmin();
    console.log(i)
}


function showInsert() {
    document.querySelector('.insert__product').classList.add('d-flex')
}

function menuProduct() {
    document.querySelector('.menu__product').classList.add('d-block');
}
function reset() {
    localStorage.setItem('purchlist', JSON.stringify(""));
    localStorage.setItem('list_departments', JSON.stringify(""));
    localStorage.setItem('product', JSON.stringify(""));
    localStorage.setItem('purchlistOder', JSON.stringify(""));
}