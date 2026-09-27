basic.showString("Hedali4169")
basic.showLeds(`
    . # . # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . . . # .
    . . . # .
    . # # # .
    . # . # .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.showNumber(4169)
music.setVolume(255)
music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
