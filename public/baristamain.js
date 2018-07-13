var check = document.getElementsByClassName("fa-check");
var trash = document.getElementsByClassName("fa-trash");

Array.from(check).forEach(function(element) {
  // console.log(check)
  element.addEventListener('click', function(){
    const order = this.parentNode.parentNode.childNodes[3].innerText
    const size = this.parentNode.parentNode.childNodes[5].innerText
    const customer = this.parentNode.parentNode.childNodes[7].innerText
    const check = this.parentNode.parentNode.childNodes[9].innerText
    // const completedButton = this.parentNode.parentNode.childNodes[9].innerText
    fetch('barista', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'order': order,
        'size': size,
        'customer': customer
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log('works')
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const type = this.parentNode.parentNode.childNodes[3].innerText
        fetch('remove', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'type': type
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
