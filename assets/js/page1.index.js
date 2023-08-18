/*const names = ["Whinds", "Freeway", "Testa", "Maria"];

names.forEach((name) => {
    console.log(`Hi, ${name}`);
}) */

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

numbers.forEach((number, index) => {
    if(number %2 ==0) {
        console.log(number);
        console.log(`O número ${number} está na posição ${index} do array`);
    }
})*/


/*const cars = [
    {
        marca: "Ford",
        modelo: "Focus",
    },
    {
        marca: "BMW",
        modelo: "X6",
    },
    {
        marca: "Fiat",
        modelo: "Uno",
    },
    {
        marca: "Audi",
        modelo: "R8",
    },

];

cars.forEach((car) => {
    console.log(`Marca: ${car.marca} - 
    Modelo: ${car.modelo}`);
});*/

class Car {
    constructor(param1 , param2){
        this.brand = param1;
        this.model = param2;
    }
}

class CarsList {
    constructor(){
        this.cars = [];
    }

    addCar(param) {
        this.cars.push(param);
    }
}

const list = new CarsList();

function createCar() {
    const brand = document.getElementById("BrandInput").value;
    const model = document.getElementById("ModelInput").value;


    const hotwheel = new Car(brand, model);

    list.addCar(hotwheel);

    console.log(list);


    list.cars.forEach(car => {
        console.log(`marca: ${car.brand} - modelo: ${car.model}`);
    })

}