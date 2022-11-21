radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(10)
    Entry = "" + Entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (Entry == Password) {
        radio.sendNumber(10)
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 0)
        music.stopMelody(MelodyStopOptions.All)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
    basic.clearScreen()
    Entry = ""
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(10)
    Entry = "" + Password + "B"
})
let Password = ""
let Entry = ""
basic.showIcon(IconNames.Diamond)
Entry = ""
Password = "AABAA"
pins.servoWritePin(AnalogPin.P0, 0)
radio.setGroup(255)
