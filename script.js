const button = document.querySelector(".form_btn");
const input = document.querySelector(".form input");
const contentWrapper = document.querySelector('.content');

if (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let content = input.value;
    console.log(content);
    if(content != '') {
        handleClick(content);       
    } else {
        console.log('error')
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
            console.log(definition)
            definitionsHTML += `<p>${definition}</p>`
        })

        contentWrapper.innerHTML = definitionsHTML
    })
    .catch((error) =>{
        console.log(error)
    })
}
