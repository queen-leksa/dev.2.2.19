const express = require("express");
const parser = require("body-parser").json();
const app = express();

app.use(express.urlencoded(true)); // Чтобы получать req.body (методом post)
app.use(parser);
app.use(express.static("./public"));
app.use("/", require("./server/router"));

app.listen(5004);


/*
API - application programm interface
Взаимодействие с данными (Получение информации по запросу от БД)

Server - получает запрос и отдает ответ
*/