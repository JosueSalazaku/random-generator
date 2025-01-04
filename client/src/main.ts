import './style.css'

import { home, setupRandomButton } from './views/home';
import { about } from './views/about';
import { contact } from './views/conctact';

const routes: { [key: string]: string } = {
  home: home,
  about: about,
  contact: contact,
};

function loadRoute() {
  const route = window.location.hash.slice(1) || 'home';
  const content = routes[route] || routes['home'];

  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = content;
  }
    
  if (route === 'home') {
    setupRandomButton(); 
  }
}


window.addEventListener("hashchange", loadRoute);
loadRoute();
