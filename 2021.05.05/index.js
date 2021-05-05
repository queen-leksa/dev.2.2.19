const express = require("express");
const app = express();

app.use(express.urlencoded(true)); // Чтобы получать req.body (методом post)
app.use(express.static("./public"));
app.use("/", require("./server/router"));

app.listen(5003);


/*
API - application programm interface
Взаимодействие с данными (Получение информации по запросу от БД)

Server - получает запрос и отдает ответ
*/