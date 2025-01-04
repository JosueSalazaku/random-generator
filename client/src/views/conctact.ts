export const contact = `
  <nav class="w-screen flex flex-col bg-orange-600 px-4 py-1 text-[35px] text-white">
    <ul class="flex py-0 space-x-3">
      <li><a href="/" class="text-xl">Home</a></li>
      <li><a href="#about" class="text-xl">About</a></li>
      <li><a href="#contact" class="text-xl">Contact</a></li>
    </ul>
  </nav>
  <div class="p-8">
    <h2 class="text-3xl mb-4">Contact Us</h2>
    <p>Get in touch with us through the form below.</p>
    <form>
      <input type="text" placeholder="Your Name" class="p-2 border mb-4 w-full"/>
      <input type="email" placeholder="Your Email" class="p-2 border mb-4 w-full"/>
      <textarea placeholder="Your Message" class="p-2 border mb-4 w-full"></textarea>
      <button type="submit" class="bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  </div>
`;
