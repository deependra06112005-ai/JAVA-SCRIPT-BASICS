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
async function async function loadDashboardSequential() {
      console.time("Sequential");

        const user = await fetchUser();
          const posts = await fetchPosts();
            const comments = await fetchComments();

              console.log({ user, posts, comments });

                console.timeEnd("Sequential");
                }

                loadDashboardSequential();
}

async function getData(){
    try {
        const response = await fetch("https://api.com/users");
        const data = await response.json();
        console.log(data);
    }   catch (error) {
        console.log(error);
        
    }
}