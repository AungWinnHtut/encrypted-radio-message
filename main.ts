radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber - password)
})
input.onButtonPressed(Button.A, function () {
    password += 20
})
input.onButtonPressed(Button.B, function () {
    group += -1
    radio.setGroup(group)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(data)
    radio.sendNumber(data + password)
})
let password = 0
let data = 0
let group = 0
group = 1
radio.setGroup(group)
data = 100
password = 123
basic.forever(function () {
	
})
