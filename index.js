const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click", async function(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

    //DOM操作
    users.forEach(function(user) {
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);
    });
});

window.addEventListener("load", async function(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

    //DOM操作
    users.forEach(function(user) {
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);
    });
})