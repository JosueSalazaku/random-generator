import './style.css'
import { Cocktail } from './cocktails';
import { cocktailMenu } from './cocktails';

const cockTaialsSections = document.getElementById('cocktails-section') as HTMLElement;
const randomBtn = document.getElementById("random-button") as HTMLButtonElement;

randomBtn.addEventListener('click', () => {
    let randomCocktails: Cocktail[] = [];
    for (let i = 0; i < cocktailMenu.length; i++) {
        randomCocktails.push(cocktailMenu[Math.floor(Math.random() * cocktailMenu.length)]);
    }
    // return randomCocktails[0];
    console.log(randomCocktails[0]);
})