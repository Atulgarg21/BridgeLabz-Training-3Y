// #encapulate class
class Student{
    static uName="Gla";
    #StudentId=101;
    #StudentName="Sahil";



getDetails(){
    console.log("Student Id:-"+this.#StudentId);
    console.log("Student Name:-"+this.#StudentName);
    this.#StudentName="";

}

}

