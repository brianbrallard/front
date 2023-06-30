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
    let commentValue = textAreaField.value
    push(commentsInDb, commentValue)

    clearTextAreaField()
})
onValue(commentsInDb, (snapshot)=>{
    if(snapshot.exists()){
        let commentsArray = Object.entries(snapshot.val())
        clearCommentsListEl()
        for (let i = 0;i<commentsArray.length;i++){
            let currentComment = commentsArray[i]
        }
    }
})



function clearTextAreaField(){
    textAreaField.value=''
}
function clearCommentsListEl(){
    commentsListEl.innerText = ''
}