if (!localStorage.getItem("auth")) {
    window.location.href = "index.html";
}

const container = document.getElementById("characters");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

function renderCharacters(characters) {
    container.innerHTML = "";

    if (characters.length === 0) {
        container.innerHTML = "<p class='no-results'>No characters found.</p>";
        return;
    }

    characters.forEach(character => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${character.img}" alt="${character.name}" />
            <h3>${character.name}</h3>
        `;
        card.addEventListener("click", () => {
            window.location.href = `dashboard.html?id=${character.id}`;
        });
        container.appendChild(card);
    });
}

function loadAll() {
    container.innerHTML = "<p>Loading...</p>";
    fetch("https://www.demonslayer-api.com/api/v1/characters?limit=10")
        .then(res => res.json())
        .then(data => renderCharacters(data.content || []))
        .catch(() => {
            container.innerHTML = "<p>Error loading characters.</p>";
        });
}

function searchByName(name) {
    container.innerHTML = "<p>Searching...</p>";
    fetch(`https://www.demonslayer-api.com/api/v1/characters?name=${encodeURIComponent(name)}`)
        .then(res => res.json())
        .then(data => renderCharacters(data.content || []))
        .catch(() => {
            container.innerHTML = "<p>Error while searching.</p>";
        });
}

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) searchByName(query);
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) searchByName(query);
    }
});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    loadAll();
});

loadAll();
