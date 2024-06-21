import { allUserInformation } from "./components/user.js";

export const getAllUser = async()=>{
    let res = await fetch('https://6674179975872d0e0a950e53.mockapi.io/user');
    let data = res.json();
    return data;
}

console.log(getAllUser())

let main__users = document.querySelector('.main__users');

addEventListener("DOMContentLoaded", async e =>{
    if(!localStorage.getItem('getAllUser')){
        let users = await getAllUser();
        localStorage.setItem('getAllUser', JSON.stringify(users));
    }

    main__users.innerHTML = await allUserInformation(JSON.parse(localStorage.getItem('getAllUser')));
})