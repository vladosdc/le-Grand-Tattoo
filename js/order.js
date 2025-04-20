// // Получаем элемент, где будет отображаться сообщение об успехе

// // Обработчик отправки формы
// document.querySelector(".form__orders").addEventListener("submit", function (e) {
//   e.preventDefault(); // Останавливаем стандартную отправку формы

//   const form = this;

//   // Собираем данные формы
//   const data = {
//     firstName: form.elements["firstName"].value,
//     lastName: form.elements["lastName"].value,
//     age: form.elements["age(req)"].value,
//     email: form.elements["email"].value,
//     phone: form.elements["phone"].value,
//     instagram: form.elements["instagram"].value,
//     style: form.querySelector('input[name="style"]:checked')?.parentElement.innerText.trim() || "Not selected",
//     size: form.querySelector("select").value,
//     availability: form.querySelector('input[name="availability"]:checked')?.parentElement.innerText.trim() || "Not selected",
//     traveling: form.querySelectorAll("input[type='text']")[2]?.value || "",
//     messageText: form.querySelectorAll("textarea")[1]?.value || "",
//   };

//   // Отправляем данные на сервер
//   axios
//     .post("http://localhost:5500/send-message", data) // Отправляем на локальный сервер
//     .then((res) => {
//     })
//     .catch((err) => {
//       console.warn("Error:", err); // Логируем ошибку
//     })
//     .finally(() => {
//       console.log("Script is finished");
//     });
// });
const TOKEN = "7493192068:AAHIQzVVRhYgThMaf1J76wekAe9731Er6kY";
 const CHAT_ID = "-1002659500080";
 const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
 
 
 const succes = document.querySelector(".succes");
 
 document.querySelector(".form__orders").addEventListener("submit", function (e) {
   e.preventDefault();
 
   const form = this;
 
   const firstName = form.elements["firstName"].value;
   const lastName = form.elements["lastName"].value;
   const age = form.elements["age(req)"].value;
   const email = form.elements["email"].value;
   const phone = form.elements["phone"].value;
   const instagram = form.elements["instagram"].value;
 
   const style = form.querySelector('input[name="style"]:checked')?.parentElement.innerText.trim() || "Not selected";
   const size = form.querySelector("select").value;
 
   const availability = form.querySelector('input[name="availability"]:checked')?.parentElement.innerText.trim() || "Not selected";
 
   const traveling = form.querySelectorAll("input[type='text']")[2]?.value || "";
   const messageText = form.querySelectorAll("textarea")[1]?.value || "";
 
   const message =
     `<b>🖋 New Tattoo Request</b>\n\n` +
     `<b>👤 Name:</b> ${firstName} ${lastName}\n` +
     `<b>📅 Age:</b> ${age}\n` +
     `<b>📧 Email:</b> ${email}\n` +
     `<b>📞 Phone:</b> ${phone}\n` +
     `<b>📸 Instagram:</b> ${instagram}\n` +
     `<b>🎨 Style:</b> ${style}\n` +
     `<b>📏 Size:</b> ${size}\n` +
     `<b>🗓 Availability:</b> ${availability}\n` +
     `<b>✈️ Traveling Info:</b> ${traveling}\n` +
     `<b>📝 Message:</b> ${messageText}`;
 
   axios
     .post(URL_API, {
       chat_id: CHAT_ID,
       text: message,
       parse_mode: "html"
     })
     .then((res) => {
       succes.classList.remove("succes");
     })
     .catch((err) => {
       console.warn(err);
     })
     .finally(() => {
       console.log("script is finished");
     });
 });