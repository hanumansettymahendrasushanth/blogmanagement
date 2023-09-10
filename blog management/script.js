 
 const blogForm = document.getElementById('blog-form');
 const blogList = document.getElementById('blog-list');

 blogForm.addEventListener('submit', function(event) {
     event.preventDefault();

    
     const title = document.getElementById('title').value;
     const content = document.getElementById('content').value;

     
     const blogPost = document.createElement('div');
     blogPost.classList.add('blog-post');
     blogPost.innerHTML = `
         <h2>${title}</h2>
         <p>${content}</p>
     `;

     
     blogList.appendChild(blogPost);

    
     blogForm.reset();
 });