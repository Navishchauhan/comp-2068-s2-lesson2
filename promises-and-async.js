console.clear();

//callbacks
const washUp = () => {
	console.log("wash your damn hands!!!!");
}

const callMe = async name => {
	await new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log(`time for dinner, ${name}!!!`);
		return resolve();
		}, 2000);
})
}

/* 
setTimeout(name => {
	console.log("done like dinner");
	callMe(name);
}, 2000, "Navish Chauhan");


//promises

new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("done like dinner")
		resolve();
	}, 2000)
})
.then(()=> callMe('Navish Chauhan'));
*/

//Async/Await  	
const main = async (name) =>{
	await new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Done like dinner");
		resolve();
 });
});

await callMe(name);

washUp();
};

main ('Navish Chauhan');

(async () => {
	console.log("i'm iffy about iffies");
})();