const burger = document.querySelector("[data-burger]");
const nav = document.querySelector("[data-nav]");

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
});

const form = document.querySelector("#order-form");
const error = form.querySelector("[data-error]");
const success = form.querySelector("[data-success]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const contact = String(data.get("contact") || "").trim();
  const piece = String(data.get("piece") || "").trim();
  const who = String(data.get("who") || "").trim();

  if (!name || !contact || !piece || !who) {
    error.hidden = false;
    success.hidden = true;
    return;
  }

  error.hidden = true;
  success.hidden = false;
  success.textContent = `${name}, запрос на «${piece.toLowerCase()}» собран. Мастер свяжется с вами по контакту ${contact}, чтобы согласовать камни, длину и срок сборки.`;
  form.reset();
});
