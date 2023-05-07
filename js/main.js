'use strict';

{
    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');

    menuItems.forEach(clickedItem　=> {
        clickedItem.addEventListener('click', e => {
            e.preventDefault();

            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            })

            clickedItem.classList.add('active');

            contents.forEach(content => {
                content.classList.remove("active");
            })
            document.getElementById(clickedItem.dataset.id).classList.add('active');
        });
    });

}