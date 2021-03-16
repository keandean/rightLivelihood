function toggleMenu(){
    let hidden = document.getElementById('hiddenMenu');
    if (hidden.classList.contains('hiddenClass')) {
        hidden.classList.remove('hiddenClass');
    }
    else {
        hidden.classList.add('hiddenClass');
    }
    // if (hidden.style.display == 'none'){
    //     hidden.style.display = 'block';
    // }else {hidden.style.display = 'none';

    }

// const btnscroll = document.querySelector('#btnscroll');

// btnscroll.addEventListener('click', function (){
//     window.scrollTo(0, 0);
// });
