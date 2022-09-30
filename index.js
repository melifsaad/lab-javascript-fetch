//Reto 1: hacer un fetch a la pokeapi y mostrar el nombre del pokemos en en console.log
//Reto 2: Hacer un html con un input y una lista y darle estilo
//Reto 3: Hacer que al pulsar una tecla en el input se vea en un console.log el valor
//Reto 4: Hacer una array con la informacion de los 151 primeros pokemons
//Reto 5: Mostrar en la lista el nombre y la imagen de los pokemons

// PASO 1:
// const getName = async () => {
//     const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//     console.log(pokemon)
//     const data = await pokemon.json();
//     console.log(data.name)
// }
// getName();

// PASO 3:
const input = document.querySelector('#input');
input.addEventListener('keyup', ()=>{
    console.log(input.value)
})

//PASO 4:
const getPokemon = async () => {
    const pokemons = [];
    for (let id = 1; id <= 151; id++) {
        const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        pokemons.push(data)
    }
    console.log(pokemons);
    return pokemons
}
const pokeApi = (id) => {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + id)
}
const inicio = async () => {
    const pokemonsTot = await getPokemon();
    for (let id = 0; id < pokemonsTot.length; id++) {
        document.querySelector('ul').innerHTML += `<li>
        ${pokemonsTot[id].name} 
        <img src="${pokemonsTot[id].sprites.front_default}"></li>`;
        
}
}
inicio();
