const wrapper = document.querySelector('.wrapper')
const h = document.querySelector('#name')

h.innerHTML = prompt('Напиши свое имя')

function check() {
    if (document.forms[0].elements[0].checked == true && document.forms[0].elements[1].checked == true && document.forms[0].elements[2].checked == true) {
        if (!wrapper.classList.contains('throb')) {
            wrapper.classList.add('throb')
        }
        return
    }
    if (wrapper.classList.contains('throb')) {
        wrapper.classList.remove('throb')
    }
}

async function handleName()  {
    try {
        await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({name}),
            headers: {'Content-Type': 'application/json'}
        })
    } catch (e) {
        console.log(e)
    }
}