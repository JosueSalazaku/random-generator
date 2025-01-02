import './style.css'
import { Cocktail } from './cocktails';
import { cocktailMenu } from './cocktails';

const cockTaialsSections = document.getElementById('cocktails-section') as HTMLElement;
const randomBtn = document.getElementById("random-button") as HTMLButtonElement;

let randomCocktails: Cocktail[] = [];

function showRandomCocktail() {
    for (let i = 0; i < cocktailMenu.length; i++) {
        randomCocktails.push(cocktailMenu[Math.floor(Math.random() * cocktailMenu.length)]);
    }

    let picture = document.createElement('img') as HTMLImageElement;
    picture.src = randomCocktails[0].imageUrl;
    cockTaialsSections.appendChild(picture);

    let cocktailName = document.createElement("h1") as HTMLHeadingElement;
    cocktailName.innerText = randomCocktails[0].name;
    cockTaialsSections.appendChild(cocktailName);

    let price = document.createElement("p") as HTMLParagraphElement;
    price.innerText = `€ ${randomCocktails[0].price.toString()}`
    cockTaialsSections.appendChild(price);
}

randomBtn.addEventListener('click', () => {
    showRandomCocktail()
})