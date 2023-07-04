import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove, update, increment } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL : 'https://wearethechampions-7dae5-default-rtdb.firebaseio.com'
}
const app = initializeApp(appSettings)

const database = getDatabase(app)

const commentsInDb = ref(database, "comments")

const textAreaField = document.getElementById('textarea-field')
const inputTo = document.getElementById('input-to')
const inputFrom = document.getElementById('input-from')
const addComment = document.getElementById('publish-button')
const commentsListEl = document.getElementById('endorsements-list')

//agrega un comentario con los valores escritos en cada input
addComment.addEventListener('click',()=>{
    let commentValue = textAreaField.value;
    let toValue = inputTo.value;
    let fromValue = inputFrom.value;

    let commentData = {
        comment: commentValue,
        to: toValue,
        from: fromValue,
        likes: 0
    }
    push(commentsInDb, commentData)

    clearFields();
    
})

// Escucha los cambios en la ubicación "commentsInDb" de la base de datos
onValue(commentsInDb, (snapshot)=>{
    if(snapshot.exists()){
        let commentsArray = Object.entries(snapshot.val())
        clearCommentsListEl()
        for (let i = 0; i < commentsArray.length; i++) {
            let currentComment = commentsArray[i]
            appendCommentToCommentList(currentComment)
        }
    } else {
        commentsListEl.innerHTML = '<p>Por favor agrega alguna recomendación o apoyo hacia alguien.</p>'
    }
});

//borra los valores de los inputs/textarea
function clearFields(){
    textAreaField.value=''
    inputTo.value = ''
    inputFrom.value = ''
}
//funcion que borra los comentarios de la lista
function clearCommentsListEl(){
    commentsListEl.innerText = ''
   
}

function appendCommentToCommentList(comment){
    let commentID = comment[0]
    let commentData = comment[1]
    let commentValue = commentData.comment;
    let fromValue = commentData.from;
    let toValue = commentData.to;
    let likesCount = commentData.likes || 0;
//creamos el elemento li 
    let newElement = document.createElement('li')
//creamos un elemento div para poder separar los elementos
    let toElement = document.createElement('div')
    toElement.textContent = `Para ${toValue}`
    toElement.classList.add('comment-to')
    newElement.appendChild(toElement);

//creamos divs en los que se agregan los endorsements    
    let commentTextElement = document.createElement('div');
    commentTextElement.classList.add('comment')
    commentTextElement.textContent = commentValue;
    newElement.appendChild(commentTextElement);
//use este div para agrupar el from con el corazon y el contador
    let actionContainer = document.createElement('div');
    actionContainer.classList.add('action-container');
    newElement.appendChild(actionContainer);
//creamos el from
    let fromElement = document.createElement('div')
    fromElement.textContent = `De ${fromValue}`
    fromElement.classList.add('comment-from')
    actionContainer.appendChild(fromElement);

//otro div para ubicar mas comodamente el corazon y el contador

    let likeWrapper = document.createElement('div');
    likeWrapper.classList.add('like-wrapper');
    actionContainer.appendChild(likeWrapper);

//un span que va a ser el corazon de los likes
    let likeIcon = document.createElement('span');
    likeIcon.innerHTML = '<i class="fas fa-heart"></i>';
    likeIcon.setAttribute('data-comment-id', commentID);
    likeIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague al elemento padre (el li)
        incrementLikeCount(commentID);
    });
    likeWrapper.appendChild(likeIcon);
//otro span que en este caso va a ser el contador

    let likeCount = document.createElement('span');
    likeCount.textContent = likesCount;
    likeWrapper.appendChild(likeCount);
//agregamos un evento al newElement para eliminar los endorsements al hacer click
    newElement.addEventListener('click', () => {
        let exactLocationInDb = ref(database, `comments/${commentID}`);
        remove(exactLocationInDb)
    })
    commentsListEl.appendChild(newElement)
}
//funcion creada para aumentar el contador de likes
function incrementLikeCount(commentID) {
    const commentRef = ref(database, `comments/${commentID}`);
    update(commentRef, {
        likes: increment(1)
    });
}
