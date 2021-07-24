//Activation function
let n;
function sign(n){
    if (n >= 0){
        return 1;
    } else {
        return -1;
    }
}

class Perceptron {
    weigths = new Array(2);

    //Constructor
    Perceptron() {
        //Initialize the weigths randomly
        for (let i = 0; i < this.weigths.length; i++) {
            this.weigths[i] = random(-1, 1);
        }
    }
}

let inputs = new Array(2);
function guess(inputs) {
    let sum = 0;
    for (let i = 0; i < weigths.length; i++){
        sum += inputs[i]*weigths[i];
    }
    let output = sign(sum);
    console.log(output);
    return output;
}