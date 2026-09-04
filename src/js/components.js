//connectedCallback es un metodo de web component, se ejecuta automaticamente cuando carga la web

class headerComponent extends HTMLElement{
    connectedCallback() {
        this.innerHTML= `
        <header class="header">
            <div class="header-container">
                <a href="index.html" class="logo">DuckStore</a>
                <nav class="nav-links">
                    <ul>
                        <li><a href="index.html">Início</a></li>
                        <li><a href="catalog.html">Catálogo</a></li>
                        <li><a href="contactos.html">Contacto</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <div class="search ">
                        <span>⌕</span>
                        <input type="text" placeholder="Search ducks..." />
                    </div>
                    <button><span class="material-symbols-outlined">shopping_cart</span></button>
                    <button><span class="material-symbols-outlined">person</span></button>
                    <button  aria-label="Menu" class="burguerMenu_icon"><span class="material-symbols-outlined">menu</span></button>
                </div>
            </div>    
        </header>
        `
        const menuBtn = this.querySelector('.burguerMenu_icon');
        const navLinks = this.querySelector('.nav-links');
        const menuIcon = menuBtn.querySelector('.material-symbols-outlined');

        //Evento de hacer click
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');

            if(navLinks.classList.contains('open')){
                menuIcon.textContent = 'close';
            }else{
                menuIcon.textContent = 'menu'
            }
        })
    }

    

}

class footerComponent extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <section>
                <h1 class="LogoTitle">DuckStore</h1>
                <h2 class="SubTitle">© 2026 DuckStore. Keep it quacky.</h2>
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