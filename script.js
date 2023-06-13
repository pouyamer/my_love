const canvas = document.querySelector(".canvas")
const canvas2 = document.querySelectorAll(".canvas")[1]

const ctx = canvas.getContext("2d")
const ctx2 = canvas2.getContext("2d")

const firstNameDiv = document.querySelector(".name")
const secondNameDiv = document.querySelectorAll(".name")[1]

canvas.width = getComputedStyle(canvas).width.replace("px", "")
canvas.height = getComputedStyle(canvas).height.replace("px", "")

canvas2.width = getComputedStyle(canvas2).width.replace("px", "")
canvas2.height = getComputedStyle(canvas2).height.replace("px", "")

console.log()

const getRandomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

class Bubble {
  constructor(x, y, size, color) {
    this.x = x
    this.y = y
    this.size = size
    this.color = color
  }

  stroke = ctx => {
    ctx.strokeStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.stroke()
    console.log(this)
  }
}

let bubblesForFirstName = []
let bubblesForSecondName = []

// how many bubbles
const segments = 120

for (let i = 0; i < segments; i++) {
  bubblesForFirstName.push(
    new Bubble(
      (i * canvas.width) / segments,
      getRandomNumberBetween(0, canvas.height),
      canvas.width / segments,
      "white"
    )
  )

  bubblesForSecondName.push(
    new Bubble(
      (i * canvas.width) / segments,
      getRandomNumberBetween(0, canvas.height),
      canvas.width / segments,
      "white"
    )
  )
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(animate)
  bubblesForFirstName.forEach(bubble => {
    bubble.stroke(ctx)
    bubble.y += getRandomNumberBetween(0, 5)
    bubble.x += getRandomNumberBetween(-0.5, 0.5)

    bubble.color = getComputedStyle(firstNameDiv.querySelector("p")).color

    if (bubble.y > canvas.height) {
      bubble.y = -10
    }
  })

  ctx2.clearRect(0, 0, canvas.width, canvas.height)
  bubblesForSecondName.forEach(bubble => {
    bubble.stroke(ctx2)
    bubble.y += getRandomNumberBetween(0, 5)
    bubble.x += getRandomNumberBetween(-0.5, 0.5)

    bubble.color = getComputedStyle(secondNameDiv.querySelector("p")).color

    if (bubble.y > canvas.height) {
      bubble.y = -10
    }
  })
}

animate()
