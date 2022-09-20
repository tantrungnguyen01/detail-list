const RESQUEST_URL = 'https://js-post-api.herokuapp.com/api';
const queryString = window.location.sreach;
const urlParams = new URLSearchParams(queryString);
const postID = urlParams.get('postId');


const loading = document.querySelector('.loading');
const afterloading = document.querySelector('.afterloading');
loading.style.display = "block";
afterloading.style.display = "none";


// console.log(`${RESQUEST_URL}/posts/${postID}`)
fetch(`${RESQUEST_URL}/posts/${postID}`).then(function (jsonData) {
    return jsonData.json()
}).then(function (response) {
    const imgitem = document.querySelector('.imageUrl');
    imgitem.src = response.imageUrl;
}).catch(function (e) {
    window.location.href = "indexx.html";
}).finally(function () {
    loading.style.display = "none";
    afterloading.style.display = "block";
})
