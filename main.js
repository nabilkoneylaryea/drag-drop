//ELEMENTS
const filler = document.querySelector('.filler');
const gridItems = document.querySelectorAll('.grid-item');

//FUNCTIONS
function mouseEnter1(){
    this.classList.add('hover-1');
}
function mouseLeave1(){
    this.classList.remove('hover-1');
}
function mouseEnter2(){
    this.classList.add('transition');
    this.classList.add('hover-2');
}
function mouseLeave2(){
    this.classList.add('transition');
    this.classList.remove('hover-2');
}
function dragStart(){
    this.classList.add('hold');
    // WILL NOT WORK BC CREATES INVISIBLE IMAGE TO BE DRAGGED
    // this.classList.add('invisible');
    setTimeout(() => this.classList.add('invisible'), 0);
}
function dragEnd(){
    // console.log('Hello: ' + this.className);
    // this.classList.remove('hold');
    this.classList.add('hover-2');
    this.classList.remove('invisible');
}
function dragDrop(e){
    // console.log('drop: ' + e.target.id);
    this.className = 'grid-item';
    this.append(filler);
    // console.log(document.body);
}
function dragOver(e){
    e.preventDefault();
    // console.log('dragover');
}
function dragEnter(){
    // console.log('enter');
    this.classList.add('hover-1');
}
function dragLeave(){
    // console.log('dragleave');
    this.classList.remove('hover-1');
}

// ACTION
filler.addEventListener('dragstart', dragStart);
filler.addEventListener('dragend', dragEnd);
filler.addEventListener('mouseenter', mouseEnter2);
filler.addEventListener('mouseleave', mouseLeave2);


for(item of gridItems){
    item.addEventListener('mouseenter', mouseEnter1);
    item.addEventListener('mouseleave', mouseLeave1);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
}