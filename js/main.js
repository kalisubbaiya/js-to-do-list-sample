let form=document.getElementById("form");
let input=document.getElementById("input");
let posts=document.getElementById("posts");
form.addEventListener("submit",e=>{
    e.preventDefault();
    readPost();
});
let data={};
function readPost(){
    data["text"]=input.value;
    createPost();
}
function createPost(){
    posts.innerHTML+=`<tr>
            <td>${data.text}</td>
            <td class="option">
                <i onclick="updatePost(this)" class="fa fa-edit"> Edit</i>
            </td>
            <td>
                <i onclick="delPost(this)" class="fa fa-trash"> Delete</i>
            </td>
        </tr>`
        input.value=""; // for clear input value
}
function delPost(e){
    e.parentNode.parentNode.remove();
};
function updatePost(e){
    input.value=e.parentNode.previousElementSibling.innerText;
    e.parentNode.parentNode.remove();
};