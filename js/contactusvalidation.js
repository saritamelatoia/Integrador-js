const inputQuestion = document.querySelector(".input-question");
const inputEmail = document.querySelector(".input-email");



const validateEmptyField = (e) => {
    const field = e.target
    const fieldValue = e.target.value;
    if (!fieldValue.length){
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Empty field";
    }
    else{
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    };
};

const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
      setErrors("Please enter a valid email", field);
    } else {
      setErrors("", field, false);
    }
  }

const init = () => {
inputQuestion.addEventListener("blur", validateEmptyField);
inputEmail.addEventListener("blur", validateEmptyField);
emailField.addEventListener("input", validateEmailFormat);
}
init();
