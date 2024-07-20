document.addEventListener('DOMContentLoaded', () => {
    fetch('team.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const teamContainer = document.getElementById('team-container');
            data.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('team-member');
                
                const img = document.createElement('img');
                img.src = member.profile;
                img.alt = `${member.name}'s photo`;
                
                const name = document.createElement('h2');
                name.textContent = member.name;
                
                const position = document.createElement('p');
                position.textContent = member.position;
                
                memberDiv.appendChild(img);
                memberDiv.appendChild(name);
                memberDiv.appendChild(position);
                
                teamContainer.appendChild(memberDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing JSON:', error);
        });
});
