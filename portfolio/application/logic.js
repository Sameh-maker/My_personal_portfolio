const DomeSelectors = {
    // Menu Icon
    menuIcon: document.querySelector('.menu-icon'),
    sideBar: document.querySelector('.side-bar'),
    // Light/Dark Mode
    modeIcon: document.querySelector('.mode-icon'),
    homesction: document.querySelector('.home-section'),
    // Admin
    projectNameInput: document.querySelector('.admin-add-project-title-input'),
    projectDescribtionInput: document.querySelector('.admin-add-project-describtion-input'),
    projectUrlInput: document.querySelector('.admin-add-project-url-input'),
    projectImgInput: document.querySelector('.admin-add-project-file-input'),
    insertProjectBtn: document.querySelector('.insert-project-btn'),
    projects: document.querySelector('.projects'),
    // Statistics
    projectCards: document.querySelectorAll('.project-card'),
    skills: document.querySelectorAll('.skill-card'),
    projectsBuildStats: document.querySelector('.projects-number'),
    techLearnedStats: document.querySelector('.tech-number'),
    // Contact
    nameInput: document.querySelector('.nameInput'),
    emailInput: document.querySelector('.emailInput'),
    contentInput: document.querySelector('.contact-textarea'),
    completedMessage: document.querySelector('.completed-message')
}


// Side Bar Apperance with Menu Icon Logic:

// Open and Close Side Bar
DomeSelectors.menuIcon.addEventListener('click', OpenSideBar)
function OpenSideBar() {
    DomeSelectors.sideBar.classList.toggle('show');
    DomeSelectors.sideBar.classList.toggle('animation')
}


// Light/Dark Mode Logic:

// Change Modes
DomeSelectors.modeIcon.addEventListener('click', changeMode)
function changeMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme) {
        document.documentElement.removeAttribute('data-theme');
        DomeSelectors.modeIcon.textContent = '🌙'
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        DomeSelectors.modeIcon.textContent = '☀️'
    }
    DomeSelectors.homesction.classList.toggle('home-section-Dm')
}


// Admin
const AdminIcon = document.querySelector('.settings-icon');
const password = 'Admin123';
const AdminPage = document.querySelector('.admin-section')
const closeBtnInAdmin = document.querySelector('.admin-close-btn')
// pass key
AdminIcon.addEventListener('click', () => {
    let message;
    do {
        message = prompt('please enter your password');

    } while (message !== password)

    AdminPage.classList.add('show')

})

// close adminpage
closeBtnInAdmin.addEventListener('click', () => {
    AdminPage.classList.remove('show')
})



// NOT FINISHED (second feature creating new project)
// DomeSelectors.insertProjectBtn.addEventListener('click', () => {
//     // requirments
//     let wordsStore = [];

//     // project name logic
//     let projectName = DomeSelectors.projectNameInput.value
//     if (projectName.trim() === '') return;
//     let title = projectName.split(' ')
//     for (let word of title) {
//         wordsStore.push(word.charAt(0).toUpperCase() + word.slice(1))
//     }

//     // project details
//     let projectDetails = DomeSelectors.projectDescribtionInput.value
//     if (projectDetails.trim() === '') return;
//     let details = projectDetails.charAt(0).toUpperCase() + projectDetails.slice(1)


// })


// Statistics
const ArrayOfProjects = Array.from(DomeSelectors.projectCards);

// Number of projects Built
function ProjectsBuilt() {
    DomeSelectors.projectsBuildStats.textContent = ArrayOfProjects.length;
}
ProjectsBuilt()

//  Number of Technologies learned
function TechLearned() {
    DomeSelectors.techLearnedStats.textContent = DomeSelectors.skills.length
}
TechLearned()



// Contact
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (DomeSelectors.nameInput.value === '' && DomeSelectors.emailInput.value === '' && DomeSelectors.contentInput.value === '') return;
    emailjs.sendForm('service_bjoln5c', 'template_z96k0bn', this).then(() => DomeSelectors.completedMessage.classList.add('show'))
        .catch((err) => alert('Failed to send: ' + err.text));
    DomeSelectors.nameInput.value = ''
    DomeSelectors.emailInput.value = ''
    DomeSelectors.contentInput.value = ''

    setTimeout(() => {
        DomeSelectors.completedMessage.classList.remove('show')
    }, 8000)
});


