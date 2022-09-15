const contactTitle = document.getElementById('contact-title');
const optionOneTitle = document.getElementById('option-one-title');
const optionTwoTitle = document.getElementById('option-two-title');
const optionThreeTitle = document.getElementById('option-three-title');
const optionFourTitle = document.getElementById('option-four-title');
const optionOneDesc = document.getElementById('option-one-desc');
const optionTwoDesc = document.getElementById('option-two-desc');
const optionThreeDesc = document.getElementById('option-three-desc');
const optionFourDesc = document.getElementById('option-four-desc');

fetch('https://support-api.onrender.com/contact')
.then(res=> res.json())
.then(data=> {
    if(data._id){
        contactTitle.innerHTML = data.contactTitle;
        optionOneTitle.innerText = data.optionOneTitle;
        optionTwoTitle.innerText = data.optionTwoTitle;
        optionThreeTitle.innerText = data.optionThreeTitle;
        optionFourTitle.innerText = data.optionFourTitle;
        optionOneDesc.innerHTML = data.optionOnedesc;
        optionTwoDesc.innerHTML = data.optionTwoDesc;
        optionThreeDesc.innerHTML = data.optionThreedesc;
        optionFourDesc.innerHTML = data.optionFourdesc;
    }
})