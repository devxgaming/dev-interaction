import * as alt from 'alt-server'
import { time } from 'alt-shared'

export const KeyCodes = {
    _0: {
        icon: '0',
        code: 48
    },
    _1: {
        icon: '1',
        code: 49
    },
    _2: {
        icon: '2',
        code: 50
    },
    _3: {
        icon: '3',
        code: 51
    },
    _3: {
        icon: '4',
        code: 52
    },
    _5: {
        icon: '5',
        code: 53
    },
    _6: {
        icon: '6',
        code: 54
    },
    _7: {
        icon: '7',
        code: 55
    },
    _8: {
        icon: '8',
        code: 56
    },
    _9: {
        icon: '9',
        code: 57
    },
    A: {
        icon: 'a',
        code: 65
    },
    ALT_LEFT: {
        icon: 'alt',
        code: 18
    },
    ALT_RIGHT: {
        icon: 'alt-right',
        code: 17
    },
    ArrowLeft: {
        icon: 'cursor-left',
        code: 37
    },
    ArrowRight: {
        icon: 'cursor-right',
        code: 39
    },
    ArrowUp: {
        icon: 'cursor-up',
        code: 38
    },
    ArrowDown: {
        icon: 'cursor-down',
        code: 40
    },
    Backquote: {
        icon: 'apostroph',
        code: 220
    },
    B: {
        icon: 'b',
        code: 66
    },
    Backslash: {
        icon: 'backslash',
        code: 191
    },
    Backspace: {
        icon: 'backspace',
        code: 8
    },
    BracketRight: {
        icon: 'bracket-close',
        code: 187
    },
    BreaketLeft: {
        icon: 'bracket-open',
        code: 186
    },
    C: {
        icon: 'c',
        code: 67
    },
    CapsLock: {
        icon: 'capslock',
        code: 20
    },
    Comma: {
        icon: 'comma-lt',
        code: 188
    },
    ContexMenu: {
        icon: 'context-menu',
        code: 93
    },
    Control: {
        icon: 'ctrl',
        code: 17
    },
    D: {
        icon: 'd',
        code: 68
    },
    Delete: {
        icon: 'delete',
        code: 46
    },
    E: {
        icon: 'e',
        code: 69
    },
    End: {
        icon: 'end',
        code: 35
    },
    Enter: {
        icon: 'enter',
        code: 13
    },
    Équals: {
        icon: 'equals-plus',
        code: 221
    },
    Escape: {
        icon: 'esc',
        code: 27
    },
    F: {
        icon: 'f',
        code: 70
    },
    F1: {
        icon: 'f1',
        code: 112
    },
    F2: {
        icon: 'f2',
        code: 113
    },
    F3: {
        icon: 'f3',
        code: 114
    },
    F4: {
        icon: 'f4',
        code: 115
    },
    F5: {
        icon: 'f5',
        code: 116
    },
    F6: {
        icon: 'f6',
        code: 117
    },
    F7: {
        icon: 'f7',
        code: 118
    },
    F8: {
        icon: 'f8',
        code: 119
    },
    F9: {
        icon: 'f9',
        code: 120
    },
    F10: {
        icon: 'f10',
        code: 121
    },
    F11: {
        icon: 'f11',
        code: 122
    },
    F12: {
        icon: 'f12',
        code: 123
    },
    G: {
        icon: 'g',
        code: 71,
    },
    H: {
        icon: 'H',
        code: 72,
    },
    Home: {
        icon: 'home',
        code: 36
    },
    I: {
        icon: 'i',
        code: 73
    },
    Insert: {
        icon: 'insert',
        code: 45
    },
    J: {
        icon: 'j',
        code: 74,
    },
    K: {
        icon: 'K',
        code: 75
    },
    L: {
        icon: 'l',
        code: 76
    },
    M: {
        icon: 'm',
        code: 77
    },
    Minus: {
        icon: 'minus',
        code: 219
    },
    N: {
        icon: 'n',
        code: 78
    },
    Numpad0: {
        icon: 'keypad-0',
        code: 96,
    },
    Numpad1: {
        icon: 'keypad-1',
        code: 97
    },
    Numpad2: {
        icon: 'keypad-2',
        code: 98
    },
    Numpad3: {
        icon: 'keypad-3',
        code: 99
    },
    Numpad4: {
        icon: 'keypad-4',
        code: 100
    },
    Numpad5: {
        icon: 'keypad-5',
        code: 101
    },
    Numpad6: {
        icon: 'keypad-6',
        code: 102
    },
    Numpad7: {
        icon: 'keypad-7',
        code: 103
    },
    Numpad8: {
        icon: 'keypad-8',
        code: 104
    },
    Numpad9: {
        icon: 'keypad-9',
        code: 105
    },
    NumpadMultiply: {
        icon: 'keypad-asterix',
        code: 106
    },
    NumpadSubtract: {
        icon: 'keypad-minus',
        code: 109
    },
    NumpadDecimal: {
        icon: 'keypad-period',
        code: 110
    },
    NumpadAdd: {
        icon: 'keypad-plus',
        code: 107
    },
    NumpadDivide: {
        icon: 'keypad-slash',
        code: 111
    },
    NumLock: {
        icon: 'num-lock',
        code: 114
    },
    O: {
        icon: 'o',
        code: 79,
    },
    P: {
        icon: 'p',
        code: 80,
    },
    PageUp: {
        icon: 'page-up',
        code: 33
    },
    PageDown: {
        icon: 'page-down',
        code: 34
    },
    Pause: {
        icon: 'pause',
        code: 19
    },
    Period: {
        icon: 'period-gt',
        code: 190
    },
    Q: {
        icon: 'q',
        code: 81
    },
    R: {
        icon: 'r',
        code: 82
    },
    S: {
        icon: 's',
        code: 83
    },
    ScrollLock: {
        icon: 'scroll-lock',
        code: 145
    },
    Semicolon: {
        icon: 'semicolon-dble',
        code: 192
    },
    Shift: {
        icon: 'shift',
        code: 16
    },
    Slash: {
        icon: 'slash-questionmark',
        code: 189
    },
    Spacebar: {
        icon: 'spacebar',
        code: 32
    },
    T: {
        icon: 't',
        code: 84
    },
    Tab: {
        icon: 'tab',
        code: 9
    },
    U: {
        icon: 'u',
        code: 85
    },
    V: {
        icon: 'v',
        code: 86
    },
    W: {
        icon: 'W',
        code: 87
    },
    Windows: {
        icon: 'win',
        code: 91
    },
    X: {
        icon: 'x',
        code: 88
    },
    Y: {
        icon: 'y',
        code: 89
    },
    Z: {
        icon: 'z',
        code: 90
    }
}

export const Position = {
    TOP_LEFT: 'top-left',
    TOP_CENTER: 'top-center',
    TOP_RIGHT: 'top-right',
    CENTER_LEFT: 'center-left',
    CENTER: 'center',
    CENTER_RIGHT: 'center-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_CENTER: 'bottom-center',
    BOTTOM_RIGHT: 'bottom-right'
}

export const Color = {
    RED: 'red',
    BLACK: 'black',
    GREEN: 'green',
    BLUE: 'blue',
    PINK: 'pink',
    YELLOW: 'yellow',
    NONE: null
}


class InteractionManager {
    constructor() {
        this.counter = 0
        this.interactions = []
    }

    findInteractionById(id) {
        for (const inter of this.interactions) {
            if (inter.id == id) {
                return inter
            }
        }
        return undefined
    }

    onClickedCallback(callback, key = null) {
        const find = this.findInteractionById(callback)
        if (find) {
            if (find instanceof SingleKey) {
                if (find.__on_clicked__) find.__on_clicked__()
                find.hide() // hide automatic
            } else {
                if (find.__on_clicked__) find.__on_clicked__(key)
            }
        }
    }

    onCanceledCallback(callback) {
        const find = this.findInteractionById(callback)
        if (find) {
            if (find.__on_cancel__) find.__on_cancel__()
        }
    }

    hide(id) {
        const find = this.findInteractionById(id)
        if (find) {
            find.hide()
        }
    }

    add(interaction) {
        if (interaction in this.interactions) return
        this.interactions.push(interaction)
    }

    destroy(interaction) {
        this.interactions = this.interactions.filter(item => item !== interaction)
    }
}


const manager = new InteractionManager()

function GenerateId() {
    manager.counter++
    return manager.counter
}


class SingleKey {
    constructor(player, key, text, color, position, rtl = false, timeout = 0) {
        this.id = GenerateId()
        this.player = player
        this.key = key
        this.text = text
        this.color = color
        this.position = position
        this.rtl = rtl
        this.timeout = timeout
        this.__on_clicked__ = null
        this.__on_cancel__ = null
    }

    onClicked(fun) {
        this.__on_clicked__ = fun
    }

    onDestroyed(fun) {
        this.__on_cancel__ = fun
    }

    show() {
        alt.emitClient(this.player, 'dev-interaction:view:singleKey', this.id, this.key, this.text, this.color, this.position, this.rtl, this.timeout)
        manager.add(this)
    }


    hide() {
        alt.emitClient(this.player, 'dev-interaction:view:hide', this.id)
        manager.destroy(this)
    }
}

class MultipleKeys {
    constructor(player, keys, text, color, position, rtl = false, timeout = 0) {
        this.id = GenerateId()
        this.player = player
        this.key = keys
        this.text = text
        this.color = color
        this.position = position
        this.rtl = rtl
        this.timeout = timeout
        this.__on_clicked__ = null
        this.__on_cancel__ = null
    }

    onClicked(fun) {
        this.__on_clicked__ = fun
    }
    onDestroyed(fun) {
        this.__on_cancel__ = fun
    }

    show() {
        alt.emitClient(this.player, 'dev-interaction:view:multipleKey', this.id, this.key, this.text, this.color, this.position, this.rtl, this.timeout)
        manager.add(this)
    }

    hide() {
        alt.emitClient(this.player, 'dev-interaction:view:hide', this.id)
        manager.destroy(this)
    }
}

export function DrawSingleKey(player, key, text, color = null, position = null, rtl = false, timeout = 0, onClick = null, onDestroyed = null) {
    const draw = new SingleKey(player, key, text, color, position, rtl, timeout)
    draw.onClicked(onClick)
    draw.onDestroyed(onDestroyed)
    draw.show()
    return draw.id
}


export function DrawMultipleKey(player, key, text, color = null, position = null, rtl = false, timeout = 0, onClick = null, onDestroyed = null) {
    const draw = new MultipleKeys(player, key, text, color, position, rtl, timeout)
    draw.onClicked(onClick)
    draw.onDestroyed(onDestroyed)
    draw.show()
    return draw.id
}

export function isEquals(key, key1){
    return JSON.stringify(key) === JSON.stringify(key1)
}

export function Hide(id){
    manager.hide(id)
}

alt.onClient('dev-interaction:on:interaction:canceled', (_, callback) => {
    manager.onCanceledCallback(callback)
})

alt.onClient('dev-interaction:on:interaction:clicked', (_, callback, key = null) => {
    manager.onClickedCallback(callback, key)
})