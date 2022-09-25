let progress = document.getElementById('progressBar')

let timer = setInterval(function() {
    let pourcentage = parseInt(progress.getAttribute('data-progress').replace('%', ''));
    pourcentage +=2
    progress.setAttribute('data-progress', pourcentage + '%')
    document.documentElement.style.setProperty('--progress', pourcentage + '%')
    if (pourcentage >= 100)
        clearInterval(timer)
}, 100)