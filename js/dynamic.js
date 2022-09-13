// homepage start

// // banner slider
const sliderOne = document.getElementById('dynamic_slide_one');
const sliderTwo = document.getElementById('dynamic_slide_two');
const sliderThree = document.getElementById('dynamic_slide_three');
const sliderFour = document.getElementById('dynamic_slide_four');
const sliderFive = document.getElementById('dynamic_slide_five');

fetch('http://localhost:5000/slider')
    .then(res => res.json())
    .then(data => {
        if (data.length) {
            sliderOne.innerText = data[0].title;
            sliderTwo.innerText = data[1].title;
            sliderThree.innerText = data[2].title;
            sliderFour.innerText = data[3].title;
            sliderFive.innerText = data[4].title;
        } else {
            return
        }

    });

// // feature
const featureTitleOne = document.getElementById('feature-title-one');
const featureTitleTwo = document.getElementById('feature-title-two');
const featureTitleThree = document.getElementById('feature-title-three');
const featureDescOne = document.getElementById('feature-description-one');
const featureDescTwo = document.getElementById('feature-description-two');
const featureDescThree = document.getElementById('feature-description-three');

const handleFeatures = (data) => {
    if (data.length) {
        featureTitleOne.innerHTML = `<h3>${data[0].title}</h3>`;
        featureTitleTwo.innerHTML = `<h3>${data[1].title}</h3>`;
        featureTitleThree.innerHTML = `<h3>${data[2].title}</h3>`;
        featureDescOne.innerHTML = `<p>${data[0].desc}</p>`;
        featureDescTwo.innerHTML = `<p>${data[1].desc}</p>`;
        featureDescThree.innerHTML = `<p>${data[2].desc}</p>`;
    }
}

fetch('http://localhost:5000/features')
    .then(res => res.json())
    .then(data => {
        handleFeatures(data)
    });

// // what clients say
const reviewOne = document.getElementById('review-one');
const reviewTwo = document.getElementById('review-two');
const reviewThree = document.getElementById('review-three');
const reviewSectionTitle = document.getElementById('review-title');

const handlesectionTitle = (data, titleElement, sectionName) => {
    if (data.length) {
        const findTitle = data.find(item => item.section === sectionName);
        titleElement.innerHTML = `<h2>${findTitle.title}</h2>`
    }
}

fetch('http://localhost:5000/titles')
    .then(res => res.json())
    .then(data => {
        handlesectionTitle(data, reviewSectionTitle, "review")
    })

const handleReview = (data) => {
    if (data.length) {
        reviewOne.innerHTML = `<img src="${data[0].imgUrl}" alt="">
        <h3>${data[0].name}</h3>
        <p>${data[0].review}</p>`;
        reviewTwo.innerHTML = `<img src="${data[1].imgUrl}" alt="">
        <h3>${data[1].name}</h3>
        <p>${data[1].review}</p>`;
        reviewThree.innerHTML = `<img src="${data[2].imgUrl}" alt="">
        <h3>${data[2].name}</h3>
        <p>${data[2].review}</p>`;
    }
}

fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data => {
        handleReview(data)
    })

// // home link section
const agentNumber = document.getElementById('agent-number');
const agentContactTitle = document.getElementById('agent-contact-title');

fetch('http://localhost:5000/contact-agent')
    .then(res => res.json())
    .then(data => {
        if (data.length) {
            agentNumber.innerText = `${data[0].number}`;
            agentContactTitle.innerText = `${data[0].title}`;
        }
    })

// homepage end

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

console.log("hitted",benefitsDesc.innerHTML)

const handleCareerInfo = (data) => {
    if (data._id) {
        console.log("i am here")
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
        console.log("i am complete")
    }
}

fetch('http://localhost:5000/career-info')
    .then(res => res.json())
    .then(data=> {
        // console.log(data)
        handleCareerInfo(data)
    })

// career page end

console.log("Dynamic js operation completed successfully")