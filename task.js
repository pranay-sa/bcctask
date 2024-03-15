document.querySelector('.btnright').addEventListener('click',function(){
    console.log("CLICKED");
    const consentCheckbox = document.querySelector('input[name="consent"]');
    if (consentCheckbox.checked) {
        let tDate = new Date();
        const tDay = tDate.getDate();
        const tMonth = tDate.getMonth();
        const tYear = tDate.getFullYear();
        document.getElementById('dateFilled').textContent = `Form Filled On ${tDay}-${tMonth}-${tYear}`;
    } else {
        alert("check the consent checkbox");
    }
})
document.getElementById('backh').addEventListener('click',function(){
    document.querySelector('.sidebar').classList.add("hidethis");
    console.log("CLICKED THIS");
})