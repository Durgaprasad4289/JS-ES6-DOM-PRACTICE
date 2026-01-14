const image1 = document.getElementById('pokemonImage1');
const image2 = document.getElementById('pokemonImage2');
const button = document.getElementById('fetchButton');

button.addEventListener('click', async () => {
    const input = document.getElementById('textInput').value.toLowerCase().trim();

    if (!input) {
        alert("Please enter a Pokémon name");
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        if (!response.ok) {
            throw new Error(`${input} is not a valid Pokémon name`);
        }

        const data = await response.json();
        image1.src = data.sprites.front_shiny;
        image2.src = data.sprites.back_shiny;
        image1.style.display = "block";
        image2.style.display = "block";

    } catch (err) {
        alert(err.message);
    }
});
