// logo
const siteLogo = document.getElementById('site-logo')
fetch('http://localhost:5000/images')
    .then(res => res.json())
    .then(data => {
        if (data._id) {
            siteLogo.src = data.logo
        }
    })