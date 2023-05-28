const listElement = document.getElementById('list');

// Example list items
const items = [
  'Try journaling.',
  'Take a break and go for a walk.',
  'Try talking to the nature.',
  'Grab your favourite food.',
  'Music helps.'
];

// Populate the list
function populateList() {
  let html = '';
  items.forEach((item) => {
    html += `<li style='margin:20px;background-color:#B8B2B1;border-radius:5px;text-align:centre;'>${item}</li>`;
  });
  listElement.innerHTML = html;
}

populateList();