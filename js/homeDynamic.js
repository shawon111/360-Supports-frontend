// homepage start

// // banner slider
const sliderOne = document.getElementById('dynamic_slide_one');
const sliderTwo = document.getElementById('dynamic_slide_two');
const sliderThree = document.getElementById('dynamic_slide_three');
const sliderFour = document.getElementById('dynamic_slide_four');
const sliderFive = document.getElementById('dynamic_slide_five');

fetch('https://support-api.onrender.com/slider')
    .then(res => res.json())
    .then(data => {
        if (data._id) {
            sliderOne.innerHTML = data.titleOne;
            sliderTwo.innerHTML = data.titleTwo;
            sliderThree.innerHTML = data.titleThree;
            sliderFour.innerHTML = data.titleFour;
            sliderFive.innerHTML = data.titleFive;
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
    if (data._id) {
        featureTitleOne.innerHTML = `<h3>${data.titleOne}</h3>`;
        featureTitleTwo.innerHTML = `<h3>${data.titleTwo}</h3>`;
        featureTitleThree.innerHTML = `<h3>${data.titleThree}</h3>`;
        featureDescOne.innerHTML = `<p>${data.descOne}</p>`;
        featureDescTwo.innerHTML = `<p>${data.descTwo}</p>`;
        featureDescThree.innerHTML = `<p>${data.descThree}</p>`;
    }
}

fetch('https://support-api.onrender.com/features')
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
    if (data._id) {
        titleElement.innerHTML = `<h2>${data.title}</h2>`
    }
}

fetch('https://support-api.onrender.com/titles')
    .then(res => res.json())
    .then(data => {
        handlesectionTitle(data, reviewSectionTitle, "review")
    })

const handleReview = (data) => {
    if (data._id) {
        reviewOne.innerHTML = `<img src="https://support-api.onrender.com/${data.imgUrlOne}" alt="">
        <h3>${data.nameOne}</h3>
        <p>${data.reviewOne}</p>`;
        reviewTwo.innerHTML = `<img src="https://support-api.onrender.com/${data.imgUrlTwo}" alt="">
        <h3>${data.nameTwo}</h3>
        <p>${data.reviewTwo}</p>`;
        reviewThree.innerHTML = `<img src="https://support-api.onrender.com/${data.imgUrlThree}" alt="">
        <h3>${data.nameThree}</h3>
        <p>${data.reviewThree}</p>`;
    }
}

fetch('https://support-api.onrender.com/review')
    .then(res => res.json())
    .then(data => {
        handleReview(data)
    })

// // home link section
const agentNumber = document.getElementById('agent-number');
const agentContactTitle = document.getElementById('agent-contact-title');

fetch('https://support-api.onrender.com/contact-agent')
    .then(res => res.json())
    .then(data => {
        if (data._id) {
            agentNumber.innerText = `${data.number}`;
            agentContactTitle.innerText = `${data.title}`;
        }
    })

// // social links
const facebook = document.getElementById('facebook-link');
const linkedIn = document.getElementById('linkedin-link');
fetch('https://support-api.onrender.com/social-links')
    .then(res => res.json())
    .then(data=> {
        if(data._id){
            facebook.href = data.facebook;
            linkedIn.href = data.linkedin;
        }
    })
// homepage end
