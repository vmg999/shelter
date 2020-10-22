// ---------------------modal window-------------------------------
let learnmore=document.querySelectorAll(".card-btn"),
    overlay=document.querySelectorAll(".overlay"),
    closebutton=document.querySelectorAll(".close-button");

let modal=document.querySelectorAll(".modal-window"),
    modal_img=document.querySelector('.mpi-img'),
    modal_h3=document.getElementById('modal-h3'),
    modal_h4=document.getElementById('modal-h4'),
    mpt_text=document.querySelector('.mpt-text'),
    li_age=document.getElementById('age'),
    li_inoc=document.getElementById('inoc'),
    li_dis=document.getElementById('diseas'),
    li_parasites=document.getElementById('parasites');


learnmore.forEach((n)=>n.addEventListener('click', openModal));
closebutton.forEach((n)=>n.addEventListener('click', closeModal));
overlay.forEach((n)=>n.addEventListener('click', closeModal));

function openModal(e){
    modal[0].classList.add("active-modal");
    overlay[0].classList.add("active-overlay");

    name=e.path[1].children[1].innerHTML;
    i=getInd(name);

    modal_img.src=pets[i].img;
    modal_h3.innerHTML=name;
    modal_h4.innerHTML=pets[i].type+" - "+pets[i].breed;
    mpt_text.innerHTML=pets[i].description;
    li_age.innerHTML=pets[i].age;
    li_inoc.innerHTML=pets[i].inoculations.join(", ");
    li_dis.innerHTML=pets[i].diseases.join(", ");
    li_parasites.innerHTML=pets[i].parasites.join(", ");
}

function closeModal(e){
    modal[0].classList.remove("active-modal");
    overlay[0].classList.remove("active-overlay");
}

function getInd(name){
    for(i=0;i<pets.length;i++){
        if(pets[i].name===name){return i;}
    }
}