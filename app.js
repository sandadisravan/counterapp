let add = document.querySelector(".a");
let sub = document.querySelector(".c");
let reset = document.querySelector(".b");
let int = document.querySelector("#num");
let count = 0;
add.addEventListener('click',function(){
  count -= 1;
  int.innerHTML = count;
});
sub.addEventListener('click',function(){
  count += 1;
  int.innerHTML = count;
});
reset.addEventListener('click',function(){
  count = 0;
  int.innerHTML = count;
});
