document.querySelectorAll(".section").forEach((section, index) => {
  section.addEventListener("mouseover", function () {
    // Clear any existing transition timeouts to avoid abrupt changes
    clearTimeout(window.gradientTimeout);

    const colors = [
      "#ff6363",
      "#ffa74f",
      "#ffff60",
      "#72ff72",
      "#5555ff",
      "#5c2980",
      "#a63ad4",
    ];
    const hoveredColor = colors[index];
    let gradientStart = colors[Math.max(0, index - 1)];
    let gradientEnd = colors[Math.min(colors.length - 1, index + 1)];
    const previousColor = index > 0 ? colors[index - 1] : colors[0];

    const steps = 20; // Number of steps for interpolation
    const interval = 50; // Interval in milliseconds
    let step = 0;
    const gradientTransition = setInterval(() => {
      const gradientColor = interpolateColor(
        gradientStart,
        gradientEnd,
        step / steps,
      );
      const gradientColor1 = interpolateColor(
        hoveredColor,
        previousColor,
        step / steps,
      );
      const hovered = interpolateColor(
        hoveredColor,
        hoveredColor,
        step / steps,
      );
      document.body.style.background = `linear-gradient(to right, ${gradientColor1}25%, ${hovered}, ${gradientColor}75%)`;
      step++;
      if (step >= steps) {
        clearInterval(gradientTransition);
      }
    }, interval);
    updateEmoji(hoveredColor);
  });

  section.addEventListener("mouseout", function () {
    resetEmoji();
  });
});

function interpolateColor(startColor, endColor, ratio) {
  const r = Math.ceil(
    parseInt(startColor.substring(1, 3), 16) * (1 - ratio) +
      parseInt(endColor.substring(1, 3), 16) * ratio,
  );
  const g = Math.ceil(
    parseInt(startColor.substring(3, 5), 16) * (1 - ratio) +
      parseInt(endColor.substring(3, 5), 16) * ratio,
  );
  const b = Math.ceil(
    parseInt(startColor.substring(5, 7), 16) * (1 - ratio) +
      parseInt(endColor.substring(5, 7), 16) * ratio,
  );
  return `rgb(${r},${g},${b})`;
}

function updateEmoji(color) {
  const emojiMap = {
    "#ff6363": "😡", // Very upset
    "#ffa74f": "😠", // Upset
    "#ffff60": "😐", // Neutral
    "#72ff72": "😊", // Happy
    "#5555ff": "😄", // Very happy
    "#5c2980": "😍", // Ecstatic
    "#a63ad4": "🥳", // Overjoyed
  };
  document.getElementById("emoji").textContent = emojiMap[color] || "😐";
}

function resetEmoji() {
  document.getElementById("emoji").textContent = "😐";
  document.body.style.background =
    "linear-gradient(90deg, rgba(255,98,98,1) 12%, rgba(245,158,89,1) 24%, rgba(255,250,110,1) 36%, rgba(110,255,100,1) 50%, rgba(101,181,236,1) 64%, rgba(99,87,255,1) 76%, rgba(151,62,255,1) 88%)";
}
