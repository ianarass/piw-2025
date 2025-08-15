/* 

Crie 3 classes no javascript usando Class: Animal, Gato, Cachorro e Pato. As classes Gato, Cachorro, Pato, devem herdar da classe animal

A classe animal possui os atributos: nome e tutor, e os métodos: EmitirSom e Comer

Crie também os métodos Gets e sets para cada clsse, permitindo resgatar e setar os valores dos atributos.

Cada animal deve emitir o som respectivo, por exemplo "Au Au", "miau" ou "quack".

Instacie alguns objetos para testar as classes.
*/

class Animal {
    constructor(nome, tutor) {
        this._nome = nome;
        this._tutor = tutor;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get tutor() {
        return this._tutor;
    }

    set tutor(tutor) {
        this._tutor = tutor;
    }

    emitirSom() {
        console.log(`${this._nome} fez um som`);
    }

    comer() {
        console.log(`${this._nome} está comendo`);
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log('Miau Miau');
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log('Au Au');
    }
}

class Pato extends Animal {
    emitirSom() {
        console.log('Quá Quá');
    }
}

/*const cachorro = new Cachorro("Peguinha", "Nara");
cachorro.emitirSom(); 
cachorro.comer();

const gato = new Gato("Raul", "Nara");
gato.emitirSom(); 
gato.comer(); */

const pato = new Pato("Patinho feio", "Nara");
pato.emitirSom();
pato.comer();




