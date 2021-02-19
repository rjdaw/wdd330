import { Comment } from './comment.js';
const comments = [];

// add eventListener
function listenForClick(){
    document.querySelector('#submit-comment').addEventListener('click', readComment);
}

// method to readComment
function readComment() {
    return document.querySelector('#comment-area').value;
}

// method to add Comment
function addComment(newComment, hikeId) {
    let brandNewComment = new Comment(newComment, hikeId);
    comments.push(brandNewComment);
}

// filterCommentsByHike
function filterCommentsByHike(comments, hike) { // hike is a hikeId
    return comments.filter(comment => {
        comment.hikeId == hike;
    })
}

// renderCommentList
function renderCommentList(filteredComments) {
    let commentList = document.createElement('ul');

    filteredComments.map(comment => {
        let li = document.createElement('li');
        let date = document.createElement('p');
        let content = document.createElement('p');
        date.textContent = commment.Date;
        content.textContent = comment.comment;
        li.appendChild(date);
        li.appendChild(content);
        commentList.appendChild(li);
    })
    document.querySelector("#commentsDiv").appendChild(commentList);
}