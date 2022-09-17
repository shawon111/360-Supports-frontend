// career page start

// // career info
const careerTitle = document.getElementById('career-title');
const careerDesc = document.getElementById('career-desc');
const responsibilityTitle = document.getElementById('responsibility-title');
const responsibilityDesc = document.getElementById('responsibility-desc');
const requireTitle = document.getElementById('require-title');
const requireDesc = document.getElementById('require-desc');
const locationTitle = document.getElementById('loction-title');
const locationAddress = document.getElementById('location-address');
const salaryTitle = document.getElementById('salary-title');
const salaryAmount = document.getElementById('salary-amount');
const benefitsTitle = document.getElementById('benefits-title');
const benefitsDesc = document.getElementById('benefits-desc');
const mailUsTitle = document.getElementById('mailus-title');
const mailUsMail = document.getElementById('mailus-mail');
const mailSubjectDesc = document.getElementById('mail-subject-desc');
const mailSubject = document.getElementById('mail-subject');

console.log("hitted", benefitsDesc.innerHTML)

const handleCareerInfo = (data) => {
    if (data._id) {
        careerTitle.innerText = data.pageTitle;
        careerDesc.innerHTML = `<p>${data.pageDesc}</p>`;
        responsibilityTitle.innerText = data.teleMarketResponsobilityTitle;
        responsibilityDesc.innerHTML = data.teleMarketResponsobilities;
        requireTitle.innerText = data.teleMarketrequireTitle;
        requireDesc.innerHTML = data.teleMarketrequirements;
        locationTitle.innerText = data.locationTitle;
        locationAddress.innerText = data.locationAddress;
        salaryTitle.innerText = data.salaryTitle;
        salaryAmount.innerText = data.salaryAmount;
        benefitsTitle.innerText = data.benefitsTitle;
        benefitsDesc.innerHTML = data.benefitsDesc;
        mailUsTitle.innerText = data.emailTitle;
        mailUsMail.innerText = data.emailAddress;
        mailSubjectDesc.innerText = data.mailSubjectTitle;
        mailSubject.innerText = data.mailSubjectDetail;
    }
}

fetch('https://support-api.onrender.com/career-info')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        handleCareerInfo(data)
    })

// // career sidebar

const sidebarCountry = document.getElementById('sidebar-country');
const officeAddTitle = document.getElementById('office-address-title');
const officeAddDesc = document.getElementById('office-address-desc');
const officeHourTitle = document.getElementById('office-hour-title');
const officeHourDesc = document.getElementById('office-hour-desc');
const sidebarPhone = document.getElementById('sidebar-phone');
const sidebarMail = document.getElementById('sidebar-mail');

fetch('https://support-api.onrender.com/career-sidebar')
    .then(res => res.json())
    .then(data => {
        if (data._id) {
            sidebarCountry.innerText = data.sidebarCountryName;
            officeAddTitle.innerText = data.officeAddressTitle;
            officeAddDesc.innerText = data.officeAddressDesc;
            officeHourTitle.innerText = data.officeHoursTitle;
            officeHourDesc.innerHTML = data.officeHoursDesc;
            sidebarPhone.innerHTML = `<span>P :</span> ${data.sidebarPhone}`;
            sidebarMail.innerHTML = `E :</span> ${data.sidebarEmail}`;
        }
    })

// //map
const map = document.getElementById('career-map')
fetch('http://localhost:5000/maps')
    .then(res => res.json())
    .then(data => {
        if (data._id) {
            map.src = data.career;
        }
    })

// //career logo
const careerLogo = document.getElementById('career-logo')
fetch('http://localhost:5000/images')
    .then(res => res.json())
    .then(data => {
        if (data._id) {
            careerLogo.src = data.careerLogo;
        }
    })

// career page end
