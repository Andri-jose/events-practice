
// Se Genera Titulos y parrafos a partir de un array de publicaciones


class Diario {
    constructor(Titulo, Parrafo){
        this.Titulo = Titulo;
        this.Parrafo = Parrafo;
        
    }

}

const publicacion1 = [];

const publicacion2 = [];

const publicacion3 = [];

publicacion1.push(new Diario("Primer parrafo Lorem Ipsum","1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
publicacion2.push(new Diario("Segundo parrafo Lorem Ipsum","2 Vestibulum viverra nulla non urna lacinia, a pretium ligula vehicula. Sed volutpat ornare lorem, in mollis lacus accumsan ac. Vivamus rhoncus viverra metus. Nam bibendum gravida quam nec pulvinar. Aenean tempor efficitur eros at molestie. Suspendisse volutpat accumsan vulputate. Aenean posuere imperdiet est, vel semper lorem. Nullam gravida, nisi luctus volutpat vulputate, metus eros ultrices risus, eget consectetur lorem nisl nec risus."));
publicacion3.push(new Diario("Tercer parrafo Lorem Ipsum","3 Vivamus urna nulla, hendrerit eget dignissim nec, scelerisque eget nunc. Morbi iaculis feugiat sollicitudin. Nunc lorem dui, fringilla eu turpis nec, condimentum luctus mauris. Proin in augue molestie, dapibus dui eget, laoreet arcu. Vestibulum non fermentum elit. Cras volutpat pulvinar massa. Curabitur finibus sem pellentesque lacus cursus volutpat. Sed venenatis, dui id venenatis congue, dui leo mattis tortor, ac bibendum justo odio vitae diam. Nam condimentum tellus id lobortis tincidunt. Cras eget velit eget libero faucibus dapibus. In vel magna condimentum, posuere dolor sed, facilisis felis."));

// Primer articulo
let info1= document.createElement("article");
for (const publico of publicacion1) {
    info1.innerHTML = `<h1>${publico.Titulo}</h1>
<p>${publico.Parrafo}</p>`;

}

document.body.appendChild(info1);


// Segundo articulo
let info2= document.createElement("article");
for (const publico of publicacion2) {
    info2.innerHTML = `<h2>${publico.Titulo}</h2>
<p>${publico.Parrafo}</p>`;

}

document.body.appendChild(info2);


// Tercer articulo
let info3= document.createElement("article");
for (const publico of publicacion3) {
    info3.innerHTML = `<h2>${publico.Titulo}</h2>
<p>${publico.Parrafo}</p>`;

}

document.body.appendChild(info3);


