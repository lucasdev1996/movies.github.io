document.querySelector(".sidebar .toggle-btn").addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("active");
})



//variables
const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.movie');


// preventdefault es para que no recargue la pagina cuando damos enter
for (i = 0; i < btns.length; i++){

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
 
 
    
}

