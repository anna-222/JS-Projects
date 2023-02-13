const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const modal = document.getElementById("modal");

setWaterPercentage();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightCups(idx);
    // setWaterPercentage();
  });
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx >= idx2) {
      cup.classList.add("full");
    } else if (idx < idx2) {
      cup.classList.remove("full");
    }
  });

  setWaterPercentage();
  showModal();
}

function setWaterPercentage() {
  const totalCups = smallCups.length;
  const fullSmallCup = document.getElementsByClassName("full").length;
  console.log(fullSmallCup);

  if (fullSmallCup === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullSmallCup / totalCups) * 300}px `;
    percentage.innerText = `${(fullSmallCup / totalCups) * 100}%`;
  }

  if (fullSmallCup === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
  }
}

function showModal() {
  if (percentage.innerText === "100%") {
    setTimeout(() => {
      console.log("ffffff");
      modal.classList.add("show");
    }, 2000);
  }
}

modal.addEventListener("click", () => {
  modal.classList.remove("show");
  smallCups.forEach((cup) => {
    cup.classList.remove("full");
    percentage.style.height = "0px";
    percentage.innerText = "";
  });
});
