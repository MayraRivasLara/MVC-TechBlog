// async function commentFormHandler(event) {
//     event.preventDefault();
  
//     const newComment = document.querySelector('#comment-text').value.trim();
//     const post_id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
  
//     if (newComment) {
//       const response = await fetch('/api/comments', {
//         method: 'POST',
//         body: JSON.stringify({
//           post_id,
//           newComment,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.reload();
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }
  
//   document
//     .querySelector('.comment-form')
//     .addEventListener('submit', commentFormHandler);