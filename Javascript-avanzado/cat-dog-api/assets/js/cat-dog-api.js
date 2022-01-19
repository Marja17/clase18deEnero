let $btnGatoPerro = document.querySelector('#btnGatoPerro');

$btnGatoPerro.addEventListener('click', () => {
    
    
    fetch ('https://api.thecatapi.com/v1/images/search')
    .then (resp => resp.json ()).then( data =>{
      console.log (data);

      let imagenGatitoPerrito = document.createElement ('img')
      imagenGatitoPerrito.src = data [0].url;
      document.body.appendChild (imagenGatitoPerrito);
       })
});



$btnGatoPerro.addEventListener('click', () => {
    
    
    fetch ('https://dog.ceo/api/breeds/image/random')
    .then (resp => resp.json ()).then( data =>{
      console.log (data);

      let imagenGatitoPerrito = document.createElement ('img')
      imagenGatitoPerrito.src = data.message;
      document.body.appendChild (imagenGatitoPerrito);
       })
});