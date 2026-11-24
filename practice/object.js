let student ={
    id:101,
    name:"Atul",
    isPresent:true,
    marks:90,
    address:{
        city:"Mathura",
        pincode:281403
    },

    display:function (){
        console.log(`my name is ${this.name}`);
    }
}
console.log(student.name);   // read from object
student.name="Rahul";     // for update in object
delete student.id;       //  for delete from object

// in object arrow function has not context of this

console.log(student.address.city);

// to convert object into json -->
let jsonData=JSON.stringify(student);
console.log(jsonData);

// json to object -->
let objectData= JSON.parse(jsonData);
console.log(objectData); 
 