todoList={ "1": 
    {
       task:"id1",
        completed:false
    },
    "2":{
        task:"id2",
        completed:false
    },
    "3":{
        completed:false
    }

    };
    function addTask(key,tasker){
        /**create an function which will either add a task if not present or if task is present then it will update it */
        if (todoList[key])
            return todoList[key].task = tasker 
        else
            return todoList[key]={ task: tasker, completed: false };  
            };
    function completeTask(key,comp){
        if(todoList[key].completed)
            return todoList[key].completed=comp
        else
            return console.log(`Task with key ${key} does not exist.`);
            };
/**I need to add task from user input and update it to true once completed  */

addTask("4","Shri");
completeTask("4",true);
console.log(todoList);