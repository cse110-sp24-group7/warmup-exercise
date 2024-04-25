document.querySelectorAll('.section').forEach((section, index) => {
    section.addEventListener('mouseover', function () {
        if (!window.locked) { // Only change on hover if not locked
            updateBackgroundAndEmoji(index);
        }
    });

    section.addEventListener('mouseout', function () {
        if (!window.locked) { // Only reset if not locked
            resetEmoji();
        }
    });

    section.addEventListener('click', function () {
        // Always lock to the new index when clicked on any section
        window.locked = true;
        window.lockedIndex = index;
        updateBackgroundAndEmoji(index);
    });
});

// Listen for clicks outside the rectangle to unlock
document.addEventListener('click', function (event) {
    if (!event.target.closest('.section') && !event.target.closest('fieldset')) { // If the click is not inside a section
        if (window.locked) {
            window.locked = false;
            window.lockedIndex = -1;
            resetEmoji();
        }
    }
});

function updateBackgroundAndEmoji(index) {
    const colors = ['#ff6363', '#ffa74f', '#ffff60', '#72ff72', '#5555ff', '#5c2980', '#a63ad4'];
    const hoveredColor = colors[index];
    let gradientStart = colors[Math.max(0, index - 1)];
    let gradientEnd = colors[Math.min(colors.length - 1, index + 1)];

    document.body.style.background = `linear-gradient(to right, ${gradientStart}, ${hoveredColor}, ${gradientEnd})`;
    updateEmoji(hoveredColor);
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
    document.body.style.background = 'linear-gradient(90deg, rgba(255,98,98,1) 12%, rgba(245,158,89,1) 24%, rgba(255,250,110,1) 36%, rgba(110,255,100,1) 50%, rgba(101,181,236,1) 64%, rgba(99,87,255,1) 76%, rgba(151,62,255,1) 88%)';
}

const form = document.getElementById('sentiment-form');

document.getElementById('submitBtn').addEventListener('click', function() {
    // Check if an emotion is locked
    if (window.locked && window.lockedIndex !== -1) {
        // Get the user's sentiment note from the textarea
        const sentimentNotes = document.getElementById('sentiment-notes').value;

        // Store the values in localStorage
        localStorage.setItem('sentiment-rank', window.lockedIndex + 1);
        localStorage.setItem('sentiment-notes', sentimentNotes);

        // Optionally, confirm to the user that the data has been saved
        alert('Your sentiment and notes have been saved.');
    } else {
        // Alert the user that no emotion has been selected, if needed
        alert('Please select an emotion before submitting.');
    }
});