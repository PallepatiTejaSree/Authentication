//ES6

//fatarrows

let sample=function(user){
    console.log("Hello, "+user);
    return -1;
}
console.log(sample("CVR"));

let sample_fa=(user)=>{
    console.log("Hello, "+user);
    return -1;
}
console.log(sample_fa("Teja"));

//destructuring

const user={
    firstName:'CVR',
    lastName:'IT',
    address:{
        city:'Hyderabad',
        country:'India'
    }
}
const {firstName,lastName,address}=user;
console.log(firstName);
console.log(lastName);
console.log(address);

const{...userdetails}=user;
console.log(userdetails);

const scores=[10,22,45,762,88];
console.log(scores[0]);
const[a,,b,c,...rest]=scores;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);


//generators

function* generators(){
    yield "one";
    yield "two";
    yield "three";
}
let obj=generators();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());