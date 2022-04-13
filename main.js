let button = document.getElementById('residentButton');

function buttonClick() {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {
        console.log(res.data.results[0])
        for(let i = 0; i < res.data.results[0].residents.length; i++) {
            axios.get(res.data.results[0].residents[i])
            .then(res => {
                let h2El = document.createElement('h2')
                h2El.textContent = res.data.name;
                document.querySelector('body').appendChild(h2);
                console.log(res)
            })
        }
    })
}

button.addEventListener('click', buttonClick)
