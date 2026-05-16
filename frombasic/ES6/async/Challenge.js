/* Run 3 tasks in parallel:

task1 → 2 sec
task2 → 3 sec
task3 → 1 sec

Use Promise.all() and print result array.
*/
function task1(){ 
    return new Promise((resolve)=>{
         setTimeout(()=>{ resolve("task 1 done")},2000); });
         }
function task2(){ 
    return new Promise((resolve)=>{ 
        setTimeout(()=>{ resolve("task 2 done")},3000); }); 
    } 
function task3(){
    return new Promise((resolve)=>{ 
        setTimeout(()=>{ resolve("task 3 done")},1000); }); 
    } 
async function showdata(){ 
    try{
    const results = await Promise.all([
        task1(),
         task2(),
          task3()]); 
    console.log(results); 
    } 
    catch (error) {
        console.error("An error occurred:", error);
    }
 } 
 showdata();