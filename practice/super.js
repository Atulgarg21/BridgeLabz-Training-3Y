//super

class Animal{
    constructor(name){
        this.name=name;

    }
}

class cat extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;

    }
}


const a=new cat();