console.log("script loaded :3");


async function fetchPoke() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Couldnt fetch resource because it does not exists");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgE = document.getElementById("pokemonSprite");
    imgE.src = pokemonSprite;
    imgE.style.display = "block";
    imgE.style.width="200px";
  } catch (error) {
    console.error(error);
  }

}




