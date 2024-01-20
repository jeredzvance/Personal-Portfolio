
// for download

document.getElementById('downloadButton').addEventListener('click', function() {
  // Create a link element to trigger the download
  const a = document.createElement('a');
  a.href = 'https://drive.google.com/file/d/1FW_15d1028zE9YBKasKsUmLPjwI2X9fM/view?usp=sharing'; // link to download w/ help from Jubibani
  a.download = 'downloaded_file.pdf';

  // Append the link to the body and trigger the click event
  document.body.appendChild(a);
  a.click();

  // Remove the link element
  document.body.removeChild(a);
});



function toggleSummaryContainer() {
  const toggleBtn = document.getElementById('toggleButton');
  const summaryContainer = document.getElementById('summaryContainer');

  toggleBtn.addEventListener('click', () => {
      if (summaryContainer.style.display === 'none' || summaryContainer.style.display === '') {
          summaryContainer.style.display = 'flex';
      } else {
          summaryContainer.style.display = 'none';
      }

      summaryContainer.classList.toggle('show');
      toggleBtn.style.width = summaryContainer.classList.contains('show') ? '55%' : '15%';
  });
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
var contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // You can now access the form values using contactForm.elements
  var name = contactForm.elements["name"].value;
  var email = contactForm.elements["email"].value;
  var message = contactForm.elements["message"].value;

  // Do something with the form values, like sending them to a server
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Close the modal after submitting the form
  modal.style.display = "none";
})

//flip card