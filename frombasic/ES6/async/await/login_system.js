function login(username,password)
  { return new Promise((resolve,reject)=> { 
    if(username==="admin" && password==="1234") 
        resolve("Login success") 
    else reject( "Login failed"); })} 
    
    async function show(){
        try { 
            const result = await login("admin", "1434"); 
            console.log(result); 
        } 
        catch (error) { 
            console.log("Error:", error); 
        } 
    } 
    show();