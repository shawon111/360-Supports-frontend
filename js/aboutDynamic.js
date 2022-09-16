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
    if (data._id) {
        featureTitleOne.innerHTML = `<h3>${data.titleOne}</h3>`;
        featureTitleTwo.innerHTML = `<h3>${data.titleTwo}</h3>`;
        featureTitleThree.innerHTML = `<h3>${data.titleThree}</h3>`;
        featureDescOne.innerHTML = `<p>${data.descOne}</p>`;
        featureDescTwo.innerHTML = `<p>${data.descTwo}</p>`;
        featureDescThree.innerHTML = `<p>${data.descThree}</p>`;
    }
}

fetch('http://localhost:5000/features')
    .then(res => res.json())
    .then(data => {
        handleFeatures(data)
    });

