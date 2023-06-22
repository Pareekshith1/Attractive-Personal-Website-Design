function downloadResume() {
    var element = document.createElement('a');
    element.setAttribute('href', './resume/pareekshithdataentry.pdf');
    element.setAttribute('download', 'pareekshithdataentry.pdf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


function downloadedResume() {
    var element = document.createElement('a');
    element.setAttribute('href', './resume/pareekshithwebdevelopment.pdf');
    element.setAttribute('download', 'pareekshithwebdevelopment.pdf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}



