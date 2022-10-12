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
          "input":{"type": name}
      };
    query(q,values,build);
}
    

function build(data,values){
    let value = values.type;
    if(data?.getRating) {
        let rating = data.getRating.rating;
        let output = '';
        console.log(rating)
        for(let i=1; i<=5 ;i++){
            let id='r'+i;
            if(i <= rating) {
             
                output+= `<label for=${id} class="rated"><input type="checkbox"   id="${id}" /></label>`;
            }
            else{
                output+= `<label for=${id} class="check_disabled"><input type="checkbox"   id="${id}" /></label>`;
            }
        }
       
        let parent = `
        <div class="container">
        <div class="smileybox">
        ${output}
        </div>
        </div>
        `;
        let obj = document.getElementById('rating');
        obj.innerHTML = parent;
          
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