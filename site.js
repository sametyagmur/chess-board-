const gridSquares = Array.from(document.querySelectorAll(".grid div"))

for(let i=0; i<gridSquares.length; i++){
    if(i % 2 === 0){
        gridSquares[i].classList.add("evenNumber")
        
    }else{
        gridSquares[i].classList.add("oddNumber")
        
    }
}   