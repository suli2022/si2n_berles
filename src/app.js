
const ownerRadio = document.querySelector('#owner');
const renterRadio = document.querySelector('#renter');
const cusRenterRadio = document.querySelector('#cusRenter');
const subCusRenterRadio = document.querySelector('#subCusRenter');

ownerRadio.addEventListener('click', () => {
    console.log('Az eladó egy tulajdonos');
    cusRenterRadio.checked = true;
});
renterRadio.addEventListener('click', () => {
    console.log('Az eladó eleve bérlő');
    subCusRenterRadio.checked = true;
});
