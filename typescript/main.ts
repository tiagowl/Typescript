
interface AnimalInterface{
    name: string;
    color: string;

    correr();
    andar();
}

class Animal implements AnimalInterface{

    private atributo;

    constructor(public name: string, public color: string){

    }

    correr(){

    }

    andar(){

    }

}

class Coelho extends Animal{
    tamanhoOrelha: number;
}

let myAnimal : Animal = new Animal('Coelho', 'branco');

console.log(myAnimal.name);
console.log(myAnimal.color);

let coelho = new Coelho('meu coelho', 'preto');
coelho.andar();
coelho.correr();

let myArray: Array<number> = [];