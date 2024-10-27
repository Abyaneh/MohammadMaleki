function toggleDescription() {
    const description = document.getElementById('ptp-description');
    if (description.style.display === 'none') {
        description.style.display = 'flex'; // یا 'block' برای ایجاد نوار افقی
    } else {
        description.style.display = 'none';
    }
}
