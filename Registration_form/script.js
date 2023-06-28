window.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('btn-1');
    const form = document.getElementById('registrationForm');
    const output = document.getElementById('displayData');
  
    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
  
      // Get form values
      const name = document.getElementById('fname').value;
      const email = document.getElementById('email').value;
      const website = document.getElementById('website').value;
      const imageLink = document.getElementById('image').value;
  
      const genderOptions = document.getElementsByName('gender');
      let gender = '';
      for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
          gender = genderOptions[i].value;
          break;
        }
      }
  
      const skills = [];
      const skillCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      skillCheckboxes.forEach((checkbox) => {
        skills.push(checkbox.name);
      });
  
      // Display submitted data
      const newCard = document.createElement('div');
      newCard.classList.add('addData');
      newCard.innerHTML = `
        <img src="${imageLink}" alt="Student Image" width="150" height="150">
        <div class="NameContainer">${name}</div>
        <a href="mailto:${email}">${email}</a><br>
        <a href="${website}">${website}</a>
        <div class="SkillContainer">${skills.join(', ')}</div>
      `;
      output.appendChild(newCard);
  
      // Reset form
      form.reset();
    });
  });

