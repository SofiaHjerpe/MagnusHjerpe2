console.log ("this is working");
let mo= document.getElementById("menutjo2");
let dropmenu=  document.getElementById("droptjo2");
let galle= document.getElementById("menugalleri2");
let dropg=  document.getElementById("dropgalleri2");
let ommi= document.getElementById('menuommig2');
let dropo= document.getElementById('dropommig2');
let kont= document.getElementById('menukontakt2');
let dropk= document.getElementById('dropkontakt2');
// dropmeny 1 startsida
mo.onmouseover=function(){ 
    dropmenu.style.display='block'
}
 
mo.onmouseout=function(){
    dropmenu.style.display='none'
}

// 2 galleri
galle.onmouseover=function(){
    dropg.style.display='block'
    
}

galle.onmouseout=function(){
    dropg.style.display='none'
    
}
// 3 om mig

ommi.onmouseover=function(){
    dropo.style.display='block'
    
}

ommi.onmouseout=function(){
  dropo.style.display='none'
    
}

// 4 kontakt

kont.onmouseover=function(){
    dropk.style.display='block'
    
}

kont.onmouseout=function(){
    dropk.style.display='none'
}