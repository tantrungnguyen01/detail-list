// const datalink = 'https://js-post-api.herokuapp.com/api';


// function buildpositem(post) {

//     const posttemplate = document.querySelector('#addtemplate');
//     const postfragment = posttemplate.content.cloneNode(true);
//     const postElement = postfragment.querySelector('.post');

//     const posting = postElement.querySelector('.imageUrl');
//     posting.src = post.imageUrl;

//     return postElement;
// }

// const postlist = document.querySelector('.post-list');
// console.log(`${datalink}/posts`)
// fetch(`${datalink}/posts`).then(function (response) {
//     response.json().then(function (data) {
//         data.forEach(function (element) {

//             const postElement = buildpositem(element);
//             postlist.appendChild(postElement);

//         });
//     })
// })

const datalink = 'https://js-post-api.herokuapp.com/api';

function buildpositem(post) {
    const addtempalte = document.querySelector('#addtemplate');
    const addframent = addtempalte.content.cloneNode(true);
    const addpost = addframent.querySelector('.post');

    const posting = addpost.querySelector('.imageUrl');
    posting.src = post.imageUrl;

    const postlink = addpost.querySelector('.postlink');
    postlink.href = `detaiiil.html?postId=${post.id}`;



    return addpost;
}

console.log()

const postlist = document.querySelector('.post-list');

fetch(`${datalink}/posts`).then(function (response) {
    response.json().then(function (data) {
        data.forEach(function (element) {
            const addpost = buildpositem(element);
            postlist.appendChild(addpost);
        });

    })
})
