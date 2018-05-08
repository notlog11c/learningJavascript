const person = {
    name: 'notlog11c',
    age: 20,
    address: 'Semarang',
    sayHello: () => console.log('Hallo')
}

person.status = 'single'
delete person.age

person.sayHello()