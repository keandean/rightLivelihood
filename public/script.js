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


// const panels = document.querySelectorAll('.panel')
// const profile = document.querySelectorAll('.profileImg')



// panels.forEach(panel => {
//     panel.addEventListener('mouseover', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
       
//     })
// })
// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }

// t1 = new TimelineMax();
// t1.fromTo(profile, 1, {x:"0%"}, {x: "100%"});

