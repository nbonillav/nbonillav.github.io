function newParagraph(){
    const section__content = document.querySelector('.section__content');
    const new_p = document.createElement('p');
    new_p.setAttribute('class', 'section__more')
    new_p.textContent = "Also, I'm proficient in HTML5, CSS3, and JavaScript";

    return section__content.appendChild(new_p);
}

newParagraph();