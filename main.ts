let degress = 0
basic.showLeds(`
    . # # . .
    # . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    degress = input.compassHeading()
    if (degress < 45) {
        basic.showString("N")
    } else if (degress < 135) {
        basic.showString("E")
    } else if (degress < 225) {
        basic.showString("S")
    } else if (degress < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
