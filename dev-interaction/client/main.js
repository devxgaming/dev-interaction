import * as alt from 'alt-client'

const webView = new alt.WebView('http://resource/client/html/index.html')

export const KeyCode = {
    _0: "0",
    _1: "1",
    _2: "2",
    _3: "3",
    _4: "4",
    _5: "5",
    _6: "6",
    _7: "7",
    _8: "8",
    _9: "9",
    A: "a",
    ALT_RIGHT: "alt_right",
    ALT: "alt",
    APOSTROPH: "apostroph",
    B: "b",
    BACKSLASH: "backslash",
    BACKSPACE: "backspace",
    BRACKET_CLOSE: "bracket_close",
    BRACKET_OPEN: "bracket_open",
    C: "c",
    CAPSLOCK: "capslock",
    COMMA_LT: "comma_lt",
    COMMA: "comma",
    CONTEXT_MENU: "context_menu",
    CTRL_2: "ctrl_2",
    CTRL: "ctrl",
    CURSOR_DOWN: "cursor_down",
    CURSOR_LEFT: "cursor_left",
    CURSOR_RIGHT: "cursor_right",
    CURSOR_UP: "cursor_up",
    D: "d",
    DELETE: "delete",
    E: "e",
    END: "end",
    ENTER: "enter",
    EQUALS_PLUS: "equals_plus",
    ESC: "esc",
    F: "f",
    F1: "f1",
    F10: "f10",
    F11: "f11",
    F12: "f12",
    F2: "f2",
    F3: "f3",
    F4: "f4",
    F5: "f5",
    F6: "f6",
    F7: "f7",
    F8: "f8",
    F9: "f9",
    G: "g",
    H: "h",
    HOME: "home",
    I: "i",
    INSERT: "insert",
    J: "j",
    K: "k",
    KEYPAD_0: "keypad_0",
    KEYPAD_1: "keypad_1",
    KEYPAD_2: "keypad_2",
    KEYPAD_3: "keypad_3",
    KEYPAD_4: "keypad_4",
    KEYPAD_5: "keypad_5",
    KEYPAD_6: "keypad_6",
    KEYPAD_7: "keypad_7",
    KEYPAD_8: "keypad_8",
    KEYPAD_9: "keypad_9",
    KEYPAD_ASTERIX: "keypad_asterix",
    KEYPAD_ENTER: "keypad_enter",
    KEYPAD_MINUS: "keypad_minus",
    KEYPAD_PERIOD: "keypad_period",
    KEYPAD_PLUS: "keypad_plus",
    KEYPAD_SLASH: "keypad_slash",
    L: "l",
    LOCKS: "locks",
    M: "m",
    MINUS: "minus",
    N: "n",
    NUM_LOCK: "num_lock",
    O: "o",
    P: "p",
    PAGE_DOWN: "page_down",
    PAGE_UP: "page_up",
    PAUSE: "pause",
    PERIOD_GT: "period_gt",
    POWER: "power",
    PRINT: "print",
    Q: "q",
    R: "r",
    S: "s",
    SCROLL_LOCK: "scroll_lock",
    SEMICOLON_DBLE: "semicolon_dble",
    SHIFT_RIGHT: "shift_right",
    SHIFT: "shift",
    SLASH_QUESTIONMARK: "slash_questionmark",
    SLEEP: "sleep",
    SPACEBAR: "spacebar",
    SPECIALKEY_2: "specialkey_2",
    T: "t",
    TAB: "tab",
    U: "u",
    V: "v",
    W: "w",
    WAKE_UP: "wake_up",
    WIN: "win",
    X: "x",
    Y: "y",
    Z: "z",
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
    YELLOW: 'yellow'
}

export function DrawText(key, text, color=null, position=null, rtl=false){
    webView.emit('show', key, text, color, position, rtl)
}

export function Hide(){
    webView.emit('hide')
}


alt.onServer('interaction:drawText', (key, text, color=null, position=null, rtl=false) => {
    DrawText(key, text, color, position, rtl)
})

alt.onServer('interaction:hide', () => {
    Hide()
})
