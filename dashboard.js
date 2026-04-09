if (!localStorage.getItem("auth")) {
    window.location.href = "index.html";
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const container = document.getElementById("details");

if (!id) {
    container.innerHTML = "<p>No character ID specified.</p>";
} else {
    fetch(`https://www.demonslayer-api.com/api/v1/characters?id=${id}`)
        .then(res => res.json())
        .then(data => {
            // La API retorna { pagination: {...}, content: [...] }
            const character = data.content ? data.content[0] : data;

            if (!character) {
                container.innerHTML = "<p>Character not found.</p>";
                return;
            }

            container.innerHTML = `
                <button class="back-btn" onclick="history.back()">&#8592; Back</button>
                <h2>${character.name || "No name"}</h2>
                <img src="${character.img}" alt="${character.name}" />
                <div class="info">
                    ${character.race     ? `<p><strong>Race:</strong> ${character.race}</p>` : ""}
                    ${character.gender   ? `<p><strong>Gender:</strong> ${character.gender}</p>` : ""}
                    ${character.age      ? `<p><strong>Age:</strong> ${character.age}</p>` : ""}
                    ${character.affiliation_id ? `<p><strong>Affiliation ID:</strong> ${character.affiliation_id}</p>` : ""}
                    ${character.arc_id   ? `<p><strong>Arc ID:</strong> ${character.arc_id}</p>` : ""}
                    ${character.quote    ? `<p><em>"${character.quote}"</em></p>` : ""}
                    ${character.description ? `<p><strong>Description:</strong> ${character.description}</p>` : ""}
                </div>
            `;
        })
        .catch(err => {
            container.innerHTML = "<p>Error loading character. Please try again.</p>";
            console.error(err);
        });
}
