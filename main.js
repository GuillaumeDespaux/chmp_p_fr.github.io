const ETAPES = [
    { "town": "Paris", "date": "10/10/2026", 
        "links": {
        "jury-preparation": "https://forms.gle/DthBbUWPrv4wVm4D9",
        "jury-fabrication": "https://forms.gle/cHJh1XDz67h2JLs9A",
        "jury-pizzaiolo": "https://forms.gle/VSt4skB6WDMT2qKW6",
        "jury-chef": "https://forms.gle/oJFehkVpJ8DANth1A",
        "results": "https://docs.google.com/spreadsheets/d/17yWEOa8nz223Uon8rM5BZWGXHiCANTZhAxX5LATLAJc/edit?usp=sharing"
        }
    }
];

function etapesAndLinks() {
    const container = document.querySelector('.container');
    if (!container) return;

    ETAPES.forEach((element, idx) => {
        console.log('element', element);
        const titleId = `etape-${idx + 1}`;
        const html = `
<div class="cards-grid">
    <div class="card">
        <div class="card-header">
            <h2 class="card-title" id="${titleId}">Classique - ${element.town}</h2>
            <p class="card-date">Date: ${element.date}</p>
        </div>
        <div class="buttons-container">
            <a href="${element.links['jury-preparation']}" target="_blank" rel="noopener noreferrer" class="jury-button btn-preparation">Juge de Préparation</a>
            <a href="${element.links['jury-fabrication']}" target="_blank" rel="noopener noreferrer" class="jury-button btn-fabrication">Juge de Fabrication</a>
            <a href="${element.links['jury-pizzaiolo']}" target="_blank" rel="noopener noreferrer" class="jury-button btn-pizzaiolo">Juge Pizzaïolo</a>
            <a href="${element.links['jury-chef']}" target="_blank" rel="noopener noreferrer" class="jury-button btn-chef">Juge Chef de Cuisine</a>
            <a href="${element.links['results']}" target="_blank" rel="noopener noreferrer" class="jury-button btn-res">Résultats</a>
        </div>
    </div>
</div>`;

        container.insertAdjacentHTML('beforeend', html);
    });
}

