
//creates a close btn
var myNodeList = document.getElementsByTagName("LI");
var i;
for(i = 0; i < myNodeList.length; i++){
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span)
}

//click on close btn to hid current list item
var close = document.getElementsByClassName('close');
var i;
for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

//add a check symbol when clciking on list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

//create a new list item when clicking on add btn
function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert('Need to input item in order to add to list');
    } else{
        document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}