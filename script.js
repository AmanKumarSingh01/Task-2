//Global variable
let arr = new Array();

add = () =>{
    const name = prompt("Enter the leader name");
    const marks = prompt("Enter the leader marks");
    
    createLeft(name , marks);
    createRight(name , marks);
    arr.push({name , marks});
    sortDisplay()
}
//Function for updating the left list component
createLeft = (name , marks  ) =>{
    const left = 'left';
    const list = createElement(name , marks , left)
    document.getElementById("Left").appendChild(list)
}
//Function for updating the left list component
createRight = (name , marks , ) => {
    const right ='right'
    const list = createElement(name , marks, right)
    document.getElementById("Right").appendChild(list)
}

//For creating element
createElement = (name , marks , direction) =>{
    const list =document.createElement("li");
    list.id =name.concat(direction);
    list.innerHTML += '<span>'+name +'</span> <span style = \" margin-left : 2% ; margin-right : 2% \">'+marks+'</span>';
    let increment = document.createElement("BUTTON");
    increment.innerHTML = "&#43;"
    increment.id = name;
    increment.className = 'button'
    increment.setAttribute("onclick" , "increment(event)");
    let decrement = document.createElement("BUTTON");
    decrement.innerHTML = "&#8722;"
    decrement.id = name;
    decrement.className = 'button'
    decrement.setAttribute("onclick" , "decrement(event)");
    list.appendChild(increment);
    list.appendChild(decrement);
    return list;
} 

//The increment function
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

//Decrement Function
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


//Updating the left component after increment/decrement
updateLeft = (id ,marks) => {
    const change = document.getElementById(id+"left")
    change.id = id+'left';
    change.innerHTML += '<span>'+name +'</span> <span style = \" margin-left : 2% ; margin-right : 2% \">'+marks+'</span>';
    const decrement = document.createElement("BUTTON");
    decrement.innerHTML = "&#8722;"
    decrement.id = id;
    decrement.setAttribute("onclick" , "decrement(event)")
    const increment = document.createElement("BUTTON");
    increment.innerHTML = "&#43;"
    increment.id = id;
    increment.setAttribute("onclick" , "increment(event)")
    change.appendChild(increment)
    change.appendChild(decrement)
    
}
//Updating the left component after increment/decrement
updateRight = (id , marks) => {
    const change = document.getElementById(id+"right")
    change.id = id+'right';
    marks=parseInt(marks);
    change.innerHTML += '<span>'+name +'</span> <span style = \" margin-left : 2% ; margin-right : 2% \">'+marks+'</span>';
    const decrement = document.createElement("BUTTON");
    decrement.innerHTML = "&#8722;"
    decrement.id = id;
    decrement.setAttribute("onclick" , "decrement(event)")
    const increment = document.createElement("BUTTON");
    increment.innerHTML = "&#43;"
    increment.id = id;
    increment.setAttribute("onclick" , "increment(event)")
    change.appendChild(increment)
    change.appendChild(decrement)
}


//Sorting the function and displaying
sortDisplay = () => {
    arr.sort((a, b) => {return a.marks -b.marks} );
    document.getElementById('Left').innerHTML = '';
    document.getElementById('Right').innerHTML = '';
    
    for( let j = arr.length-1 ; j>=0 ; j--){
        createLeft(arr[j].name , arr[j].marks);
        createRight(arr[j].name , arr[j].marks)
    }
}