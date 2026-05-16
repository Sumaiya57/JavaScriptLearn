function getuser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id:1,name:"John"});
        },2000);
    });
}

function getposts(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([{id:1,title:"Post 1"},{id:2,title:"Post 2"}]);
        },2000);
    });
}
function getcomments(postId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([{id:1,comment:"Great post!"},{id:2,comment:"Thanks for sharing!"}]);
        },2000);
    });
}
async function getdata(){
    try{
        const user=await getuser();
        console.log(`User: ${user.name}`);
        const posts=await getposts(user.id);
        console.log(`Posts: ${posts.map(post=>post.title).join(", ")}`);
        const comments=await getcomments(posts[0].id);
        console.log(`Comments on first post: ${comments.map(comment=>comment.comment).join(", ")}`);
        resolve({user,posts,comments});
        console.log("Data fetched successfully");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getdata();