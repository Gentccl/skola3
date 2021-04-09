let rad = 0
let kol = 0
basic.forever(function () {
    for (let index = 0; index < 25; index++) {
        for (let index = 0; index < 5; index++) {
            if (true) {
                led.toggle(rad, kol)
                basic.pause(200)
                led.unplot(rad, kol)
                rad += 1
            }
        }
        rad = 0
        kol += 1
    }
})
