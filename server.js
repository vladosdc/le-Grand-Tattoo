// const express = require("express");
// const axios = require("axios");
// const cors = require("cors"); // Подключаем CORS для разрешения запросов
// require("dotenv").config();

// const app = express();
// const PORT = 5500;

// // Включаем CORS
// app.use(cors());

// // Для парсинга JSON
// app.use(express.json());

// // Считываем данные из переменных окружения
// const TOKEN = process.env.TOKEN; // Telegram API token
// const CHAT_ID = process.env.CHAT_ID; // ID чата
// const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// // Обрабатываем POST-запрос на отправку данных
// app.post("/send-message", async (req, res) => {
//   const data = req.body;
//   console.log("Received data:", data); // Логируем полученные данные

//   const message =
//     `<b>🖋 New Tattoo Request</b>\n\n` +
//     `<b>👤 Name:</b> ${data.firstName} ${data.lastName}\n` +
//     `<b>📅 Age:</b> ${data.age}\n` +
//     `<b>📧 Email:</b> ${data.email}\n` +
//     `<b>📞 Phone:</b> ${data.phone}\n` +
//     `<b>📸 Instagram:</b> ${data.instagram}\n` +
//     `<b>🎨 Style:</b> ${data.style}\n` +
//     `<b>📏 Size:</b> ${data.size}\n` +
//     `<b>🗓 Availability:</b> ${data.availability}\n` +
//     `<b>✈️ Traveling Info:</b> ${data.traveling}\n` +
//     `<b>📝 Message:</b> ${data.messageText}`;

//   try {
//     console.log("Sending message to Telegram..."); // Логируем начало отправки
//     const response = await axios.post(URL_API, {
//       chat_id: CHAT_ID,
//       text: message,
//       parse_mode: "html",
//     });
//     console.log("Telegram response:", response.data); // Логируем успешный ответ
//     res.status(200).json({ ok: true });
//   } catch (err) {
//     console.error("Error sending message to Telegram:", err.response?.data || err.message); // Логируем ошибку
//     res.status(500).json({ ok: false, error: err.message });
//   }
// });

// // Запускаем сервер
// app.listen(PORT, () => {
//   console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
// });
