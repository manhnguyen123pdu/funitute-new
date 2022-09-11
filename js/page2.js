let arrItem = JSON.parse(window.localStorage.getItem('list_departments'))
let content1 = document.querySelector('.content');
let item1 = "";
for (k = 0; k < arrItem.length; k++) {
    item1 += `
<div class="item">
<img src="${arrItem[k].image}"
    alt="">
<div class="right">
    <a>${arrItem[k].name}</a>
    <h2>${arrItem[k].price}</h2>
    <p>Tellus aliquam laoreet elit accumsan fusce turpis maximus tempus nostra nisi litora ex dolor aliquet
        mus viverra netus ac mollis</p>
    <span>SKU: FS/2022/06/01</span>
    <p> Categories: <a href="">${arrItem[k].cata}</a></p>
    <p>Tag: <a id="tag" href=""> Cabinet</a></p>
</div>
<div class="but">
    <button onclick="addPurch(${k})">Select options</button>
</div>
</div>
`
}
content1.innerHTML = item1;


// mua hang
let purchList = [];

function addPurch(k) {
    flag = true;
    for (m = 0; m < purchList.length; m++) {
        if (arrItem[k].name === purchList[m].name) {
            flag = false;
            break;
        }
    }
    if (flag) {
        purchList.push(arrItem[k])
    }
    localStorage.setItem('purchlist', JSON.stringify(purchList));
    purch2(JSON.parse(window.localStorage.getItem('purchlist')));
    total()
}

// function order(){
//     document.querySelector('.order').classList.add('ordervisivle');
//     listorder()
// }
// function outoder(){
//     document.querySelector('.order').classList.remove('ordervisivle')
// }

// function listorder(){
//     let content3='';
//     let list__order= document.querySelector('.list__order')
//     let purlist=JSON.parse(window.localStorage.getItem('purchlist'));
// for(i=0;i<purlist.length;i++){
//     let price= ''
//     if(Number(purlist[i].discount)){
//         price=((Number(purlist[i].price)*Number(purlist[i].quanlity))*(100-Number(purlist[i].discount)))/100 ;
//    }
//    else{
//        price=(Number(purlist[i].price)*Number(purlist[i].quanlity));
//    }
//     content3+=`
//     <div class="oder__item">
//     <p>${purlist[i].name} x ${purlist[i].quanlity} </p>
//     <p>$${price.toFixed(2)}</p>
//     </div>
//     `
// }
// let sum=0;
// for(i=0;i<purlist.length;i++){
//     if(Number(purlist[i].discount)){
//        sum+=((Number(purlist[i].price)*Number(purlist[i].quanlity))*(100-Number(purlist[i].discount)))/100 ;
//    }
//    else{
//       sum+=(Number(purlist[i].price)*Number(purlist[i].quanlity));
//    }
// }
// list__order.innerHTML=content3;
// document.querySelector('.totalOrder').innerHTML=sum;
// }
