function makeGrid (x){
    for(let rows = 0; rows < x; rows++){
        for(let col = 0; col < x; col++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');



            grid.addEventListener('mouseover', function changeColor(){
                grid.style.backgroundColor = 'black';
            });


            container.appendChild(grid);
        };       
       };
};


function clearGrid(){
    let e = document.querySelector('#container');
    let child = e.lastElementChild


    while (child){
        e.removeChild(child);
        child = e.lastElementChild;
        }
        }


const container = document.getElementById('container');
const button = document.getElementById('gridNumb');
gridNumb.addEventListener('click', function newGrid(){
   let n = prompt('How many squares?');
   clearGrid();
   makeGrid(n);

   container.setAttribute('style', `grid-template-columns: repeat(${n}, 2fr); grid-template-rows: repeat(${n}, 2fr);`);
   
   
})

window.onload = makeGrid(16);







