export const allUserInformation = (res)=>{
    let user = res
    let plantilla = "";
    user.forEach((value)=>{
        plantilla += /*html*/`
    <article class="users__information">
        <div class="information__img">
            <img src="${value.avatar}">
        </div>
        <div class="information__userInfo">
            <h3>${value.name_full}</h3>
            <span>${value.description}</span>
        </div>
    </article>
    <hr class="hr__user">`;
    })
    return plantilla;
}