// Seafoam green & light blue : #C4DFE6, #66A5AD 
// Mauve, dusty rose, & soft blue-gray : #962E2A, #E3867D, #CEE6F2


document.addEventListener('DOMContentLoaded', () => {
    let mn = document.querySelector('#m-nav');
    let mnstyle = window.getComputedStyle(mn)
    let links = document.querySelector('#ul1');
    let home = document.querySelector('#h0');
    let about = document.querySelector('#a0');
    let skill = document.querySelector('#s0');
    let project = document.querySelector('#p0')
    let contact = document.querySelector('#c0');
    let loc = document.querySelector("#loc");
    let loc_style = window.getComputedStyle(loc)

    // console.log(mnstyle.display)


    mn.addEventListener('click', () => {
        if (links.style.display === 'none') {
            links.style.display = 'flex';
        } 
        else {
            links.style.display = 'none';
        }
    });

    loc.addEventListener('click', () => {
        if (links.style.display === 'flex') {
            links.style.display = 'none';
        } 
        // else {
        //     links.style.display = 'flex';
        // }
    });


    // console.log(mnstyle.display === 'flex')
    if (mnstyle.display === 'flex') {
        home.addEventListener('click', () => {
            if (links.style.display === 'flex') {
                links.style.display = 'none';
            } else {
                links.style.display = 'none';
            }
        });
        about.addEventListener('click', () => {
            if (links.parentElement.style.display === 'flex') {
                links.parentElement.style.display = 'none';
            } else {
                links.style.display = 'none';
            }
        });
        skill.addEventListener('click', () => {
            if (links.parentElement.style.display === 'flex') {
                links.parentElement.style.display = 'none';
            } else {
                links.style.display = 'none';
            }
        });
        project.addEventListener('click', () => {
            if (links.parentElement.style.display === 'flex') {
                links.parentElement.style.display = 'none';
            } else {
                links.style.display = 'none';
            }
        });
        contact.addEventListener('click', () => {
            if (links.parentElement.style.display === 'flex') {
                links.parentElement.style.display = 'none';
            } else {
                links.style.display = 'none';
            }
        });
    }


});


