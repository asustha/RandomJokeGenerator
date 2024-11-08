const jokes = [
    "Whats skeleton's favourite food? Spare ribs.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What do you call fake spaghetti? An impasta.",
    "I would tell you a joke about an elevator, but it's an uplifting experience.",
    "Why did the bicycle fall over? Because it was two-tired."
];

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    document.getElementById('joke').innerText = joke;
}
