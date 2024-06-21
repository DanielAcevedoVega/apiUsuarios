import { allUserInformation } from "./components/user.js";

let users = [];

export const getAllUser = async()=>{
    let res = await fetch('https://6674179975872d0e0a950e53.mockapi.io/user');
    let data = await res.json();
    return data;
}

let main__users = document.querySelector('.main__users');
let  search = document.querySelector('#input__search'); 

addEventListener("DOMContentLoaded", async e =>{
    if(!localStorage.getItem('getAllUser')){
        users = await getAllUser();
        localStorage.setItem('getAllUser', JSON.stringify(users));
    } else {
        users = JSON.parse(localStorage.getItem('getAllUser'));
    }

    main__users.innerHTML = await allUserInformation(users);
    searchUser();

})

const removeDiacritics = (user) => {
    return user.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const searchUser = async ()=>{
    search.addEventListener("input", e =>{
        let inputText = removeDiacritics(e.target.value.toUpperCase().trim());
        
        inputText = inputText.replace(/[0-9]/g, '');
        inputText = inputText.replace(/[^a-zA-Z0-9\s]/g, '');
    
        const filterSearch =  users.filter(value => 
            removeDiacritics(value.name_full.toUpperCase()).includes(inputText) ||
            removeDiacritics(value.description.toUpperCase()).includes(inputText)
        );
        main__users.innerHTML = allUserInformation(filterSearch);
    })
}