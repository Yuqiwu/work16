var b = document.getElementById('b');
var thelist = document.getElementById('thelist');
var h = document.getElementById('h');
var list = thelist.getElementsByTagName('li');

var f = document.getElementById('f');
var seclist = document.getElementById('seclist');

var allInOne = function(e){
    var li = document.createElement("li");
    var len = list.length
    li.innerHTML = 'item ' + len;
    li.addEventListener( 'mouseover', changeH);
    li.addEventListener( 'mouseout', resetH);
    li.addEventListener( 'click', delList);
    thelist.appendChild(li);
};

var changeH = function(e){
    h.innerHTML = e.target.innerHTML;
};

var resetH = function(e){
    h.innerHTML = 'Hello World!';
};

var delList = function(e){
    thelist.removeChild(this);
};

var fib = function(nth) {
    if (nth <= 1)
        return 1;
    return fib(nth - 1) + fib(nth - 2);
};

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('mouseover', changeH);
  list[i].addEventListener('mouseout', resetH);
  list[i].addEventListener('click', delList);
};

b.addEventListener('click', allInOne);

var part2 = function(e){
    var li = document.createElement("li");
    var len = seclist.getElementsByTagName('li').length;
    li.innerHTML = fib(len);
    seclist.appendChild(li);
};

f.addEventListener('click', part2);
