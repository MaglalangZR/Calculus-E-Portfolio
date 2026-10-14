function openTab(evt, tabName) {
    let contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }
    let buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function openModal(src) {
    let modal = document.getElementById("imgModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}