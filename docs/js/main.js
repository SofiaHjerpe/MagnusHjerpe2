console.log ("this is working");
let mo= document.getElementById("menutjo");
let dropmenu=  document.getElementById("droptjo");
let galle= document.getElementById("menugalleri");
let dropg=  document.getElementById("dropgalleri");
let ommi= document.getElementById('menuommig');
let dropo= document.getElementById('dropommig');
let kont= document.getElementById('menukontakt');
let dropk= document.getElementById('dropkontakt');
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
//galle.onmouseover=function(){ 
  //  dropg.style.display='block'
//}
 
//galle.onmouseout=function(){
  //  dropg.style.display='none'
//}

