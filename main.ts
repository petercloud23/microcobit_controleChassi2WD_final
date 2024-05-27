let running = false
radio.setGroup(23)
radio.sendNumber(4)
basic.forever(function () {
    running = true
    while (true) {
        basic.pause(100)
        if (input.buttonIsPressed(Button.AB)) {
            running = true
            radio.sendNumber(0)
            basic.showNumber(0)
        }
        if (input.buttonIsPressed(Button.B)) {
            running = false
            radio.sendNumber(4)
            basic.showNumber(4)
        }
        if (running) {
            if (input.buttonIsPressed(Button.A)) {
                radio.sendNumber(3)
                basic.showNumber(3)
            }
            if (input.isGesture(Gesture.TiltLeft)) {
                radio.sendNumber(1)
                basic.showNumber(1)
            }
            if (input.isGesture(Gesture.TiltRight)) {
                radio.sendNumber(2)
                basic.showNumber(2)
            }
        }
    }
})
