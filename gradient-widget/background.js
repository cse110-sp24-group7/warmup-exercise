document.querySelectorAll('.section').forEach((section, index) => {
    section.addEventListener('mouseover', function () {
        // Clear any existing transition timeouts to avoid abrupt changes
        clearTimeout(window.gradientTimeout);

        const colors = ['#ff6363', '#ffa74f', '#ffff60', '#72ff72', '#5555ff', '#5c2980', '#a63ad4'];
        const hoveredColor = colors[index];
        let gradientStart = colors[Math.max(0, index - 1)];
        let gradientEnd = colors[Math.min(colors.length - 1, index + 1)];

        document.body.style.background = `linear-gradient(to right, ${gradientStart}, ${hoveredColor}, ${gradientEnd})`;
        updateEmoji(hoveredColor);
    });

    section.addEventListener('mouseout', function () {
        // Set a timeout to gradually revert to the default gradient
        window.gradientTimeout = setTimeout(() => {
            resetGradient();
        });
    });
});

function resetGradient() {
    document.body.style.background = 'linear-gradient(90deg, rgba(255,98,98,1) 12%, rgba(245,158,89,1) 24%, rgba(255,250,110,1) 36%, rgba(110,255,100,1) 50%, rgba(101,181,236,1) 64%, rgba(99,87,255,1) 76%, rgba(151,62,255,1) 88%)';
}

function updateEmoji(color) {
    const emojiMap = {
        '#ff6363': '😡', // Very upset
        '#ffa74f': '😠', // Upset
        '#ffff60': '😐', // Neutral
        '#72ff72': '😊', // Happy
        '#5555ff': '😄', // Very happy
        '#5c2980': '😍', // Ecstatic
        '#a63ad4': '🥳' // Overjoyed
    };
    document.getElementById('emoji').textContent = emojiMap[color] || '😐';
}

function resetEmoji() {
    document.getElementById('emoji').textContent = '😐';
}
