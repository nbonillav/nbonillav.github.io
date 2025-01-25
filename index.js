function newParagraph(){
    const section__content = document.querySelector('.section__content');
    const new_p = document.createElement('p');
    new_p.setAttribute('class', 'section__more')
    new_p.textContent = 'Also, I know a little bit about JavaScript';

    return section__content.appendChild(new_p);
}

newParagraph();