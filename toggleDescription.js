function toggleDescription() {
    const description = document.getElementById('ptp-description');
    if (description.style.display === 'none') {
        description.style.display = 'flex'; // or 'block' to create a horizontal bar
    } else {
        description.style.display = 'none';
    }
}
