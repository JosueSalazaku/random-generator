
const routes: { [key: string]: string } = {
    home: "<h2 class='text-3xl mb-4'>Home Page</h2><p>Welcome to the home page!</p>",
    about: "<h2 class='text-3xl mb-4'>About Us</h2><p>Learn more about us.</p>",
    contact: "<h2 class='text-3xl mb-4'>Contact Us</h2><p>Get in touch with us.</p>"
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