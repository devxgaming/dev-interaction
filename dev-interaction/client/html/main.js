if (window.alt == undefined) {
    window.alt = {
        on: () => { },
        emit: () => { }
    }
}
class DrawText {
    constructor(key = null, text = null, color = null, position = null, rtl=false) {
        this.key = key
        this.text = text
        this.color = color
        this.position = position
        this.rtl = rtl
    }


    show() {
        if(this.rtl){
            $('body').attr('dir', 'rtl')
        }else{
            $('body').attr('dir', 'ltr')
        }
        if ($('.interaction').css('display') == 'flex') {
            this.clear()
        }
        $('.interaction').addClass(this.position)
        if (this.color) {
            $('.interaction').addClass(this.color)
        }

        if (this.text.includes('~key~')) {
            let text = this.text.split('~key~')
            if (text.length >= 2) {
                let before = text[0].trim()
                let after = text[1].trim()
                $('.interaction').html(`<div class="text">${before}</div><div class="key-image"><img src="icon/${this.key}.png" width="0" height="0" alt=""></div><div class="text">${after}</div>`)
            }else{
                $('.interaction').html(`<div class="text">${this.text}</div><div class="key-image"><img src="icon/${this.key}.png" width="0" height="0" alt="">`)
            }
        } else {
            $('.interaction').html(`<div class="key-image"><img src="icon/${this.key}.png" width="0" height="0" alt=""></div><div class="text">${this.text}</div>`)
        }
        $('.interaction').css('display', 'flex')
    }

    clear() {
        $('#interaction').html('')
        $('#interaction').removeAttr('class')
        $('#interaction').attr('class', 'interaction')
    }


    hide() {
        $('.interaction').hide(1000)
        setTimeout(() => {
            this.clear()
        }, 1000)
    }
}


alt.on('show', (key, text, color = null, position = 'top-left', rtl=false) => {
    new DrawText(key, text, color, position, rtl).show()
})

alt.on('hide', () => {
    new DrawText().hide()
})

