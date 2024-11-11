const test = document.querySelector('.test');
test.addEventListener('click', () => {
    window.open("https://github.com/Sovaeva314");
})
const Instagram = document.querySelector('.Instagram');
Instagram.addEventListener('click', () => {
    window.open("https://www.instagram.com/olas_314/");
})
const LinkedIn = document.querySelector('.LinkedIn');
LinkedIn.addEventListener('click', () => {
    window.open("https://www.linkedin.com/feed/")
})

const link1 = document.querySelector('.link1');
link1.addEventListener('click', () => {
    window.open("")
})
const link2 = document.querySelector('.link2');
link2.addEventListener('click', () => {
    window.open("")
})
const link3 = document.querySelector('.link3');
link3.addEventListener('click', () => {
    window.open("")
})
const link4 = document.querySelector('.link4');
link4.addEventListener('click', () => {
    window.open("")
})
const link5 = document.querySelector('.link5');
link5.addEventListener('click', () => {
    window.open("")
})
const link6 = document.querySelector('.link6');
link6.addEventListener('click', () => {
    window.open("")
})

const items = document.querySelectorAll('.item');
// console.log(items);

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
        })
    removeFocus = () => {
        items.forEach(item => {
        item.classList.remove('selected');
        })
    }
    })


    let about = document.querySelector('.about');
    about.addEventListener('click', () => {
        let info = document.querySelector('.pageOne');
        info.scrollIntoView();
    })
    
    let experience = document.querySelector('.projects');
    experience.addEventListener('click', () => {
        let projects = document.querySelector('.projectsLinked');
        projects.scrollIntoView();
    })

    let contact = document.querySelector('.contact');
    contact.addEventListener('click', () => {
        let contactMe = document.querySelector('.pageThree');
        contactMe.scrollIntoView();
    })