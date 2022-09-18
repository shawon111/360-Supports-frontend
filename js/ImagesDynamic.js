// logo
const siteLogo = document.getElementById('site-logo')
fetch('https://support-api.onrender.com/images')
    .then(res => res.json())
    .then(data => {
        if (data._id) {
            siteLogo.src = `https://support-api.onrender.com/${data.logo}`
        }
    })