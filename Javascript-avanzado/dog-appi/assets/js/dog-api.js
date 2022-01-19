let $btnPerro = document.querySelector('#btnPerro');

$btnPerro.addEventListener('click', () => {
    
    
    fetch ('https://dog.ceo/api/breeds/image/random')
    .then (resp => resp.json ()).then( data =>{
      console.log (data);

      let imagenPerrito = document.createElement ('img')
      imagenPerrito.src = data.message;
      document.body.appendChild (imagenPerrito);
       })
});