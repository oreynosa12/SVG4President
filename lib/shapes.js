const { shape } = require("prop-types")

 class shapes extends shape {
    constructor(children = []){
        this.children = children
    }
    render(){
        throw new Error (`Child class must implement render() method.`)
    }
}

class Triangle {
    constructor(){
        this.color = ""
    }

    setColor(color){
        this.color = color
    }

    render(){
        return `
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        `
    }
}

class Circle  {
    constructor(){
        this.color = ""
    }
    setColor(color){
        this.color = color
    }
    render(){
        return `<circle cx="50" cy="50" r="50" fill = "${this.color}" />`
    }

}

class Square{
    constructor(){
        this.color = ""
    }

    setColor(color){
        this.color = color
    }

    render(){
        return `<rect width="100" height="100" fill = "${this.color}" />`
    }
}

 module.exports = {
    Triangle,
    Circle,
    Square
 }