document.addEventListener('DOMContentLoaded', function() {
    const menuBox = document.querySelector('.menuBox');
    const midNavBox = document.querySelector('.midNavBox');
    
    // Toggle the menu on small screens
    menuBox.addEventListener('click', function() {
        if (midNavBox.style.display === 'flex') {
            midNavBox.style.display = 'none';
        } else {
            midNavBox.style.display = 'flex';
        }
    });
});