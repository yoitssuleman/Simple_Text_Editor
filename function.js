function save(){
    var TextToSave = document.getElementById("TextArea").value;
    var blob = new Blob([TextToSave],{type:'text/plain'});
    var a = document.createElement('a');
    a.download = 'text_file'
    a.href = window.URL.createObjectURL(blob);
    a.click();
}
function bold(){
   var textArea =  document.getElementById('TextArea');
   if (textArea.style.fontWeight === "bold"){
    textArea.style.fontWeight = "normal";
   }
   else{
    textArea.style.fontWeight = "bold";
   }
}
function italics(){
    var textArea =  document.getElementById('TextArea');
    if (textArea.style.fontStyle === "italic"){
     textArea.style.fontStyle = "normal";
    }
    else{
     textArea.style.fontStyle = "italic";
    }
 }
 function underline(){
    var textArea =  document.getElementById('TextArea');
    if (textArea.style.textDecoration === "underline"){
     textArea.style.textDecoration = "none";
    }
    else{
     textArea.style.textDecoration = "underline";
    }
 }
 function erase(){
    var textArea =  document.getElementById('TextArea');
    textArea.value = ""
 }