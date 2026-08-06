const ETAPES = [
    { "town": "Marseille", "date": "12/10/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },
{ "town": "Clermont-Ferrand", "date": "12/10/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },
    { "town": "Lyon", "date": "19/10/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },
    { "town": "Toulouse", "date": "9/11/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },
    { "town": "Strasbourg", "date": "16/11/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },
    { "town": "Nantes", "date": "23/11/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },
    { "town": "Nice", "date": "23/11/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },
    { "town": "Lille", "date": "30/11/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },
    { "town": "Bordeaux", "date": "30/11/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },    
    { "town": "Paris", "date": "7/12/2026", 
        "links": {
        "jury-preparation": "",
        "jury-fabrication": "",
        "jury-pizzaiolo": "",
        "jury-chef": "",
        "results": ""
        }
    },

];

function etapesAndLinks() {
    const container = document.querySelector('.cards-grid');
    if (!container) return;

    ETAPES.forEach((element, idx) => {
        console.log('element', element);
        const titleId = `etape-${idx + 1}`;
        const html = `
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
    </div>`;

        container.insertAdjacentHTML('beforeend', html);
    });
}

