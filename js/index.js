function getCurrentYear () {
    return  new Date().getFullYear()
}

function setCurrentYearToFooter () {
    const footerDomEl = document.querySelector('#currentYear');
    const currentYear = getCurrentYear();

    footerDomEl.textContent = currentYear;
}

function setUpFooter () {
    setCurrentYearToFooter()
}

setUpFooter();