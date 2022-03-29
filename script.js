
const panels = document.querySelectorAll('.panel');

panels.forEach(function(currentPanel) {
    currentPanel.addEventListener('click', function() {
        removeActiveClasses();
        currentPanel.classList.add('active');
    });
});

// Removing the other active classes
function removeActiveClasses(){
    panels.forEach(function(panel){
        panel.classList.remove('active');
    })
}