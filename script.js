let inputList = document.querySelectorAll("#ranks input");

let deger = [];

function selectedCheck(x) {
  let inputID = x.getAttribute("id");

  for (let input of inputList) {
    if (input.getAttribute("id") == inputID) {
      let label = input.nextElementSibling;
      var labelValue = label.textContent;
      deger.push(labelValue);
    }
  }
}

function showRate() {
  if (deger.length == 0) {
    alert("Please make your rating :)");
  } else {
    document.getElementById("rateShowCard").classList.remove("d-none");
    document.getElementById("rateCard").classList.add("d-none");
    document.getElementById("rate").innerHTML = `<span>You Selected ${
      deger[deger.length - 1]
    } out of 5</span>`;
  }
}
