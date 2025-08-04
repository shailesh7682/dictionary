const button = document.querySelector(".form_btn");
const input = document.querySelector(".form input");
const contentWrapper = document.querySelector('.content');
const result = contentWrapper.querySelector('.result');
const loader = contentWrapper.querySelector('.loader');

if (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let content = input.value;
    console.log(content);
    if(content != '') {
        if(loader) {
            loader.classList.remove('hidden');
        }

        if(result) {
            result.classList.add('hidden');
        }
        handleClick(content);       
    } else {
        result.innerHTML = `<span class="error" style="color:red;">Enter some queries!!</span>`
    }    
  });
}

function handleClick(content) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${content}`)
    .then((res) => res.json())
    .then((data) => {
        let meanings = data[0].meanings;
        let definitionsHTML = '';
        meanings.forEach((meaning) => {
            let definition = meaning.definitions[0].definition;
            definitionsHTML += `<p>${definition}</p>`
        })

        loader.classList.add('hidden');
        result.classList.remove('hidden');
        result.innerHTML = definitionsHTML
    })
    .catch((error) =>{
        loader.classList.add('hidden');
        result.classList.remove('hidden');
        result.innerHTML = `<span class="error" style="color:red;">No definitions found!!</span>`
    })
}
