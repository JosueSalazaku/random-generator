
const nav = `
  <nav class="w-screen flex flex-col bg-orange-600 px-4 py-1 text-[35px] text-white">
    <ul class="flex py-0 space-x-3">
      <li><a href="/" class="text-xl">Home</a></li>
      <li><a href="about" class="text-xl">About</a></li>
      <li><a href="contact" class="text-xl">Contact</a></li>
    </ul>
  </nav>
`;

const routes: { [key: string]: string } = {
    home: `${nav} <h2 class='text-3xl mb-4'>Home Page</h2><p>Welcome to the home page!</p>`,
    about: `${nav} <h2 class='text-3xl mb-4'>About Us</h2><p>Learn more about us.</p>`,
    contact: `${nav}<h2 class='text-3xl mb-4'>Contact Us</h2><p>Get in touch with us.</p>`
}

function loadRoad() {
    const route = window.location.hash.slice(1) || 'home';
    const content = routes[route] || routes['home'];

    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = content;
    }
}

window.addEventListener("hashchange", loadRoad);
loadRoad()