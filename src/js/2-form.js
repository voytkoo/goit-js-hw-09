const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');

// Читання даних з локального сховища
function loadFormData() {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    Object.assign(formData, JSON.parse(storedData));
    updateForm();
  }
}

// Збереження даних у локальному сховищі
function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Оновлення полів форми з об'єкта formData
function updateForm() {
  form.email.value = formData.email;
  form.message.value = formData.message;
}

// Обробник події введення даних у форму
function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  saveFormData();
}

// Обробник події відправки форми
function onSubmit(event) {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Please fill in all fields');
    return;
  }

  console.log(formData);

  // Очистка локального сховища та форми
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

// Додавання обробників подій
form.addEventListener('input', handleInput);
form.addEventListener('submit', onSubmit);

// Завантаження даних з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadFormData);

