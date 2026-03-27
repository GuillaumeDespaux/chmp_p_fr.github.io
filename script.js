// Fetch and parse CSV
let participantsData = [];
let currentIndex = 0;

async function loadParticipants() {
  try {
    const filename = '19ème Championnat PARIZZA - Formulaire Candidat(e)s.csv';
    console.log('Attempting to fetch:', filename);
    
    const response = await fetch(filename);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const content = await response.text();
    console.log('CSV content length:', content.length);
    console.log('First 200 chars:', content.substring(0, 200));
    
    const lines = content.trim().split('\n');
    console.log('Total lines:', lines.length);
    
    const headers = lines[0].split(',').map(h => h.trim());
    console.log('Headers:', headers);
    
    participantsData = lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim());
      const row = {};
      headers.forEach((header, index) => {
        row[header] = values[index];
      });
      return row;
    });
    
    console.log('Participants loaded:', participantsData.length);
    
    // Display modal with participants
    displayParticipantsModal();
  } catch (error) {
    console.error('Error loading CSV:', error);
    alert('Erreur lors du chargement des données: ' + error.message + '\n\nVérifiez la console du navigateur pour plus de détails.');
  }
}

function displayParticipantsModal() {
  currentIndex = 0;
  
  const modal = document.createElement('div');
  modal.id = 'participantsModal';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:1000';
  
  const content = document.createElement('div');
  content.style.cssText = 'background:white;border-radius:12px;padding:40px;max-width:600px;width:90%;position:relative;text-align:center';
  
  function updateDisplay() {
    if (participantsData.length === 0) {
      content.innerHTML = '<h2>Aucun participant</h2>';
      return;
    }
    
    const participant = participantsData[currentIndex];
    const participantInfo = Object.entries(participant)
      .map(([k, v]) => `<p style="color:#666;font-size:1rem;margin:8px 0"><strong>${k}:</strong> ${v}</p>`)
      .join('');
    
    content.innerHTML = `
      <div style="margin-bottom:20px">
        <h2 style="color:#333;margin-bottom:20px">Participant ${currentIndex + 1}/${participantsData.length}</h2>
        ${participantInfo}
      </div>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:25px">
        <button style="padding:10px 15px;cursor:pointer;font-size:1.2rem;border:none;background:#667eea;color:white;border-radius:8px" onclick="previousParticipant()">◀ Précédent</button>
        <button style="padding:10px 20px;background:#764ba2;color:white;border:none;border-radius:8px;cursor:pointer" onclick="closeParticipantsModal()">Fermer</button>
        <button style="padding:10px 15px;cursor:pointer;font-size:1.2rem;border:none;background:#667eea;color:white;border-radius:8px" onclick="nextParticipant()">Suivant ▶</button>
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
  const participant = participantsData[currentIndex];
  const participantInfo = Object.entries(participant)
    .map(([k, v]) => `<p style="color:#666;font-size:1rem;margin:8px 0"><strong>${k}:</strong> ${v}</p>`)
    .join('');
  
  content.innerHTML = `
    <div style="margin-bottom:20px">
      <h2 style="color:#333;margin-bottom:20px">Participant ${currentIndex + 1}/${participantsData.length}</h2>
      ${participantInfo}
    </div>
    <div style="display:flex;gap:10px;justify-content:center;margin-top:25px">
      <button style="padding:10px 15px;cursor:pointer;font-size:1.2rem;border:none;background:#667eea;color:white;border-radius:8px" onclick="previousParticipant()">◀ Précédent</button>
      <button style="padding:10px 20px;background:#764ba2;color:white;border:none;border-radius:8px;cursor:pointer" onclick="closeParticipantsModal()">Fermer</button>
      <button style="padding:10px 15px;cursor:pointer;font-size:1.2rem;border:none;background:#667eea;color:white;border-radius:8px" onclick="nextParticipant()">Suivant ▶</button>
    </div>
  `;
}

function closeParticipantsModal() {
  const modal = document.getElementById('participantsModal');
  if (modal) {
    modal.remove();
  }
}
