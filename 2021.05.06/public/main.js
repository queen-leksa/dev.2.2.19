const openPopup = txt => {
    let popup = document.createElement("div");
    popup.className = "popup";
    let cross = document.createElement("div");
    cross.className = "close";
    cross.innerText = "✖";
    let box = document.createElement("div");
    box.innerText = txt;
    popup.append(cross, box);
    document.body.appendChild(popup);

    cross.addEventListener("click", e => {
        popup.remove();
    });
}