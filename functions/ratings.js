import {query} from "./queries.js";
async function getRating(name) {
    const q = `
    query GetRating($input: inputRating) {
        getRating(input: $input) {
          id
          ip
          type
          rating
        }
    }`;
    const values = {
        "input": {
          "type": "arduino_lights"
        }
      };
    query(q,values,build);
}
    

function build(data){
    if(data?.getRating) {
        console.log("here");
    }
    else{
       let obj = document.getElementById('rating');
       obj.innerHTML = `
       <div class="container">
        <div class="smileybox">
            <label for="r1" class="check"><input type="checkbox" id="r1" onchange="ratingStar(event)"/><i class="em em-weary"></i></label>
            <label for="r2" class="check"><input type="checkbox" id="r2" onchange="ratingStar(event)"/><i class="em em-worried"></i></label>
            <label for="r3" class="check"><input type="checkbox" id="r3" onchange="ratingStar(event)"/><i class="em em-blush"></i></label>
            <label for="r4" class="check"><input type="checkbox" id="r4" onchange="ratingStar(event)"/><i class="em em-smiley"></i></label>
            <label for="r5" class="check"><input type="checkbox" id="r5" onchange="ratingStar(event)"/><i class="em em-sunglasses"></i></label>
        </div>
        </div>
       `;
    }
}

function ratingStar(event){
    var checkValue = document.querySelectorAll("input");
    var checkStar = document.querySelectorAll("label");
    var checkSmiley = document.querySelectorAll("i");
    var checkCount = 0;
    for(var i=0; i<checkValue.length; i++){
        if(checkValue[i]==event.target){
            checkCount = i+1;
        }
    }
    for(var j=0; j<checkCount; j++){
        checkValue[j].checked = true;
        checkStar[j].className = "rated";
        checkSmiley[j].style.display = "none";
    }
    
    for(var k=checkCount; k<checkValue.length; k++){
        checkValue[k].checked = false;
        checkStar[k].className = "check"
        checkSmiley[k].style.display = "none";	
    }
    if(checkCount == 1){
        document.querySelectorAll("i")[0].style.display = "block";
    }
    if(checkCount == 2){
        document.querySelectorAll("i")[1].style.display = "block";
    }
    if(checkCount == 3){
        document.querySelectorAll("i")[2].style.display = "block";
    }
    if(checkCount == 4){
        document.querySelectorAll("i")[3].style.display = "block";
    }
    if(checkCount == 5){
          document.querySelectorAll("i")[4].style.display = "block";
    }
}
export {getRating,ratingStar};