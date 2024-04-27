const form = document.getElementById("sentiment-form");

form.onsubmit = (e) => {
  let rank = document.querySelector('input[name="sentiment"]:checked').value;
  let notes = document.getElementById("sentiment-notes").value;

  localStorage.setItem("sentiment-rank", rank);
  localStorage.setItem("sentiment-notes", notes);
};
