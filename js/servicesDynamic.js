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

// //service icons

const iconOne = document.getElementById('icon-one');
const iconTwo = document.getElementById('icon-two');
const iconThree = document.getElementById('icon-three');

fetch('https://support-api.onrender.com/service-icons')
.then(res=> res.json())
.then(data=> {
    const processClassList = (list) => {
        const listArray = list.split(",");
        return listArray;
    }
    if(data._id){
        iconOne.classList.add(processClassList(data.serviceOneIcon)[0], processClassList(data.serviceOneIcon)[1]);
        iconTwo.classList.add(processClassList(data.serviceTwoIcon)[0], processClassList(data.serviceTwoIcon)[1]);
        iconThree.classList.add(processClassList(data.serviceThreeIcon)[0], processClassList(data.serviceThreeIcon)[1]);
        // console.log(processClassList(data.serviceOneIcon))
    }
})