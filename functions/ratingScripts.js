import {query} from "./queries.js";
function ratingStar(event) {
  var checkValue = document.querySelectorAll("input");
  var checkStar = document.querySelectorAll("label");
  var checkSmiley = document.querySelectorAll("i");
  var checkCount = 0;
  let obj = event.target.value;
  for (var i = 0; i < checkValue.length; i++) {
    if (checkValue[i] == event.target) {
      checkCount = i + 1;
    }
  }
  for (var j = 0; j < checkCount; j++) {
    checkValue[j].checked = true;
    checkStar[j].className = "rated";
    checkSmiley[j].style.display = "none";
  }

  for (var k = checkCount; k < checkValue.length; k++) {
    checkValue[k].checked = false;
    checkStar[k].className = "check";
    checkSmiley[k].style.display = "none";
  }
  ratingStar;
  if (checkCount == 1) {
    document.querySelectorAll("i")[0].style.display = "block";
    setRating(obj, 1);
  }
  if (checkCount == 2) {
    document.querySelectorAll("i")[1].style.display = "block";
    setRating(obj, 2);
  }
  if (checkCount == 3) {
    document.querySelectorAll("i")[2].style.display = "block";
    setRating(obj, 3);
  }
  if (checkCount == 4) {
    document.querySelectorAll("i")[3].style.display = "block";
    setRating(obj, 4);
  }
  if (checkCount == 5) {
    document.querySelectorAll("i")[4].style.display = "block";
    setRating(obj, 5);
  }
}
window.ratingStar = ratingStar;
async function setRating(name, value) {
  let q = `
     mutation CreateRating($input: createInputRating) {
        createRating(input: $input) {
          id
          ip
          type
          rating
        }
      }
    `;
  let values = {
    input: {
      type: name,
      rating: value,
    },
  };
  query(q,values,()=>{alert("Thank you for vote")});
}
