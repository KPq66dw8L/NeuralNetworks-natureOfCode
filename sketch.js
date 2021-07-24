
//Activation function
function sign(n){
    if (n >= 0){
        return 1;
    } else {
        return -1;
    }
}

//Known training data
class Point {
    
    constructor() {
        this.x = random(width);
        this.y = random(height);

        if ( this.x > this.y ) {
            this.label = 1;
        } else {
            this.label = -1;
        }
    }

    show() {
        stroke(0);
        if (this.label == 1) {
            fill(255);
        } else {
            fill(0);
        }
        ellipse(this.x, this.y, 12, 12);
    }

}

//Neuron
class Perceptron {
    //Constructor
    
    constructor() {
        this.weights = new Array(2);
        //Initialize the weigths randomly
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1);
        }
        this.inputs = new Array(2);
    }

    
    guess(inputs) {
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++){
            sum += inputs[i]*this.weights[i];
        }
        let output = sign(sum);
        return output;
    }

    train(inputs, target) {
        this.lr = 0.1;
        this.guezz = this.guess(inputs);
        this.error = target - this.guezz;

        //Tune all the weights
        for (let y = 0; y < this.weights.length; y++) {
            this.weights[y] += this.error * inputs[y] * this.lr;
            
        }
    }
}

let brain;
let points = new Array(100);
function setup() {
    createCanvas(700, 700);
    brain = new Perceptron();
    
    for (let i = 0; i < points.length; i++){
        points[i] = new Point();
    }

    // let inputs2 = [-1, 0.5];
    // brain.guess(inputs2);
    
}

function draw() {
    background(200);
    stroke(0);
    line(0, 0, width, height);
    for (let i = 0; i < points.length; i++){
        points[i].show();
    }
    
    for (let i = 0; i < points.length; i++){
        let inputs3 = [points[i].x, points[i].y];
        let target = points[i].label;

        brain.train(inputs3, target);
        
        let guess2 =  brain.guess(inputs3);

        if (guess2 == target) {
            fill(0, 255, 0);
        } else {
            fill(255, 0, 0);
        }
        noStroke();
        ellipse(points[i].x, points[i].y, 8, 8);
    }
}