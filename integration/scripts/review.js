let rank = parseInt(localStorage.getItem("sentiment-rank"));
document.addEventListener("DOMContentLoaded", () => {
	const reviewContainers = document.querySelectorAll(".review-container");

	reviewContainers.forEach((container) => {
		const score = rank;
		const stars = container.querySelectorAll(".star");

		// Loop through each star and color it yellow if it's less than or equal to the score
		stars.forEach((star, index) => {
			if (index < score) {
				star.classList.add("yellow");
			}
		});
	});

	// Animate on button press and generate random comments
	const loadReviewsBtn = document.getElementById("loadReviewsBtn");
	const reviewsWrapper = document.querySelector(".reviews-wrapper");
	const names = [
		"Emma",
		"Liam",
		"Ava",
		"Noah",
		"Isabella",
		"Oliver",
		"Sophia",
		"Elijah",
		"Mia",
		"Lucas",
		"Amelia",
		"Mason",
		"Harper",
		"Logan",
		"Evelyn",
		"Ethan",
		"Abigail",
		"Aiden",
		"Ella",
		"James",
		"Scarlett",
		"Alexander",
		"Grace",
		"Benjamin",
		"Chloe",
	];
	const comments = [
		[], // index 0, no comments since scale starts at 1
		[
			// 1 star
			"It's one of those days where I just need to take a deep breath and remind myself that tomorrow is a new day.",
			"Feeling lost in the storm today, hoping for a calm tomorrow.",
			"The world feels heavy right now. Looking for the strength to carry on.",
			"It's okay not to be okay. Today was a testament to that.",
			"Dark clouds hovered all day. Waiting for them to clear.",
		],
		[
			// 2 stars
			"I faced many challenges today and it took a toll, but I haven't lost hope.",
			"Today was a test of my patience and resilience. I'm doing my best.",
			"The shadows lingered longer today, but I know there's light out there.",
			"Some days are tougher than others, and today was one of them.",
			"Struggling a bit today, but I'm hanging on for better days.",
		],
		[
			// 3 stars
			"Today had its ups and downs, but I made it through.",
			"I found a few moments of joy in an otherwise ordinary day.",
			"Some days are just neutral, and that's perfectly fine.",
			"I had some rough patches today, but there were some smooth roads too.",
			"Today was a mix of grey skies and small sunrays.",
		],
		[
			// 4 stars
			"Today was balanced; not perfect, but steady and true.",
			"I felt a solid sense of accomplishment today.",
			"Nothing extraordinary, but today was a good day.",
			"Stable and serene, today was a quiet success.",
			"Today I found contentment in the simple things.",
		],
		[
			// 5 stars
			"I felt a real sense of progress today, and it feels good.",
			"Today was one of those really solid, satisfying days.",
			"The day was full of pleasant surprises that made me smile.",
			"I'm proud of what I achieved today!",
			"Today left me feeling fulfilled and happy.",
		],
		[
			// 6 stars
			"What a productive day! I ticked almost everything off my list.",
			"Today was nearly perfect, I feel very accomplished.",
			"Good vibes were all around me today!",
			"I feel great about today, so much positive energy.",
			"So many reasons to be thankful for today.",
		],
		[
			// 7 stars
			"Absolutely amazing day! I couldn’t have asked for more.",
			"Overflowing with happiness today, everything was perfect!",
			"Today was a dream come true in so many ways.",
			"Full of joy and gratitude for an incredible day.",
			"I’m on top of the world! Today was simply phenomenal.",
		],
	];

	// Get random comment based on score
	function getRandomComment(score) {
		const possibleComments = comments[score];
		return possibleComments[
			Math.floor(Math.random() * possibleComments.length)
		];
	}

	// Shuffle name array to get random, non-duplicate list of names.
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]]; // Swap elements
		}
	}

	// Display event, can be listening to some other event
	loadReviewsBtn.addEventListener("click", () => {
		// Shuffle names and comments
		shuffleArray(names);

		const reviewContainers =
			reviewsWrapper.querySelectorAll(".review-container");
		// Loop through each review container and set a random comment based on its score
		reviewContainers.forEach((container, index) => {
			// Assign random name
			if (index < names.length) {
				const nameSpan = container.querySelector(".reviewer-name");
				nameSpan.textContent = names[index];
			}
			// Assign comment based on score
			const score = parseInt(container.getAttribute("emotion-score"), 10);
			container.querySelector(".review-text").textContent =
				getRandomComment(
					parseInt(localStorage.getItem("sentiment-rank"))
				);
		});

		reviewsWrapper.classList.add("reviews-visible");
	});
});
