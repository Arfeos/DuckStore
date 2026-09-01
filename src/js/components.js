//connectedCallback es un metodo de web component, se ejecuta automaticamente cuando carga la web

class headerComponent extends HTMLElement{
    connectedCallback() {
        this.innerHTML= `
        <header class="header">
      <div class="header-container">
        <a href="#" class="logo">DuckStore</a>
        <nav class="nav-links">
          <ul>
          <li><a href="#">Início</li>
          <li><a href="#">Catálogo</a><li>
          <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <span>
        <div class="header-actions">
          <div class="search ">
            <span>⌕</span>
            <input type="text" placeholder="Search ducks..." /></div>
        <button><span class="material-symbols-outlined">shopping_cart</span></button>
       <button><span class="material-symbols-outlined">person</span></button>
        <button  aria-label="Menu" class="md:hidden p-2 text-on-surface-variant hover:text-primary hover:scale-105 transition-transform duration-200 active:scale-95 transition-all burguerMenu_icon"><span class="material-symbols-outlined">menu</span></button>
    </header>
        `
    }
}

class footerComponent extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <section>
                <h1 class="LogoTitle">DuckStore</h1>
                <h2 class="SubTitle">© 2024 DuckStore. Keep it quacky.</h2>
            </section>
            <section>
                <p>Sobre nosotros</p>
                <p>Información de envio</p>
            </section>
            <section>
                <p>Devolución</p>
                <p>Preguntas frecuentes</p>
            </section>
            <section>
                <p>Contactos</p>
            </section>
        </footer>
        `
    }
}

//Para definir el nombre al componente y que salte el callback
customElements.define('header-component', headerComponent);
customElements.define('footer-component', footerComponent);