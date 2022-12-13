let mainServies = document.querySelectorAll(".mainServices .sv")
let insideServise = document.querySelectorAll(".insideServise .sv")
// console.log(servies.childNodes)

for(let i = 0 ; i < mainServies.length ; i++){
    console.log(mainServies[i])
    mainServies[i].addEventListener("click", () => {
        console.log(insideServise[i])
        for(let j = 0 ; j < insideServise.length ; j++){
            if (j == i){
                insideServise[j].removeAttribute("hidden");
            }
            else{
                insideServise[j].setAttribute("hidden", "hidden");
            }
        }
    })
}


const upButtom = document.querySelector('.up')

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

const rows = document.querySelectorAll('.container')

window.onscroll = function (){
    console.log(this.scrollY)
    if (this.scrollY >= 700){
        upButtom.classList.add('show')
    }
    else{
        upButtom.classList.remove('show')
    }
    if(this.scrollY >= 2450)
    {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
        
                // Lower inc to slow and higher to slow
                const inc = target / speed;
        
                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter
                    counter.innerText = Math.ceil(count + inc);
                    // Call function every ms
                    setTimeout(updateCount, 2);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
    if(this.scrollY >= 600)
    {
        rows.forEach((row) => {
            row.classList.add('show')
        })
    }
}

upButtom.onclick = function () {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

