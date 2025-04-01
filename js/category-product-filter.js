const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const minValueDisplay = document.getElementById("min-value");
const maxValueDisplay = document.getElementById("max-value");
const rangeTrack = document.querySelector(".range-track");

const colorCircles = document.querySelectorAll(".color-circle");

const sizeTrack = document.querySelectorAll(".size-track");

function openNav() {
    document.getElementById("filter-menu").style.height = "895px";
    document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.querySelector("body").style.overflow = "hidden";
    document.getElementById("filter-menu").style.transition = "0.5s";
    document.getElementById("filter-menu").style.scrollBehavior = "smooth";
    document.getElementById("filter-menu").style.overflowY = "scroll";
    document.getElementById("filter-menu").style.overflowX = "hidden";
  }
  
  function closeNav() {
      document.getElementById("filter-menu").style.height = "0";
      document.querySelector("body").style.backgroundColor = "#FFF";
      document.querySelector("body").style.overflow = "auto";
}
  
function updateRange() {
  let minVal = parseInt(minPrice.value);
  let maxVal = parseInt(maxPrice.value);

  if (minVal > maxVal - 50) {
    minPrice.value = maxVal - 50;
    minVal = Math.max(0, maxVal - 50);
  }
  
  if (maxVal < minVal + 50) {
    maxPrice.value = minVal + 50;
    maxVal = Math.max(0, minVal + 50);
  }

  minValueDisplay.textContent = `$${minVal}`;
  maxValueDisplay.textContent = `$${maxVal}`;

  let minPercent = (minVal / 1000) * 100;
  let maxPercent = (maxVal / 1000) * 100;

  rangeTrack.style.left = minPercent + "%";
  rangeTrack.style.width = (maxPercent - minPercent) + "%";

}

minPrice.addEventListener("input", updateRange);
maxPrice.addEventListener("input", updateRange);

updateRange();


colorCircles.forEach(circle => { 
    circle.addEventListener("click", () => { 
        colorCircles.forEach(c => c.classList.remove("selected"))
        circle.classList.add("selected")
    })
})

sizeTrack.forEach(size => {
    size.addEventListener("click", () => { 
        sizeTrack.forEach(s => s.classList.remove("selected-size"))
        size.classList.add("selected-size")
    })
})


