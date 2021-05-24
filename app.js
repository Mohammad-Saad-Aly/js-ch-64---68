// var acha = document.getElementsByTagName('li')
// // console.log(acha)
// console.log(acha.length)

// var acha = document.getElementById('saad')
// // console.log(acha.hasAttribute('class'))
// if(acha.hasAttribute('claas')){
//     alert('han bhai class he')
// }
// else{
//     alert('tu mera puttar chutti kar')
// }

// var a = document.getElementById('saad')
// console.log(a.getAttribute('class'))

// var ok = document.getElementById('saad')
// ok.setAttribute('href','https://www.facebook.com')


// var ok = document.getElementById('saad').attributes
// console.log(ok[2].nodeName)

// var aa =  document.createElement('p')
// // console.log(aa)
// var ok = document.createTextNode('hello world')
// // console.log(ok)
// aa.appendChild(ok)
// console.log(aa)

function add(){
    var inp = document.getElementById('main')
    var ce = document.createElement('li')
    var insert = document.createTextNode(inp.value)
    // console.log(insert)
    ce.appendChild(insert)
    var get = document.getElementById('list').appendChild(ce)
    inp.value = " "
}