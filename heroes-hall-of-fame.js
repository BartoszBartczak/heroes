let heroCount = 0;
const heroes = [];

class Hero {
    powerCount = 10;

    constructor(name) {
        this.name = name;
    }

    getPowerCount() {
         return this.powerCount;
    }

    train() {
        this.powerCount + 1;
    }
}

let hulk = getHero("hulk");
let geralt = getHero("Geralt");

heroes.push(hulk);
heroes.push(geralt);

function getHero() {
    heroCount++;
    let spiderman = new Hero("spiderman");
}

const print_hall_of_fame = () => {
     let spiderman = getHero("spiderman");
     heroes.push(spiderman);

     const heroesContainer = document.querySelector('.hero');

     heroes.map((x, i, arr) => {
        const heroElement = ducument.createElement("div");
        const [name] = x;

        heroElement.innerHTML = `<p>${name}</p><p>${powerCount}</p>`;

        heroesContainer.append(heroElement);
     });

    }

