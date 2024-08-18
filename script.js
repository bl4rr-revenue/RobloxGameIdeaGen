document.getElementById('generateBtn').addEventListener('click', generateIdea);

function generateIdea() {
    // Mocked data representing popular Roblox games
    const games = [
        { name: "Adopt Me!", genre: "Roleplaying", feature: "Pet Adoption" },
        { name: "Brookhaven", genre: "Town & City", feature: "Open-world Exploration" },
        { name: "Tower of Hell", genre: "Obby", feature: "Challenging Parkour" },
        { name: "Bloxburg", genre: "Simulation", feature: "House Building" },
        { name: "Piggy", genre: "Horror", feature: "Escape Room Puzzle" }
    ];

    // Randomly select a game
    const randomGame = games[Math.floor(Math.random() * games.length)];

    // Generate a game idea by mixing themes and features
    const idea = `Create a ${randomGame.genre} game that focuses on ${randomGame.feature}. Consider adding a unique twist, like ${randomGame.name}, but with a new challenge or theme!`;

    // Display the idea on the page
    document.getElementById('ideaDisplay').innerText = idea;
}
