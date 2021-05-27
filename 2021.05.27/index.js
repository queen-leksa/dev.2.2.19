const express = require("express");
const parser = require("body-parser").json();
const app = express();

app.use(express.urlencoded(true)); // Чтобы получать req.body (методом post)
app.use(parser);
app.use(express.static("./public"));
app.use("/", require("./server/router"));
app.use("/api", require("./api/api"));

app.set("view engine", "pug"); // Указываем какой шаблонизатор используем
app.set("views", "./server/templates"); // Указываем путь к папке с шаблонами

app.listen(5009);


/*
    Препроцессоры
    .ejs
    .pug (jade)
    .hbs (handlebars)

    js => html
    ul.menu
        li
            a Ссылка
    => <ul class="menu"><li><a>Ссылка</a></li></ul>
*/