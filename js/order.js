// Получаем элемент, где будет отображаться сообщение об успехе

// Обработчик отправки формы
document.querySelector(".form__orders").addEventListener("submit", function (e) {
  e.preventDefault(); // Останавливаем стандартную отправку формы

  const form = this;

  // Собираем данные формы
  const data = {
    firstName: form.elements["firstName"].value,
    lastName: form.elements["lastName"].value,
    age: form.elements["age(req)"].value,
    email: form.elements["email"].value,
    phone: form.elements["phone"].value,
    instagram: form.elements["instagram"].value,
    style: form.querySelector('input[name="style"]:checked')?.parentElement.innerText.trim() || "Not selected",
    size: form.querySelector("select").value,
    availability: form.querySelector('input[name="availability"]:checked')?.parentElement.innerText.trim() || "Not selected",
    traveling: form.querySelectorAll("input[type='text']")[2]?.value || "",
    messageText: form.querySelectorAll("textarea")[1]?.value || "",
  };

  // Отправляем данные на сервер
  axios
    .post("http://localhost:5500/send-message", data) // Отправляем на локальный сервер
    .then((res) => {
    })
    .catch((err) => {
      console.warn("Error:", err); // Логируем ошибку
    })
    .finally(() => {
      console.log("Script is finished");
    });
});
