function updateProgress() {
    var input = document.getElementById('progress-input').value;
    var progressBar = document.getElementById('progress-bar');
    var value = parseInt(input);

    if (isNaN(value) || value < 0 || value > 100) {
        alert('Please enter a valid number between 0 and 100');
        return;
    }

    progressBar.style.width = value + '%';
    progressBar.textContent = value + '%';
}