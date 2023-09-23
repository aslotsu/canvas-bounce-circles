let canvas = document.querySelector('canvas')
canvas.width = innerWidth
canvas.height = innerHeight
const c = canvas.getContext('2d')
type CircleProps = {
    x: number,
    y: number,
    dx: number,
    dy: number
    radius: number
}
function Circle({x, y, dx, dy, radius}: CircleProps) {
    this.x = x
    this.dx = dx
    this.y = y
    this.dy = dy
    this.radius = radius

    this.draw = function (){
        c.beginPath()
        c.strokeStyle="plum"
        c.lineWidth = 4
        c.arc(this.x, this.y, this.radius,0, 2*Math.PI)
        c.fill()
        c.fillStyle = "rgba(217,153,35,0.11)"
        c.stroke()
    }
    this.update = function (){
        this.x+=this.dx
        this.y+=this.dy
        if (this.x<this.radius||this.x>innerWidth-this.radius){
            this.dx=-this.dx
        }
        if (this.y<this.radius || this.y>innerHeight-this.radius){
            this.dy=-this.dy
        }
        this.draw()
    }
}

let circles = []


for (let i = 0; i <5; i++) {
    let radius = 150
    let x = Math.random() * (innerWidth - radius * 2) + radius
    let y = Math.random() * (innerHeight - radius * 2) + radius
    let dx = (Math.random() - 0.5) * 8
    let dy = (Math.random() - 0.5) * 8

    circles.push(new Circle({x ,y ,dx,dy, radius}))

}
console.log(circles)
// let x = Math.random() * innerWidth
// let y = Math.random() * innerHeight
// let dx = 3 * Math.random() - 0.5
// let dy = 3 * Math.random() - 0.5
// let radius = 100

function animateCircles() {
    requestAnimationFrame(animateCircles)
    c.clearRect(0,0,canvas.width, canvas.height)

    // for (let i = 0; i < circles.length; i++) {
    //     circles[i].update()
    // }
    circles.forEach(circle =>{
        circle.update()
    })

}
animateCircles()

