let cont = 0; 

function clicou(){         
    
    cont++;       
    
   if(cont == 1){

   let menu = document.querySelector("#barra");                

   menu.classList.add("fa-x");              
   
   let menu2 = document.querySelector(".menu2");            

   menu2.classList.add("active");     

   }else{

   cont = 0;            
   
   let menu = document.querySelector("#barra");                

   menu.classList.remove("fa-x");        
   
   let menu2 = document.querySelector(".menu2");            

   menu2.classList.remove("active");        

   }
       

}      

function recolher(){   

let menu2 = document.querySelector(".menu2");            

menu2.classList.remove("active");        

let menu = document.querySelector("#barra");                

menu.classList.remove("fa-x");   

cont = 0;     
 
}

