const searchButton = document.querySelector(".search-button");
const popup = document.querySelector(".modal");
const form = popup.querySelector("form");
const arrivalDate = popup.querySelector("[name=arrival-date]");
const chekOutDate = popup.querySelector("[name=check-out-date]");
const adults = popup.querySelector("[name=adults]");
const children = popup.querySelector("[name=children]");

searchButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");

    arrivalDate.focus();
});

form.addEventListener("submit", function(evt) {
    if (!arrivalDate.value || !chekOutDate.value || !adults.value || !children.value) {
        evt.preventDefault();
    }
});
