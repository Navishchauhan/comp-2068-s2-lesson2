console.clear();

//Blocking (sync)
const sayHi = name => console.log(`Hello, ${name}`);
sayHi('Nav');
sayHi('Kev');
sayHi('dev');

//Non-Blocking (async)
setTimeout(sayHi, 3500,'adam');
setTimeout(sayHi, 5000,'cole');
setTimeout(sayHi, 2000,'alice');
sayHi('devin');

//Callbacks 
const farewell = name => console.log(`Goodbye, ${name}`);
const greeting = (name, callback) =>{
	console.log(`Hello, ${name}`);
	callback(name);
}
greeting('Navish Chauhan', farewell);