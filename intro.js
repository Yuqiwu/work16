var addItem = function(e){
    var ol = document.getElementById('thelist');
    var li = document.createElement("li");
    var children = ol.children.length
    li.appendChild( document.createTextNode("item " + children) );
    ol.appendChild(li);
}

var b = document.getElementById('b');

