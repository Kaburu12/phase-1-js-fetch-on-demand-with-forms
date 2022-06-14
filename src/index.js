
const init = () => {
	const inputForm = document.querySelector('form')
  
	inputForm.addEventListener('submit', (event) => {
	  event.preventDefault();
	  const input = document.querySelector('input#searchByID');
  
	  fetch(`http://localhost:3000/movies/${input.value}`)
	  .then(response => response.json())
		  .then(data => {
			console.log(data);
  //Let's replace Title and Summary with data we retrieved from our server
			  
		const title = document.querySelector('section#movieDetails h4');
		const summary = document.querySelector('section#movieDetails p');
  //Next, we want to change the contents of our title and summary elements
			  
		title.innerText = data.title;
		summary.innerText = data.summary;
	  });
	});
  }
  
  document.addEventListener('DOMContentLoaded', init);