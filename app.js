(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".active-btn").forEach((btn) => {
                btn.classList.remove("active-btn");
            })
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    const readMoreBtns = document.querySelectorAll(".read-more-btn")

    for (let i = 0; i < readMoreBtns.length; i++) {
        readMoreBtns[i].addEventListener('click', () => {
            let readMoreSection = document.querySelector(`#read-more-${i}`)
            readMoreSection.classList.toggle('read-more-active')
            readMoreSection.classList.toggle('read-more')
        })
    }
    const collapseBtns = document.querySelectorAll(".read-more div a>button")
    for (let i = 0; i < collapseBtns.length; i++) {
        collapseBtns[i].addEventListener('click', () => {
            let readMoreSection = document.querySelector(`#read-more-${i}`)
            readMoreSection.classList.toggle('read-more-active')
            readMoreSection.classList.toggle('read-more')
        })
    }
    const sendMailBtn = document.querySelector('#sendMail')
    sendMailBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('input')
        for (let i in inputs) {
            if (i < inputs.length - 1) {
                inputs[i].value = '';
            }
        }
        document.querySelectorAll('textarea').value='';
    })
})();
