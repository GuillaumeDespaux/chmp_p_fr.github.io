const ETAPES = [
    { "town": "Marseille", "date": "12/10/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/cbiH9bcetVotzxkt9",
        "jury-pizzaiolo": "https://forms.gle/cZVrN62NJjUPayEH6",
        "jury-chef": "https://forms.gle/bLtRf6MoxDGPPpm36",
        "results": "https://docs.google.com/spreadsheets/d/1WVZte046yj-TulO12JzT5HBxV8XTMOdRe0yx2ZSvQzg/edit?usp=sharing"
        }
    },
{ "town": "Clermont-Ferrand", "date": "12/10/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/wQSGZPqhCMDUT7X77",
        "jury-pizzaiolo": "https://forms.gle/SoqNvzTSAWTVohUi7",
        "jury-chef": "https://forms.gle/2MvevWcvsS913FxY8",
        "results": "https://docs.google.com/spreadsheets/d/1WVZte046yj-TulO12JzT5HBxV8XTMOdRe0yx2ZSvQzg/edit?usp=sharing"
        }
    },
    { "town": "Lyon", "date": "19/10/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/CnHdiJTafpdrsk158",
        "jury-pizzaiolo": "https://forms.gle/4EAfmdcB2moKXJN58",
        "jury-chef": "https://forms.gle/sguhe2Dj5xUh5R129",
        "results": "https://docs.google.com/spreadsheets/d/1WVZte046yj-TulO12JzT5HBxV8XTMOdRe0yx2ZSvQzg/edit?usp=sharing"
        }
    },
    { "town": "Toulouse", "date": "9/11/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/rpi2myWDqeroZ2eh7",
        "jury-pizzaiolo": "https://forms.gle/f3qo2sRMxvLbw5Fm9",
        "jury-chef": "https://forms.gle/GQ2AWW3yJx4HTAGV8",
        "results": ""
        }
    },
    { "town": "Metz", "date": "16/11/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/CYh4uuon72aLYA3T6",
        "jury-pizzaiolo": "https://forms.gle/ojs8DK9qmcrZzMjw6",
        "jury-chef": "https://forms.gle/op3SAJtEMTAjknyB6",
        "results": ""
        }
    },
    { "town": "Nantes", "date": "23/11/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/XzADx54NyTLNmTnn9",
        "jury-pizzaiolo": "https://forms.gle/gfR8RnWw447oQGBXA",
        "jury-chef": "https://forms.gle/xRNNLiVPssstY3EY6",
        "results": ""
        }
    },
    { "town": "Nice", "date": "23/11/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/TpzFE6Dc11Yy7zvF8",
        "jury-pizzaiolo": "https://forms.gle/CHmhDKsgQcfFRAFXA",
        "jury-chef": "https://forms.gle/W8Vt8EbqaJPpGYNQA",
        "results": ""
        }
    },
    { "town": "Lille", "date": "30/11/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/X9QezsxQWC2q9jZf9",
        "jury-pizzaiolo": "https://forms.gle/QpVVzHEK24G43tDA9",
        "jury-chef": "https://forms.gle/pAkJdfm2TqyFcrVM6",
        "results": ""
        }
    },
    { "town": "Bordeaux", "date": "30/11/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/co5tRBFuYc9aCmDx8",
        "jury-pizzaiolo": "https://forms.gle/LyEEimf23bcQtCDUA",
        "jury-chef": "https://forms.gle/WF6AmG5VLgaP3drs8",
        "results": ""
        }
    },    
    { "town": "Bercy", "date": "7/12/2026", 
        "links": {
        "jury-fabrication": "https://forms.gle/c1smR59UdFZWTaoNA",
        "jury-pizzaiolo": "https://forms.gle/9desaymU6Rqhxi3o8",
        "jury-chef": "https://forms.gle/2cHwyUJtPCbWpiHp8",
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
            <a href="${element.links['jury-fabrication']}" target="_blank" rel="noopener noreferrer" class="jury-button btn-fabrication">Juge de Fabrication</a>
            <a href="${element.links['jury-pizzaiolo']}" target="_blank" rel="noopener noreferrer" class="jury-button btn-pizzaiolo">Juge Pizzaïolo</a>
            <a href="${element.links['jury-chef']}" target="_blank" rel="noopener noreferrer" class="jury-button btn-chef">Juge Chef de Cuisine</a>
            <a href="${element.links['results']}" target="_blank" rel="noopener noreferrer" class="jury-button btn-res">Résultats</a>
        </div>
    </div>`;

        container.insertAdjacentHTML('beforeend', html);
    });
}

