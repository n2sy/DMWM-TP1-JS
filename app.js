const inputIntitule = document.getElementById('intitule');
const inputMontant = document.getElementById('montant');
const btnAdd = document.getElementById('btn-add');
const btnEffacer = document.getElementById('btn-erase');
const liste = document.getElementById('list-dep');
const totalDep = document.getElementById('total-dep');
const inputFilter = document.getElementById('filter');

let total = 0;

btnAdd.addEventListener('click', () => {
    console.log(inputIntitule.value, inputMontant.value);
    const newLi = document.createElement('li');
    newLi.classList.add('list-group-item')
    newLi.textContent = `${inputIntitule.value} : ${inputMontant.value} $`;
    liste.appendChild(newLi);
    total += +inputMontant.value;
    totalDep.textContent = `${total} $`;
    effacer();
})

function effacer() {
    inputIntitule.value = '';
    inputMontant.value = '';
}

btnEffacer.addEventListener('click', effacer);

inputFilter.addEventListener('input', (e) => {
    //console.log(inputFilter.value);
    //console.log(liste);
    for (const element of liste.children) {
        console.log(element);
        //let subStr = element.textContent.split(" ");
        //console.log(subStr[2]);
        let montants = element.textContent.match(/\d+/);
        console.log(montants);

        if(inputFilter.value < Number(montants[0])) {
            element.classList.add('list-group-item-danger');
        } 
        else
            element.classList.remove('list-group-item-danger');

        
    }
})