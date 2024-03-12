
const addProduct = () => {
    const idInput = document.getElementById('stroge-name');
    const idInputValue = idInput.value;
    idInput.value = '';
    const valueInput = document.getElementById('stroge-value');
    const inputValue = valueInput.value;
    valueInput.value = '';
    if(idInputValue && inputValue ){
        localStorage.setItem(idInputValue,inputValue)
    }
    
}