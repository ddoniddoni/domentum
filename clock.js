const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector("h1");

const getTime = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
};

const init = () => {
  getTime();
};

init();
