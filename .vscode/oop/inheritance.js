class Parent {

    constructor(){
        this.lastname='Ford'
    }
    displaylastName(){
        console.log('Our lastname is ' + this.lastname )
    }
}
class Child  extends Parent{

}

let rob = new Child()
rob.displaylastName();