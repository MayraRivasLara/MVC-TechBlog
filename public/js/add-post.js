// async function newFormHandler(event) {
//     event.preventDefault();
  
//     const postTitle = document.querySelector('#post-title').value;
//     const postDescription = document
//       .querySelector('#post-description')
//       .value.trim();
  
//     const response = await fetch('/api/posts', {
//       method: 'POST',
//       body: JSON.stringify({
//         postTitle,
//         postDescription,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
  
//   document.querySelector('.new-post').addEventListener('submit', newFormHandler);