"use strict";
(function () {
    const POSTS = 'https://jsonplaceholder.typicode.com/posts/';
    const COMMENTS = 'https://jsonplaceholder.typicode.com/comments/?postId=';

    const postContainer = document.querySelector('.post_container');

    const getPostById = async (postId) => {
        if (postId <= 100 && postId > 0 && postId !== '') {
            const response = await fetch(POSTS + postId);
            return response.json();
        } else {
            throw new Error('id is incorrect')
        }
    }

    const renderPost = (data) => {
        postContainer.innerHTML = `
            <div>
              <div>
                <div>${data.title}</div>
                <div>${data.body}</div>
              </div>
              <button class="comments">Open Comments</button>
            </div>
        `;
    }

    const getComments = async (postId) => {
        const response = await fetch(COMMENTS + postId);
        return response.json();
    }

    const renderComments = (data) => {
        const commentsWindow = document.createElement('div');
        postContainer.appendChild(commentsWindow);

        data.forEach(item => {
            commentsWindow.innerHTML += `
                <div>
                  <div>${item.name}</div>
                  <div>${item.email}</div>
                  <div>${item.body}</div>
                </div>
            `;
        })
    }

    const events = (postId) => {
        postContainer.querySelector('.comments').addEventListener('click', (e) => {
            postContainer.querySelector('.comments').remove();

            getComments(postId).then((data) => {
                renderComments(data);
            });
        });
    }

    document.querySelector('.form_container').addEventListener('submit', (e) => {
        e.preventDefault();
        const target = e.target
        const postId = target.querySelector('.post_id').value;

        getPostById(postId).then((data) => {
            renderPost(data);

            events(postId)

        }).catch((error) => {
            console.log(error);
        });
    });
})();
