
let $container = document.querySelector('.container');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
      
    json.forEach((el) => {
        console.log(el);

        let creado = document.createElement('div');
        creado.innerHTML = `<div class="card" style="width: 18rem;" id="${el.id}">
        <div class="card-body" >
            <h5 class="card-title">${el.title}</h5>
                <p class="card-text">${el.body}</p>
        </div>
    </div>`;

    $container.appendChild(creado);

    })

  });