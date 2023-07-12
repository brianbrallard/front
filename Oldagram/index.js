const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const img = document.getElementById('vangogh')
     const icon = document.querySelector('svg')
     
     img.addEventListener('dblclick',()=>{
         icon.classList.add('like')
     
         setTimeout(() => {
             icon.classList.remove('like')
         }, 1000);
     })

// /* SOLUTION */
 const mainEl = document.querySelector("main")
 let html = ""
 for (let i = 0; i < posts.length; i++) {
    
     html += `
         <main>
         <article class="box">
        <img src="${posts[i].avatar}" class='avatar' alt="vangogh avatar">

         <div class="text-container">
             <h3>${posts[i].name}</h3>
             <p>${posts[i].location}</p>
         </div>
     </article>
     <div class="imglike">
         <img class="post" id='vangogh' src="${posts[i].post}" alt="image">
         <svg xmlns="http://www.w3.org/2000/svg" aria-label="Me gusta" fill="white" role="img" viewBox="0 0 24 24">
                <title>Me gusta</title>
                <path
                    d="M12 21.35l-1.984-1.802C4.017 14.47 0 11.378 0 7.5 0 3.358 3.358 0 7.5 0 9.577 0 11.54.975 12 2.502c.46-1.527 2.423-2.502 4.5-2.502 4.142 0 7.5 3.358 7.5 7.5 0 3.878-4.017 6.97-10.016 12.048L12 21.35z" />
            </svg>
     </div>
     <div class="icons">
         <img class="heart" src="images/icon-heart.png" alt="like button">
         <img class="comment" src="images/icon-comment.png" alt="comment button">
         <img src="images/icon-dm.png" alt="dm button">
     </div>
     <div class="desc">
         <h3>${posts[i].likes}</h3>
         <p><span>${posts[i].username} </span>${posts[i].comment}</p>
     </div>
 </main>
 
     `
     
 }

 mainEl.innerHTML = html;

