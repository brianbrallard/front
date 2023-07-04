import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"




const appSettings = {
    databaseURL : 'https://wearethechampions-7dae5-default-rtdb.firebaseio.com'
}
const app = initializeApp(appSettings)

const database = getDatabase(app)

const commentsInDb = ref(database, "comments")

const textAreaField = document.getElementById('textarea-field')
const inputFrom = document.getElementById('input-from')
const inputTo = document.getElementById('input-to')
const addComment = document.getElementById('publish-button')
const commentsListEl = document.getElementById('endorsements-list')
addComment.addEventListener('click',()=>{
    let commentValue = textAreaField.value;
    let fromValue = inputFrom.value;
    let toValue = inputTo.value;
    push(commentsInDb, commentValue)

    clearTextAreaField();
    inputFrom.value = '';
    inputTo.value = '';
})
onValue(commentsInDb, (snapshot)=>{
    if(snapshot.exists()){
        let commentsArray = Object.entries(snapshot.val())
        clearCommentsListEl()
        for (let i = 0;i<commentsArray.length;i++){
            let currentComment = commentsArray[i]
            let fromValue = inputFrom.value;
            let toValue = inputTo.value;

            appendCommentToCommentList(currentComment, fromValue, toValue)
        }
    } else{
        commentsListEl.innerHTML = 'Por favor agrega algún respaldo o apoyo hacia alguien.'
    }
})



function clearTextAreaField(){
    textAreaField.value=''
}
function clearCommentsListEl(){
    commentsListEl.innerText = ''
}
function appendCommentToCommentList(comment, from, to){
    let commentID = comment[0]
    let commentValue = comment[1]
    
    let newElement = document.createElement('li')

    let fromElement = document.createElement('div')
    fromElement.textContent = from
    newElement.appendChild(fromElement);

    let commentTextElement = document.createElement('div')
    commentTextElement.textContent = commentValue
    newElement.appendChild(commentTextElement);

    let toElement = document.createElement('div')
    toElement.textContent = to
    newElement.appendChild(toElement);

    newElement.addEventListener('click',()=>{
        let exactLocationInDb = ref(database, `comments/${commentID}`);
        remove(exactLocationInDb)
    })
    commentsListEl.append(newElement)
}