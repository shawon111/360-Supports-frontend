// about page start

// //adout description
const aboutTitle = document.getElementById('about-title');
const aboutDesc = document.getElementById('about-desc');
const aboutAuthor = document.getElementById('about-author');

const handleAboutDescription = (data) => {
    if(data._id){
        aboutTitle.innerText = data.aboutTitle;
        aboutDesc.innerHTML = data.aboutDesc;
        aboutAuthor.innerText = data.aboutAuthor;
    }
}

fetch('https://support-api.onrender.com/about')
.then(res=> res.json())
.then(data=> {
    handleAboutDescription(data);
})


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

