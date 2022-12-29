if (window.alt == undefined) {
    window.alt = {
        on: () => { },
        emit: () => { }
    }
}


class DrawManager {
    constructor() {
        this.id = null
        this.key = null
        this.text = null
        this.color = null
        this.position = null
        this.rtl = false
        this.timeout = 0
        this.isMultiple = false
        this.__timeout__handler = null
    }

    timeoutCalled() {
        alt.emit('canceled', this.id)
        this.hide()
    }

    targetClicked() {
        if (this.__timeout__handler) {
            clearTimeout(this.__timeout__handler)
            this.__timeout__handler = null
        }
    }

    setId(id) {
        if (this.id) {
            alt.emit('canceled', this.id)
            if (this.__timeout__handler) {
                clearTimeout(this.__timeout__handler)
                this.__timeout__handler = null
            }
            this.reset()
        }
        this.id = id
    }

    setKey(key) {
        this.key = key
    }

    setText(text) {
        this.text = text
    }

    setColor(color) {
        this.color = color
    }

    setPosition(pos) {
        this.position = pos
    }

    setRtl(rtl) {
        this.rtl = rtl
    }

    setTimeout(timeout) {
        this.timeout = timeout
    }

    setMultiple(multiple) {
        this.isMultiple = multiple
    }

    clearHtml() {
        $('#interaction').html('')
        $('#interaction').removeAttr('class')
        $('#interaction').attr('class', 'interaction')
    }

    show() {
        const handler = $('.interaction')
        if (this.rtl) {
            $('body').attr('dir', 'rtl')
        } else {
            $('body').attr('dir', 'ltr')
        }
        if (handler.css('display') == 'flex') {
            this.clearHtml()
        }
        handler.addClass(this.position)
        if (this.color) handler.addClass(this.color)
        if (!this.isMultiple) {
            if (this.text.includes('~key~')) {
                let text = this.text.split('~key~')
                if (text.length >= 2) {
                    let before = text[0].trim()
                    let after = text[1].trim()
                    handler.html(`<div class="text">${before}</div><div class="key-image"><img src="icon/${this.key}.png" width="0" height="0" alt=""></div><div class="text">${after}</div>`)
                } else {
                    handler.html(`<div class="text">${this.text}</div><div class="key-image"><img src="icon/${this.key}.png" width="0" height="0" alt="">`)
                }
            } else {
                handler.html(`<div class="key-image"><img src="icon/${this.key}.png" width="0" height="0" alt=""></div><div class="text">${this.text}</div>`)
            }
        } else {
            if (this.text.includes('~key~')) {
                let text = this.text.split('~key~')
                let output = ''
                let index = 0
                for (const sub of text) {
                    let element = sub.trim()
                    if (element.length > 0) {
                        output += `<div class="text">${sub.trim()}</div>`
                    }
                    if (index < this.key.length) {
                        output += `<div class="key-image"><img src="icon/${this.key[index]}.png" width="0" height="0" alt=""></div>`
                    }
                    index++
                }
                handler.html(output)
            } else if (this.text.includes('~keys~')) {
                let text = this.text.split('~keys~')
                if (text.length >= 2) {
                    let before = text[0].trim()
                    let after = text[1].trim()
                    let output = `<div class="text">${before}</div>`
                    for (const img of this.key) {
                        output += `<div class="key-image"><img src="icon/${img}.png" width="0" height="0" alt=""></div>`
                    }
                    output += `<div class="text">${after}</div>`
                    handler.html(output)
                } else {
                    let output = this.text
                    for (const img of this.key) {
                        output += `<div class="key-image"><img src="icon/${img}.png" width="0" height="0" alt=""></div>`
                    }
                    handler.html(output)
                }
            } else {
                let output = ''
                for (const img of this.key) {
                    output += `<div class="key-image"><img src="icon/${img}.png" width="0" height="0" alt=""></div>`
                }
                output += `<div class="text">${this.text}</div>`
                handler.html(output)
            }
        }
        handler.css('display', 'flex')
        if (this.timeout > 0) {
            this.__timeout__handler = setTimeout(() => {
                this.timeoutCalled()
            }, this.timeout)
        }

    }

    hide() {
        $('.interaction').hide(1000)
        setTimeout(() => {
            this.clearHtml()
            this.reset()
        }, 1002)
    }

    reset() {
        this.id = null
        this.key = null
        this.text = null
        this.color = null
        this.position = null
        this.rtl = false
        this.timeout = 0
        this.isMultiple = false
    }

}

const manager = new DrawManager()


alt.on('showSingle', (id, key, text, color = null, position = null, rtl = null, timeout = 0) => {
    manager.setId(id)
    manager.setKey(key)
    manager.setText(text)
    manager.setColor(color)
    manager.setPosition(position)
    manager.setRtl(rtl)
    manager.setTimeout(timeout)
    manager.setMultiple(false)
    manager.show()
})


alt.on('showMultiple', (id, keys, text, color = null, position = null, rtl = null, timeout = 0) => {
    manager.setId(id)
    manager.setKey(keys)
    manager.setText(text)
    manager.setColor(color)
    manager.setPosition(position)
    manager.setRtl(rtl)
    manager.setTimeout(timeout)
    manager.setMultiple(true)
    manager.show()
})

alt.on('singleCliced', () => {
    manager.targetClicked()
})

alt.on('hide', () => {
    manager.hide()
})
