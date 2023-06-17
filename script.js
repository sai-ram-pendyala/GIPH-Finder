const imgDiv = document.querySelector('div');
const btn = document.querySelector('button');
const input = document.querySelector('input');

const url = 'https://api.giphy.com/v1/gifs/translate?api_key=CfJbFN516PSvfS9J0KPJEe5vm9q5QOwn';

btn.addEventListener('click', () => {
    console.log(input.value);
    fetch(url + `&s=${input.value}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            const img = document.createElement('img');
            img.src = response.data.images.original.url;
            imgDiv.innerHTML = '';
            imgDiv.appendChild(img);
        })
        .catch(function(error) {
            imgDiv.innerHTML = '';
            imgDiv.textContent = 'Try a different Search';
        });
});