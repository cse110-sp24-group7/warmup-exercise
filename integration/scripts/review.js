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
			"Feeling defeated today, but tomorrow brings hope.",
			"Navigating through a storm of emotions today, seeking solace.",
			"Today's struggles are tomorrow's strengths.",
			"Dark clouds overshadowed my day, awaiting a ray of light.",
			"Battling inner demons today, holding onto faith for brighter days ahead.",
			"Lost in a sea of despair today, holding onto the promise of a new dawn.",
			"Heavy heart, weary soul, but holding onto hope for a better tomorrow.",
			"Today's tears will water tomorrow's gardens of joy.",
			"Enduring today's pain for tomorrow's peace.",
			"Weathering the storm today, seeking refuge in the promise of tomorrow.",
			"Today's darkness will pave the way for tomorrow's light.",
			"In the depths of despair today, but clinging to the promise of renewal.",
			"Today's struggles are the building blocks of tomorrow's triumphs.",
			"Aching heart, troubled mind, but tomorrow holds the promise of healing.",
			"Today's pain is tomorrow's strength in disguise.",
		],
		[
			// 2 stars
			"Weathering today's storms, holding onto hope for calmer waters ahead.",
			"Struggling to find my footing today, but refusing to lose sight of the horizon.",
			"Enduring today's trials, with faith in tomorrow's resilience.",
			"Today's challenges are tomorrow's triumphs waiting to be claimed.",
			"In the depths of struggle today, but tomorrow's light shines bright.",
			"Finding strength in today's struggles, with hope for a brighter tomorrow.",
			"Today's setbacks are tomorrow's stepping stones to success.",
			"Navigating through today's challenges, with eyes fixed on tomorrow's possibilities.",
			"Enduring today's darkness, with faith in tomorrow's dawn.",
			"Today's obstacles are tomorrow's opportunities in disguise.",
			"Struggling today, but tomorrow holds the promise of renewal.",
			"Weathering today's storms, with hope for clearer skies tomorrow.",
			"In the midst of chaos today, finding solace in the promise of tomorrow.",
			"Facing today's challenges head-on, with determination for tomorrow's breakthroughs.",
			"Today's struggles are the seeds of tomorrow's strength.",
		],
		[
			// 3 stars
			"Navigating through today's ups and downs, with gratitude for the journey.",
			"Finding moments of peace amidst today's chaos, with hope for smoother roads ahead.",
			"In the ebb and flow of today's challenges, finding balance and resilience.",
			"Today's journey had its bumps, but tomorrow holds the promise of smoother paths.",
			"Embracing today's uncertainties, with faith in tomorrow's possibilities.",
			"Navigating through the shades of today, with optimism for tomorrow's brightness.",
			"Today's challenges were met with resilience, with hope for a brighter tomorrow.",
			"Finding silver linings in today's clouds, with anticipation for tomorrow's sunshine.",
			"In the midst of today's uncertainties, finding strength in the promise of tomorrow.",
			"Today's journey had its twists and turns, but tomorrow's path looks promising.",
			"Embracing today's challenges as opportunities for growth, with optimism for tomorrow's blessings.",
			"Finding moments of joy amidst today's routine, with hope for brighter days ahead.",
			"Today's journey was a mix of highs and lows, with anticipation for tomorrow's possibilities.",
			"In the rhythm of today's challenges, finding harmony and resilience for tomorrow.",
			"Navigating through today's complexities, with hope for simplicity and clarity tomorrow.",
		],
		[
			// 4 stars
			"Today was balanced; not perfect, but steady and true.",
			"I felt a solid sense of accomplishment today.",
			"Nothing extraordinary, but today was a good day.",
			"Stable and serene, today was a quiet success.",
			"Today I found contentment in the simple things.",
			"Today was a day of small victories, each one meaningful.",
			"A good day, filled with moments of satisfaction and peace.",
			"Today's achievements may have been small, but they were meaningful.",
			"A quiet day, but one filled with contentment and gratitude.",
			"Today was a day of steady progress, each step forward a victory.",
			"A peaceful day, with moments of quiet joy and contentment.",
			"Today's challenges were met with resilience and grace.",
			"A day of steady progress, with each moment bringing a sense of fulfillment.",
			"Today was a day of quiet contentment, with simple joys found in everyday moments.",
			"A good day, marked by moments of peace and satisfaction.",
		],
		[
			// 5 stars
			"I felt a real sense of progress today, and it feels good.",
			"Today was one of those really solid, satisfying days.",
			"The day was full of pleasant surprises that made me smile.",
			"I'm proud of what I achieved today!",
			"Today left me feeling fulfilled and happy.",
			"Today was a day of triumph, each success celebrated with joy.",
			"A day of fulfillment and accomplishment, each moment savored.",
			"Today was a day of joy and celebration, each victory cherished.",
			"I achieved so much today, and it feels amazing!",
			"Today was a day of happiness and fulfillment, each moment treasured.",
			"A day of success and achievement, with each goal reached a cause for celebration.",
			"Today was a day of joy and satisfaction, each task completed with pride.",
			"A day of triumph and victory, with each success celebrated.",
			"Today was a day of accomplishment and happiness, each achievement celebrated with joy.",
			"A day of fulfillment and contentment, with each moment treasured.",
		],
		[
			// 6 stars
			"What a productive day! I ticked almost everything off my list.",
			"Today was nearly perfect, I feel very accomplished.",
			"Good vibes were all around me today!",
			"I feel great about today, so much positive energy.",
			"So many reasons to be thankful for today.",
			"Today was a day of incredible productivity and positivity.",
			"A day filled with positivity and accomplishment, each task completed with enthusiasm.",
			"Today was a day of success and productivity, with each goal achieved a cause for celebration.",
			"I feel amazing about today, filled with energy and enthusiasm.",
			"A day of positivity and success, with each accomplishment celebrated with joy.",
			"Today was a day of achievement and fulfillment, with each task completed with enthusiasm.",
			"A day of energy and enthusiasm, with each moment filled with positivity and joy.",
			"Today was a day of productivity and success, with each goal reached a cause for celebration.",
			"A day filled with positivity and accomplishment, with each success celebrated with enthusiasm.",
			"Today was a day of joy and fulfillment, with each moment treasured.",
		],
		[
			// 7 stars
			"Absolutely amazing day! I couldn’t have asked for more.",
			"Overflowing with happiness today, everything was perfect!",
			"Today was a dream come true in so many ways.",
			"Full of joy and gratitude for an incredible day.",
			"I’m on top of the world! Today was simply phenomenal.",
			"Today was a day of pure bliss and happiness.",
			"A day filled with joy and celebration, each moment cherished.",
			"Today was a day of dreams fulfilled, with each wish granted a cause for celebration.",
			"A day of happiness and celebration, with each success celebrated with joy.",
			"Today was a day of joy and fulfillment, with each moment treasured.",
			"A day of pure happiness and bliss, with each moment cherished.",
			"Today was a day of dreams realized and happiness achieved, each success celebrated with joy.",
			"A day of pure joy and celebration, with each moment filled with happiness and gratitude.",
			"Today was a day of pure happiness and contentment, with each moment treasured.",
			"A day of dreams come true, with each wish granted a cause for celebration.",
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
