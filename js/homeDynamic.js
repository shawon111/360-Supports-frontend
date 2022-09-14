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
    if (data.length) {
        const findTitle = data.find(item => item.section === sectionName);
        titleElement.innerHTML = `<h2>${findTitle.title}</h2>`
    }
}

fetch('https://support-api.onrender.com/titles')
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
        if (data.length) {
            agentNumber.innerText = `${data[0].number}`;
            agentContactTitle.innerText = `${data[0].title}`;
        }
    })

// homepage end

console.log("homeDynamic js operation completed successfully")