let txt= "abcdefghijklmnopqrstuvwxyz"
let txt0= txt.length;
console.log(txt0);

let txt1 ="Please visit Microsoft!";
let txt2=txt1.replace("Microsoft","BGU");
console.log(txt2);

let txt3 = txt1.concat(" and ", txt2);
console.log(txt3);


function greet() {
    const d = new Date() ;
    var h =d.getHours();
    if (h < 12) {
    let greeting = "Good morning";
    console.log(greeting);
    document.getElementById("1").innerHTML=greeting;
    } else  if(h<18){
    let greeting2="Good afternoon";
    console.log(greeting2);
    document.getElementById("1").innerHTML=greeting2;
    }
    else { 
    greeting3 = "Good evening";
    console.log(greeting);
    document.getElementById("1").innerHTML=greeting3;
    
    }
}

let cars = ['Toyota', 'Honda','Mazda'];
console.log(cars);
text="";
var i;
for(i=0;i<cars.length;i++) {
text += cars[i] + " ";
console.log(text);

}
var imgs = [ "pics/1.png",
"pics/2.png",
"pics/3.png",
"pics/4.png",
"pics/5.png",
"pics/6.png",
"pics/7.png",
];
var i=0;

function StopMotion() {
setTimeout(() => {
    document.getElementById("SMimg").src = imgs[i];
    i++;
    if(i<imgs.length) {
     StopMotion();
 }

    else {
     i=0;
}
}, 250);
}

var person ={
firstName: "John",
lastName: "Doe",
id : 5566,
fullName: function() { 
    return this.firstName + " " + this.lastName;
}
};
console.log(person.fullName());