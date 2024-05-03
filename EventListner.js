document.addEventListener('keydown', function(event) {
    var ctrlKey = event.ctrlKey || event.metaKey;
    if (ctrlKey && event.key === 'b') {
        bold();
    } else if (ctrlKey && event.key === 'i') {
        italics();
    } else if (ctrlKey && event.key === 'u') {
        underline();}});
