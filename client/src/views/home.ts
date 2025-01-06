import { cocktailMenu } from './../cocktails';

export const home = `
  <nav class="w-screen flex flex-col bg-orange-600 px-4 py-1 text-[35px] text-white">
    <ul class="flex py-0 space-x-3">
      <li><a href="/" class="text-xl">Home</a></li>
      <li><a href="#about" class="text-xl">About</a></li>
      <li><a href="#contact" class="text-xl">Contact</a></li>
    </ul>
  </nav>
  <section id="cocktails-section" class="h-[500px] pt-7 mb-8 text-[20px]">
  </section>
  <div>
    <button class="w-26 rounded-lg text-white bg-orange-600 text-[30px] px-2 py-1" id="random-button">CHOOSE</button>
  </div>
`;


const cockTaialsSections = document.getElementById('cocktails-section') as HTMLElement;

function showRandomCocktail() {
  if (!cockTaialsSections) {
    console.error('cocktails-section element not found');
    return;
  }

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

export function setupRandomButton() {
    const randomBtn = document.getElementById("random-button") as HTMLButtonElement;
    if (!randomBtn) {
      console.error('Random button not found');
      return;
    }
  
    randomBtn.addEventListener('click', () => {
      const cockTaialsSections = document.getElementById('cocktails-section') as HTMLElement;
      if (!cockTaialsSections) {
        console.error('cocktails-section element not found');
        return;
      }
      showRandomCocktail();
    });
  }
  
  