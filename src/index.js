import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
// import 'materialize-css/dist/js/materialize.min.js';

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello stranger");
  const elem = document.querySelectorAll(".modal");
  M.Modal.init(elem);
});