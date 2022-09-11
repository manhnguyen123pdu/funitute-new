function login() {
    let acount = document.querySelector('#acount').value;
    let pass = document.querySelector('#password').value;
    let log_in = document.querySelector('.log__in');
    if (acount == 'manhnguyen.ptit@gmail.com' && pass == '1234') {
        log_in.classList.add('hind')
    }
}

function displayAdmin() {
    let product = JSON.parse(window.localStorage.getItem('product1'));
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
    let product = JSON.parse(window.localStorage.getItem('product1'));
    let name = document.querySelector('#name').value;
    let image = document.querySelector('#image').value;
    let price = document.querySelector('#price').value;
    let discount = document.querySelector('#discount').value;
    let cata = document.querySelector('#cata').value;
    let vote = document.querySelector('#vote').value;
    let insertItem = new item(discount, image, name, vote, price, cata, 1, 0)
    product.push(insertItem)
    localStorage.setItem('product1', JSON.stringify(product));
    document.querySelector('.insert__product').classList.remove('visible2')
    displayAdmin()

}
 function remove(i){
    let product = JSON.parse(window.localStorage.getItem('product1'));
    product.splice(i,1);
    localStorage.setItem('product1', JSON.stringify(product));
    displayAdmin();
    console.log(i)
 }

function reset(){
localStorage.setItem('purchlist', JSON.stringify(""));
localStorage.setItem('list_departments', JSON.stringify(""));
localStorage.setItem('product1', JSON.stringify(""));
}

function showInsert(){
    document.querySelector('.insert__product').classList.add('visible2')
}