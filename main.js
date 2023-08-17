window.onload = () =>{
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(()=>{
        transition_el.classList.remove('is-active');
    },500);

    for(let i=0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e=>{
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;

            }, 500);
        })
    }
}

window.sr = ScrollReveal({reset: true});

sr.reveal('.titulo', {duration: 3000});

sr.reveal('.area', {duration: 3000});

sr.reveal('.boxfoto', {
    distance: '100px',
    origin: 'bottom',
    duration: 2000,
})

sr.reveal('.boxfoto1', {
    easing: 'ease-in-out',
    duration: 2500,
})

sr.reveal('.textoResumo', {
    easing: 'ease-in-out',
    duration: 3000,
})

sr.reveal('.container_botoes', {duration:3000});


sr.reveal('.gpfotos1', {
    distance: '100px',
    origin: 'bottom',
    duration: 2500,
});

sr.reveal('.resumoH', {
    duration:2500,
    distance: '100px',
    origin: 'bottom',
    });
sr.reveal('.spnTrn1', {
    duration: 900,
    easing: 'ease-in-out',
});