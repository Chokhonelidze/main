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
          "type": name
      };
    query(q,values,build);
}
    

function build(data,values){
    let value = values.type;
    if(data?.getRating) {
        console.log("here");
    }
    else{
       let obj = document.getElementById('rating');
       obj.innerHTML = `
       <div class="container">
        <div class="smileybox">
            <label for="r1" class="check"><input type="checkbox" value="${value}" id="r1" onchange="ratingStar(event)"/><i class="em em-weary"></i></label>
            <label for="r2" class="check"><input type="checkbox" value="${value}"  id="r2" onchange="ratingStar(event)"/><i class="em em-worried"></i></label>
            <label for="r3" class="check"><input type="checkbox" value="${value}"  id="r3" onchange="ratingStar(event)"/><i class="em em-blush"></i></label>
            <label for="r4" class="check"><input type="checkbox" value="${value}"  id="r4" onchange="ratingStar(event)"/><i class="em em-smiley"></i></label>
            <label for="r5" class="check"><input type="checkbox" value="${value}"  id="r5" onchange="ratingStar(event)"/><i class="em em-sunglasses"></i></label>
        </div>
        </div>
       `;
    }
}


export {getRating};