document.addEventListener('keydown',function(event){
    if(event.ctrlkey||event.metakey){
        if(event.key === 'b' || event.key === 'B'){
            bold();
        }
    }
});