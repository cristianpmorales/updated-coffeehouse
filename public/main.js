var trash = document.getElementsByClassName("fas fa-trash-alt");
order = ""
size = ""
document.querySelector(".cafeOption1").addEventListener("mousedown", event => {
  ordercafe = 'Black cafe'
  order = ordercafe
  console.log(ordercafe);
  console.log(order)
})
document.querySelector(".cafeOption2").addEventListener("mousedown", event => {
  ordercafe = 'Cafe con leche'
  order = ordercafe
  console.log(ordercafe);
  console.log(order)
})

document.querySelector(".cafeOption3").addEventListener("mousedown", event => {
  ordercafe = 'cafe con leche y azucar'
  order = ordercafe
  console.log(ordercafe);
  console.log(order)
})
document.querySelector(".cafeOption4").addEventListener("mousedown", event => {
  ordercafe = 'Ice cafe'
  order = ordercafe
  console.log(ordercafe);
  console.log(order)
})
document.querySelector(".sizeOption1").addEventListener("mousedown", event => {
  cafesize = 'X small'
  size = cafesize
  console.log(cafesize);
  console.log(size)
})
document.querySelector(".sizeOption2").addEventListener("mousedown", event => {
  cafesize = 'Small'
  size = cafesize
  console.log(cafesize);
  console.log(size);
})
document.querySelector(".sizeOption3").addEventListener("mousedown", event => {
  cafesize = 'Medium'
  size = cafesize
  console.log(cafesize);
  console.log(size);
})
document.querySelector(".sizeOption4").addEventListener("mousedown", event => {
  cafesize = 'Large'
  size = cafesize
  console.log(cafesize);
  console.log(size);
})
document.querySelector(".submitButton").addEventListener("mousedown", event => {
  var customer = document.getElementsByTagName('input')[0].value
  console.log("clicked submit");
  console.log(order)
  console.log(size);
  fetch('messages', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        'order': order,
        'size' : size,
        'customer': customer
      })
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
})
