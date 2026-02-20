 // Fetch Api Step1 day1
 function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "deepu"});
        }, 1000);
    });
}
function fetchPosts()  {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(["Post1", "Post2"]);
        },1500);
    });
}
function fetchComments() {
    retur new Promise (( resolve) =>{
        setTimeout(() => {
            resolve(["Comment A", "Comment B"]);
        },1200);
    });
} 
