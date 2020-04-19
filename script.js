//Global variable
let arr = new Array();
const left = 'left';
const right ='right'

add = () =>{
    const name = prompt("Enter the leader name");
    const marks = prompt("Enter the leader marks");
    
    createLeft(name , marks);
    createRight(name , marks);
    arr.push({name , marks});
    sortDisplay()
}
//Function for updating the left list

createLeft = (name , marks  ) =>{
    const list = createElement(name , marks , left)
    document.getElementById("Left").appendChild(list)
}

createRight = (name , marks , ) => {
    const list = createElement(name , marks, right)
    document.getElementById("Right").appendChild(list)
}

//For creating element
createElement = (name , marks , direction) =>{
    const list =document.createElement("li");
    list.id =name.concat(direction);
    list.innerHTML += '<span>'+name +'</span> <span style = \" margin-left : 2% ; margin-right : 2% \">'+marks+'</span>';
    let increment = document.createElement("BUTTON");
    increment.innerHTML = "Increment"
    increment.id = name;
    increment.className = 'button'
    increment.setAttribute("onclick" , "increment(event)");
    let decrement = document.createElement("BUTTON");
    decrement.innerHTML = "decrement"
    decrement.id = name;
    decrement.className = 'button'
    decrement.setAttribute("onclick" , "decrement(event)");
    list.appendChild(increment);
    list.appendChild(decrement);
    return list;
} 


increment =(event) => {
    const id = event.target.id;
    var marks;
    for(let i=0 ; i < arr.length ; i++){
        if(id===arr[i].name){
           marks=arr[i].marks;
           marks++;
           arr[i].marks=parseInt(marks);
        }
    }
    updateLeft(id , marks);
    updateRight(id , marks);
    sortDisplay();
}

decrement =(event) => {
    const id = event.target.id;
    var marks;
    for(let i=0 ; i < arr.length ; i++){
        if(id===arr[i].name){
           marks=arr[i].marks;
           marks--;
           arr[i].marks=parseInt(marks);
        }
    }
    
    updateLeft(id , marks);
    updateRight(id , marks);
    sortDisplay();
}

updateLeft = (id ,marks) => {
    const change = document.getElementById(id+"left")
    change.id = id+'left';
    change.innerHTML = id+' '+marks
    const decrement = document.createElement("BUTTON");
    decrement.innerHTML = "decrement"
    decrement.id = id;
    decrement.setAttribute("onclick" , "decrement(event)")
    const increment = document.createElement("BUTTON");
    increment.innerHTML = "Increment"
    increment.id = id;
    increment.setAttribute("onclick" , "increment(event)")
    change.appendChild(increment)
    change.appendChild(decrement)
    
}

updateRight = (id , marks) => {
    const change = document.getElementById(id+"right")
    change.id = id+'right';
    marks=parseInt(marks);
    change.innerHTML = id+' '+marks
    const decrement = document.createElement("BUTTON");
    decrement.innerHTML = "decrement"
    decrement.id = id;
    decrement.setAttribute("onclick" , "decrement(event)")
    const increment = document.createElement("BUTTON");
    increment.innerHTML = "Increment"
    increment.id = id;
    increment.setAttribute("onclick" , "increment(event)")
    change.appendChild(increment)
    change.appendChild(decrement)
}





sortDisplay = () => {
    arr.sort((a, b) => {return a.marks -b.marks} );
    document.getElementById('Left').innerHTML = '';
    document.getElementById('Right').innerHTML = '';
    
    for( let j = arr.length-1 ; j>=0 ; j--){
        createLeft(arr[j].name , arr[j].marks);
        createRight(arr[j].name , arr[j].marks)
    }
}