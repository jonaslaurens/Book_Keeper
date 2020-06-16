module.exports = (el, book) => {
  const { pages } = book;

  let error = true;

  // reset error texts
  for (let i = 0; i <= 2; i++) {
    el[i].nextElementSibling.classList.remove("not-valid");
    el[i].nextElementSibling.innerHTML = "";
  }

  // input fields can't be empty, length -1 because of submit button
  for (let i = 0; i < el.length - 1; i++) {
    if (el[i].value === "") {
      el[i].nextElementSibling.classList.add("not-valid");
      el[i].nextElementSibling.innerHTML = `${el[i].name} can't be empty`;
      error = false;
    }
  }

  // pages should be a number
  if (isNaN(pages)) {
    el[2].nextElementSibling.classList.add("not-valid");
    el[2].nextElementSibling.innerHTML = "Pages should be a Number";
    error = false;
  }

  if (!error) {
    return false;
  }

  return true;
};
