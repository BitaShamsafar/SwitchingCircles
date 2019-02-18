var num=document.getElementsByClassName('crcl').length;
for(var i=0;i<num;i++){
   document.getElementsByClassName('crcl')[i].addEventListener('click',function(evt){
       if('active'== evt.target.attributes.getNamedItem('id').value){
           alert('You Should click on circles around ')
           return false;
       }
     var activeId=evt.target.attributes.getNamedItem("id").value;
     evt.target.attributes.removeNamedItem('id').value;
     document.getElementById('active').setAttribute('id', activeId);  
      evt.target.setAttribute('id' , 'active')
   })
}
