var arr = new Array();

function add(event){
    console.log(event)
    var name = prompt("Enter the leader name");
    var marks = prompt("Enter the leader marks");
    var para = document.createElement("li");
    para.id = name+"id";
    arr.push({name , marks});
    para.innerHTML += '<span>'+name +'</span> <span style = \" margin-left : 2% ; margin-right : 2% \">'+marks+'</span>'
    var increment = document.createElement("BUTTON");
    increment.innerHTML = "Increment"
    increment.id = name;
    increment.className = 'button'
    increment.setAttribute("onclick" , "increment(event)")
    var decrement = document.createElement("BUTTON");
    decrement.innerHTML = "decrement"
    decrement.id = name;
    decrement.className = 'button'
    decrement.setAttribute("onclick" , "decrement(event)")
    para.appendChild(increment)
    para.appendChild(decrement)
    document.getElementById("add").appendChild(para)
    disp(name)
}

function increment(event){
    
    var id = event.target.id;
    var marks=0;
    var i=0;
    for(i=0 ; i < arr.length ; i++){
        if(id===arr[i].name){
           marks=arr[i].marks;
           marks++;
           arr[i].marks=parseInt(marks);
        }
    }
    var change = document.getElementById(id+"id")
    change.id = id+'id';
    marks=parseInt(marks);
    change.innerHTML = id+' '+marks
    var decrement = document.createElement("BUTTON");
    decrement.innerHTML = "decrement"
    decrement.id = id;
    decrement.setAttribute("onclick" , "decrement(event)")
    decrement.setAttribute("onclick" , "decrement(event)")
    var increment = document.createElement("BUTTON");
    increment.innerHTML = "Increment"
    increment.id = id;
    increment.setAttribute("onclick" , "increment(event)")
    change.appendChild(increment)
    change.appendChild(decrement)
    disp()
}


function decrement(name){
    console.log(name)
    var id = event.target.id;
    var marks=0;
    var i=0;
    for(i=0 ; i < arr.length ; i++){
        if(id===arr[i].name){
           marks=arr[i].marks;
           marks--;
           arr[i].marks=parseInt(marks);
        }
    }
    var change = document.getElementById(id+"id")
    change.id = id+'id';
    marks=parseInt(marks);
    change.innerHTML = id+' '+marks
    var decrement = document.createElement("BUTTON");
    decrement.innerHTML = "decrement"
    decrement.id = id;
    decrement.setAttribute("onclick" , "decrement(event)")
    var increment = document.createElement("BUTTON");
    increment.innerHTML = "Increment"
    increment.id = id;
    increment.setAttribute("onclick" , "increment(event)")
    change.appendChild(increment)
    change.appendChild(decrement)
    disp(id)
}

function disp (name){
    arr.sort((a, b) => {return a.marks -b.marks} );
    document.getElementById('add').innerHTML = '';
    for(var j = arr.length-1 ; j>=0 ; j--){
        var para = document.createElement("li");
        para.id = arr[j].name+"id";
        para.innerHTML += arr[j].name+ ' ' + arr[j].marks;
        var increment = document.createElement("BUTTON");
        increment.innerHTML = "Increment"
        increment.id = arr[j].name;
        increment.setAttribute("onclick" , "increment(event)")
        var decrement = document.createElement("BUTTON");
        decrement.innerHTML = "decrement"
        decrement.id = arr[j].name;
        decrement.setAttribute("onclick" , "decrement(event)")
        para.appendChild(increment)
        para.appendChild(decrement)
        document.getElementById("add").appendChild(para)
    }
}