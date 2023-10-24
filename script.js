const select = document.querySelector("#select");
const name1 = document.querySelector(".name");
const comments = document.querySelector(".comments");
const link = document.querySelector(".link");
const addBtn = document.querySelector(".addBtn");
const delBtn = document.querySelector(".del_btn");
const card = document.querySelector(".card");
const main_bar = document.querySelector(".main_bar");
const logo = document.querySelector(".logo");
const innerComment = document.querySelector(".comment");

let list = [];
list = JSON.parse(localStorage.getItem("cache"));
let x = list.length;

const addNewCard = () => {
  list.push({
    id: x,
    name: name1.value,
    genre: select.value,
    comment: comments.value,
    link: link.value,
  });
  x++;
  updateItems();
  console.log(list);
};

const cacheItems = () => {
  localStorage.setItem("cache", JSON.stringify(list));
  console.log(localStorage.getItem("cache"));
};

const deleteCard = (key) => {
  list = list.filter((elem) => elem.id !== key);
  console.log(list);
  updateItems();
};

const editComment = (key) => {
  console.log(key);
};

const doneCard = (key) => {};

const clearInputs = () => {
  (link.value = ""),
    (name1.value = ""),
    (comments.value = ""),
    (main_bar.innerHTML = "");
};

const updateItems = () => {
  clearInputs();
  list.forEach((key) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = ` ${
      key.link ? `<img class='card_image' src='${key.link}'> ` : ""
    }
    <div class="left">
            <h2 class='name'>${key.name}</h2>
            <h3>${key.genre}</h3>
          </div>
          <div class="right">
            <p class="comment" onclick="editComment(${key.comment})">
              ${key.comment}
            </p>
          </div>
          
          <button class="done_btn" ></button>
          <button class="in_progress_btn" ></button>
          <button class="del_btn" onclick="deleteCard(${key.id})"></button>`;
    main_bar.append(div);
  });

  cacheItems();
};

updateItems();
addBtn.addEventListener("click", addNewCard);
