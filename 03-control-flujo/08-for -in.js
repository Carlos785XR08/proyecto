let user = {
    id: 1,
    name: 'Cerdito',
    age: 25,
};

for (let prop in user) {

    console.log(prop, user[prop]);
}

let animales = ['perro', 'cerdo', 'canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}