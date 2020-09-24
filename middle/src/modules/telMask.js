const telMask = () => {
    function setCursorPosition(pos, elem) {

        elem.focus();

        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);

        else if (elem.createTextRange) {

            const range = elem.createTextRange();

            range.collapse(true);

            range.moveEnd("character", pos);

            range.moveStart("character", pos);

            range.select();

        }

    }


    function mask() {

        const matrix = "+_ (___) ___ ____",

            def = matrix.replace(/\D/g, "");

        let    i = 0,

            val = this.value.replace(/\D/g, "");

        if (def.length >= val.length) val = def;

        this.value = matrix.replace(/./g, a =>
            (/[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a));

        setCursorPosition(this.value.length, this);
    }


    const input = document.querySelector("#phone");

    input.addEventListener("input", mask, false);

};

export default telMask;
