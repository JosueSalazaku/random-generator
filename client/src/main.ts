import './style.css'
import { Cocktail } from './cocktails';
import { cocktailMenu } from './cocktails';

const cockTaialsSections = document.getElementById('cocktails-section') as HTMLElement;
const randomBtn = document.getElementById("random-button") as HTMLButtonElement;

function showRandomCocktail() {
    cockTaialsSections.innerHTML = '';

    const randomCocktail = cocktailMenu[Math.floor(Math.random() * cocktailMenu.length)];

    let picture = document.createElement('img') as HTMLImageElement;
    picture.src = randomCocktail.imageUrl;
    cockTaialsSections.appendChild(picture);

    let cocktailName = document.createElement("h1") as HTMLHeadingElement;
    cocktailName.classList.add('text-3xl');
    cocktailName.classList.add('py-2');
    cocktailName.innerText = randomCocktail.name;
    cockTaialsSections.appendChild(cocktailName);

    let price = document.createElement("p") as HTMLParagraphElement;
    price.classList.add('text-3xl');
    price.classList.add('py-2');
    price.innerText = `€ ${randomCocktail.price.toString()}`;
    cockTaialsSections.appendChild(price);
}

randomBtn.addEventListener('click', () => {
    showRandomCocktail()
})