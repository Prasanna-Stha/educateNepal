function changeText() {
    var moreText = document.getElementById('more-text');
    var button = document.getElementById('changeTextBtn');

    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        button.textContent = "Read less";
    } else {
        moreText.classList.add('hidden');
        button.textContent = "Read more";
    }
}