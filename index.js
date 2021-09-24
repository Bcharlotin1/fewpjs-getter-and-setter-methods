// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(num){
        this.diameter = num;
    }

    get circumference(){
        return this.diameter * Math.PI
    }

    set circumference(num){
        this.circumference = num;
    }

    get area(){
        return (Math.PI * (this.radius**2))
    }
    set area(num){
        this.area = num;
    }

}