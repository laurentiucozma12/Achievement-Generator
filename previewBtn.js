const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

function prev() {
  const inTitle = document.getElementById("inTitle").value;
  const inDescription = document.getElementById("inDescription").value;
  const inReward = document.getElementById("inReward").value;

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const reward = document.getElementById("reward");

  title.innerHTML = "Title: " + inTitle;
  description.innerHTML = inDescription;
  if (inReward !== "") {
    reward.innerHTML = "Reward: " + inReward;
  }
}

function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
}
