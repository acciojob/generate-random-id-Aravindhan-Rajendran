function makeid(l) {
  // write your code here
	let res="";
	let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for ( let i = 0; i< l; i++ ) {
        res += characters.charAt(Math.floor(Math.random() * characters.Length));
    }
return res;
}

// Do not change the code below
const l = prompt("Enter a number.");
alert(makeid(l));
