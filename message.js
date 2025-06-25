
const text = `
Happy Birthday to My Bestest Friend in the Universe! 🌟

Dear Friend Moca, today isn’t just your birthday — it’s a celebration of you. Of the beautiful soul you are, of the light you bring into every life you touch, and of the unforgettable journey you and I have shared as the closest of friends. ❤️
From our endless conversations to the silly moments that only we find funny, from late-night talks to quiet understanding glances when words weren’t even needed — every memory with you is stitched into the fabric of my heart. You’ve seen me at my best, my worst, and everything in between… and never once walked away. That’s what makes you irreplaceable.
You are the kind of friend people write stories about — loyal, strong, kind, wildly funny, sometimes chaotic 😅 but always caring. You know how to make me smile even on the darkest days.
I have no idea what I did to deserve a friend like you, but I thank the universe every day for bringing you into my life. You’ve been my diary, my therapist, my laughter buddy, my partner-in-crime, and my greatest cheerleader — all rolled into one.

On this special day, I just want to remind you of a few things:
• You are enough, exactly as you are.
• You have the strength to conquer anything that comes your way.
• Your dreams are valid and within reach.
• And most importantly — you are deeply loved — by me and by everyone lucky enough to know you.

Here’s to the late-night talks, the spontaneous adventures, the “remember when” moments, and the thousands of memories we’ve yet to make. I hope today is filled with the kind of joy you bring into the world — genuine, vibrant, and unforgettable.
So blow out the candles, make a wild wish, and know that I’ll always be by your side — cheering you on, annoying you , roasting you, and celebrating your existence. Because best friends like you? They’re once in a lifetime. And I promise, this friendship? It’s forever.

Happy Birthday, Dear dost . Never stop being the amazing person you are. 💕🎂🎉
Let’s make this year the most magical one yet.

With all my heart,
Your Best Friend Jiggyy 
`;
const target = document.getElementById("typed-text");
let i = 0;
function type() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 35);
  }
}
type();
