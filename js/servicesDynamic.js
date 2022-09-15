// services page start
const serviceOneTitle = document.getElementById('service-one-title');
const serviceTwoTitle = document.getElementById('service-two-title');
const serviceThreeTitle = document.getElementById('service-three-title');
const serviceOneDesc = document.getElementById('service-one-desc');
const serviceTwoDesc = document.getElementById('service-two-desc');
const serviceThreeDesc = document.getElementById('service-three-desc');

fetch('https://support-api.onrender.com/services')
.then(res=> res.json())
.then(data=> {
    if(data._id){
        serviceOneTitle.innerHTML = data.serviceOneTitle;
        serviceTwoTitle.innerHTML = data.serviceTwoTitle;
        serviceThreeTitle.innerHTML = data.serviceThreeTitle;
        serviceOneDesc.innerHTML = data.serviceOnedesc;
        serviceTwoDesc.innerHTML = data.serviceTwoDesc;
        serviceThreeDesc.innerHTML = data.serviceThreedesc;
    }
})