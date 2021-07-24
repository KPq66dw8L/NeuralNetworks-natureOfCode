
//Activation function
function sign(n){
    if (n >= 0){
        return 1;
    } else {
        return -1;
    }
}

class Perceptron {
    //Constructor
    constructor() {
        this.weigths = new Array(2);
        //Initialize the weigths randomly
        for (let i = 0; i < this.weigths.length; i++) {
            this.weigths[i] = random(-1, 1);
        }
    }

    inputs = new Array(2);
    guess(inputs) {
        let sum = 0;
        for (let i = 0; i < this.weigths.length; i++){
            sum += inputs[i]*this.weigths[i];
        }
        let output = sign(sum);
        console.log(output);
        return output;
    }
}



let p;
function setup() {
    createCanvas(200, 200);
    p = new Perceptron();
    let inputs2 = [-1, 0.5];
    let guess = p.guess(inputs2);
}

function draw() {

}