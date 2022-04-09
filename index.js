function addingEventListener() {

    //beware of local scope here
    function clickAlert() {
    alert('I was clicked!');
    }

const input = document.getElementById('input');
//input.addEventListener('click', function() {
//   alert('I was clicked!');
// });

input.addEventListener('click', clickAlert);
}

//call this function with () that's invoking

//get all elements with the class "classdesh"

const divs = document.querySelectorAll(".classdesh")
//console.log(divs)

//takes the elements in divs and returns them as items for the function
divs.forEach(function(item){
   // console.log(item)
   item.addEventListener('click', function() { 
       console.log(item.textContent + " was clicked. <br>")
    }, true)
})

