let form = document.getElementById('form')
let input = document.createElement('input')
input.innerHTML = `a`
form.appendChild(input)









/*let data = document.querySelector('p#data')
let label = document.createElement('label')
let input = document.createElement('input')
data.innerHTML += ``
function TextVerify(text){
    var regex = /^[a-zA-Z\s]*$/
    if (regex.test(text)){
        return true 
    } else{
        return false
    }
}


function clicked(){
    var name = document.getElementById('iname').value;
    if (name.length == 0 || TextVerify(name) == false){
        alert('[ERROR] Write your name')
    } else{
        label.id = "iage"
        label.innerHTML = `Age: `
        input.id = "iage"
        data.appendChild(label)
        data.appendChild(input)
        var age = document.querySelector('input#iage').value

        return age
        }
} */