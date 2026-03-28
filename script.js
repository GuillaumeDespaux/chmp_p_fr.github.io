// Fetch and parse JSON
let participantsData = [];
let currentIndex = 0;

async function loadParticipantsClassique() {
  try {
    const filename = 'participants-classique.json';
    console.log('Attempting to fetch:', filename);
    
    const response = await fetch(filename);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    participantsData = await response.json();
    console.log('Participants loaded:', participantsData.length);
    console.log('First participant:', participantsData[0]);
    
    // Display modal with participants
    displayParticipantsModal();
  } catch (error) {
    console.error('Error loading JSON:', error);
    alert('Erreur lors du chargement des données: ' + error.message + '\n\nVérifiez la console du navigateur pour plus de détails.');
  }
}

async function loadParticipantsDessert() {
  try {
    const filename = 'participants-dessert.json';
    console.log('Attempting to fetch:', filename);
    
    const response = await fetch(filename);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    participantsData = await response.json();
    console.log('Participants loaded:', participantsData.length);
    console.log('First participant:', participantsData[0]);
    
    // Display modal with participants
    displayParticipantsModal();
  } catch (error) {
    console.error('Error loading JSON:', error);
    alert('Erreur lors du chargement des données: ' + error.message + '\n\nVérifiez la console du navigateur pour plus de détails.');
  }
}

function displayParticipantsModal() {
  currentIndex = 0;
  
  const modal = document.createElement('div');
  modal.id = 'participantsModal';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:1000;overflow:auto;padding:20px';
  
  const content = document.createElement('div');
  content.style.cssText = 'background:white;border-radius:12px;padding:40px;max-width:700px;width:100%;position:relative;margin:auto';
  
  function formatValue(value) {
    if (value === '' || value === null || value === undefined) {
      return '-';
    }
    return value;
  }
  
  function updateDisplay() {
    if (participantsData.length === 0) {
      content.innerHTML = '<h2>Aucun participant</h2>';
      return;
    }
    
    const participant = participantsData[currentIndex];
    const participantInfo = Object.entries(participant)
      .map(([k, v]) => `<p style="color:#666;font-size:0.95rem;margin:8px 0;border-bottom:1px solid #eee;padding:8px 0"><strong>${k}:</strong> ${formatValue(v)}</p>`)
      .join('');
    
    content.innerHTML = `
      <div style="margin-bottom:20px">
        <h2 style="color:#333;margin-bottom:10px">Participant ${currentIndex + 1}/${participantsData.length}</h2>
        <div style="max-height:400px;overflow-y:auto;border:1px solid #e0e0e0;padding:15px;border-radius:8px">
          ${participantInfo}
        </div>
      </div>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:25px;flex-wrap:wrap">
        <button style="padding:10px 15px;cursor:pointer;font-size:1.2rem;border:none;background:#667eea;color:white;border-radius:8px;${currentIndex === 0 ? 'opacity:0.5;cursor:not-allowed' : ''}" onclick="previousParticipant()" ${currentIndex === 0 ? 'disabled' : ''}>◀ Précédent</button>
        <button style="padding:10px 20px;background:#764ba2;color:white;border:none;border-radius:8px;cursor:pointer" onclick="closeParticipantsModal()">Fermer</button>
        <button style="padding:10px 15px;cursor:pointer;font-size:1.2rem;border:none;background:#667eea;color:white;border-radius:8px;${currentIndex === participantsData.length - 1 ? 'opacity:0.5;cursor:not-allowed' : ''}" onclick="nextParticipant()" ${currentIndex === participantsData.length - 1 ? 'disabled' : ''}>Suivant ▶</button>
      </div>
    `;
  }
  
  updateDisplay();
  modal.appendChild(content);
  document.body.appendChild(modal);
}

function nextParticipant() {
  if (currentIndex < participantsData.length - 1) {
    currentIndex++;
    const content = document.querySelector('#participantsModal > div');
    updateParticipantDisplay(content);
  }
}

function previousParticipant() {
  if (currentIndex > 0) {
    currentIndex--;
    const content = document.querySelector('#participantsModal > div');
    updateParticipantDisplay(content);
  }
}

function updateParticipantDisplay(content) {
  function formatValue(value) {
    if (value === '' || value === null || value === undefined) {
      return '-';
    }
    return value;
  }
  
  const participant = participantsData[currentIndex];
  const participantInfo = Object.entries(participant)
    .map(([k, v]) => `<p style="color:#666;font-size:0.95rem;margin:8px 0;border-bottom:1px solid #eee;padding:8px 0"><strong>${k}:</strong> ${formatValue(v)}</p>`)
    .join('');
  
  content.innerHTML = `
    <div style="margin-bottom:20px">
      <h2 style="color:#333;margin-bottom:10px">Participant ${currentIndex + 1}/${participantsData.length}</h2>
      <div style="max-height:400px;overflow-y:auto;border:1px solid #e0e0e0;padding:15px;border-radius:8px">
        ${participantInfo}
      </div>
    </div>
    <div style="display:flex;gap:10px;justify-content:center;margin-top:25px;flex-wrap:wrap">
      <button style="padding:10px 15px;cursor:pointer;font-size:1.2rem;border:none;background:#667eea;color:white;border-radius:8px;${currentIndex === 0 ? 'opacity:0.5;cursor:not-allowed' : ''}" onclick="previousParticipant()" ${currentIndex === 0 ? 'disabled' : ''}>◀ Précédent</button>
      <button style="padding:10px 20px;background:#764ba2;color:white;border:none;border-radius:8px;cursor:pointer" onclick="closeParticipantsModal()">Fermer</button>
      <button style="padding:10px 15px;cursor:pointer;font-size:1.2rem;border:none;background:#667eea;color:white;border-radius:8px;${currentIndex === participantsData.length - 1 ? 'opacity:0.5;cursor:not-allowed' : ''}" onclick="nextParticipant()" ${currentIndex === participantsData.length - 1 ? 'disabled' : ''}>Suivant ▶</button>
    </div>
  `;
}

function closeParticipantsModal() {
  const modal = document.getElementById('participantsModal');
  if (modal) {
    modal.remove();
  }
}
