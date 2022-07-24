let post = 0
let postLiked = false
const btnEl = document.getElementById("btn")
const nameEl = document.getElementById("name")
const usernameEl = document.getElementById("username")
const locationEl = document.getElementById("location")
const avatarEl = document.getElementById("avatar")
const postEl = document.getElementById("post")
const commentEl = document.getElementById("comment")
const likesEl = document.getElementById("likes")
const heartEl = document.getElementById("heart")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
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

btnEl.addEventListener("click", nextPost)

function nextPost(){
    heartEl.src = "images/icon-heart.png"
    postLiked = false
    switch(post){
        case 0:
            post+=1
            changePost()
            break;
        case 1:
            post+=1
            changePost()
            break;
        case 2:
            post = 0
            changePost()
    }
}

function changePost(){  
    console.log(post)
    nameEl.innerHTML =  posts[post].name
    usernameEl.innerHTML = posts[post].username
    locationEl.innerHTML = posts[post].location
    avatarEl.src= posts[post].avatar
    postEl.src= posts[post].post
    commentEl.innerHTML = " " + posts[post].comment
    likesEl.innerHTML = posts[post].likes + " likes"
}

postEl.addEventListener("dblclick", likePost)
heartEl.addEventListener("click", likePost)

function likePost (){
    if (!postLiked)
        heartEl.src = "images/icon-heartLiked.png"
        postLiked = true
        likesEl.innerHTML = posts[post].likes + 1 + " likes"
}
