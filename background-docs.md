# Documentation for Gradient Background
## Role of Gradient Background

Depending on the location of the users mouse, the background gradient changes.

## Intended Purpose

When the user hovers their mouse over a selection, the background gradient changes to emphasize the mood by using an animation.

## Implementation/Syntax Approaches?

To implement this feature we had to use CSS, HTML, and JS. Since the gradient is not something that can use the transition feature in CSS, we had to implement out own animation using JS. We started off with just a change in gradient without transition to make sure that the color change works. After we saw that the color changed work through testing, we implemented the first version of the gradient animation. The first attempt at this was using the keyframes in CSS to make a gradient animation but I noticed that nothing chanced. So we switched to writing a version using JS to fix this issue and it worked. The code would return a new color that would depend on the steps for a color transition. It would also take into account how long each step between the colors would take which would make the entire time for the animation. For example, if we wanted 20 steps and each step to take 50ms our entire animation would take 1s. The first version only included the current color and the next color. To show the previous, next and current color, we had to change our code a bit in our JS file to accomodate for all color ranges.

## Testing

LiveServer editing

#### Authors

-   Matteo Persiani
-   Hashim Fituri
