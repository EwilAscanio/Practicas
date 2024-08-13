const registerUser = document.querySelector('.registerUser')
const registerPassword = document.querySelector('.registerPassword')
const btnRegister = document.querySelector('.register')

const inputUser = document.querySelector('.userName')
const inputPassword = document.querySelector('.password')
const btnLogin = document.querySelector('.login')

const p = document.querySelector('p')

const tbody = document.querySelector('tbody')


//let users = [];
let bdUsers;
let table

bdUsers = JSON.parse(localStorage.getItem('bdUsers')) || [];

if(bdUsers){
    bdUsers.forEach(e=>{
        table = `
            <tr>
                <td>${e.name}</td>
                <td>${e.password}</td>
            </tr>
        `
        tbody.insertAdjacentHTML('beforeend', table)
    
    })
    
}
// else{
//      let users =[]
// }

function createUser(){
    bdUsers.push({
        name: registerUser.value,
        password: registerPassword.value
    })
    console.log(bdUsers);

    localStorage.setItem('bdUsers', JSON.stringify(bdUsers))

    window.location.href = 'index.html'
}

btnRegister.addEventListener('click', ()=>{
    createUser()
})



function validarDatos(datos) {
    return datos.name === inputUser.value;
}

btnLogin.addEventListener('click', ()=>{

    const user = bdUsers.find(validarDatos)

    if(user){
        if(user.password == inputPassword.value){
            p.textContent = `Bienvenido ${user.name}!!`
            console.log(user);
        }else{
            alert('password invalid');
            console.log('password invalid');
        }
    }else{
        alert('User not found');
        console.log('User no found');
    }
})

