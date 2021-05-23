window.addEventListener('keyup', (e) => {
   if (e.key == 'o') {
      const el = document.querySelector('#overlay') 
      
      el.style.display = el.style.display == 'none'? 'block' : 'none'
   }   
})