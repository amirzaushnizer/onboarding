"use strict";
const allPosts = [
    {
        imgUrl: 'photos/neo_grass.JPG',
        postTitle: 'Trip to the Park',
        postContent: 'Neo and i are taking an afternoon walk at the park :)',
        postDate: new Date(2021, 11, 10),
        likes: 0
    },
    {
        imgUrl: 'photos/neo_amir_yasmin.JPG',
        postTitle: 'Visiting the family home',
        postContent: 'A weekend trip to visit our parents',
        postDate: new Date(2021, 11, 10),
        likes: 0
    },
    {
        imgUrl: 'photos/neo_yasmin.JPG',
        postTitle: 'Neo the guardian',
        postContent: 'When Yasmin is laying dead on the couch after a long day, Neo is always there to watch her back!',
        postDate: new Date(2021, 11, 10),
        likes: 0
    },
    {
        imgUrl: 'photos/neo_toilet.JPG',
        postTitle: 'Where is Neo?',
        postContent: 'Spot the little dog!',
        postDate: new Date(2021, 11, 10),
        likes: 0
    },
];
const updatePopularPosts = () => {
    allPosts.sort((p1, p2) => p2.likes - p1.likes);
    const popularPosts = [];
    popularPosts.push(allPosts[0]);
    popularPosts.push(allPosts[1]);
    const popularPostsList = document.querySelector('.popular-posts');
    if (popularPostsList.lastElementChild) {
        popularPostsList.removeChild(popularPostsList.lastElementChild);
        popularPostsList.removeChild(popularPostsList.lastElementChild);
    }
    popularPosts.forEach(post => {
        popularPostsList.appendChild(createPostElement(post));
    });
};
const createPostElement = (post) => {
    const postElement = document.createElement("li");
    postElement.classList.add('post');
    const postImg = document.createElement("img");
    postImg.setAttribute('src', post.imgUrl);
    postImg.setAttribute('alt', "");
    postImg.classList.add('post-photo');
    const contentContainer = document.createElement('article');
    contentContainer.classList.add('post-content');
    const postTitle = document.createElement('h3');
    postTitle.textContent = post.postTitle;
    const postContent = document.createElement('p');
    postContent.textContent = post.postContent;
    const postDate = document.createElement('footer');
    postDate.textContent = `Posted on ${post.postDate.toDateString()}`;
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-btn');
    likeButton.textContent = `❤️ ${post.likes}`;
    likeButton.addEventListener('click', (() => {
        post.likes += 1;
        likeButton.textContent = `❤️ ${post.likes}`;
        updatePopularPosts();
    }));
    postElement.appendChild(postImg);
    postElement.appendChild(contentContainer);
    contentContainer.appendChild(postTitle);
    contentContainer.appendChild(postContent);
    contentContainer.appendChild(postDate);
    contentContainer.appendChild(likeButton);
    return postElement;
};
const postsList = document.querySelector('.blog-posts-list');
allPosts.forEach(post => {
    postsList.appendChild(createPostElement(post));
});
updatePopularPosts();
document.getElementById('about-link')
    .addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('about-neo').focus();
});
document.getElementById('dates-link')
    .addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('play-dates').focus();
});
