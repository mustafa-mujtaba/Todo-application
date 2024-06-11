#!  /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\t Welcome to Muhammad Mehdi Raza Todo-list\n"));



let todo:string[]=[];
let condition=true


let main = async()=>{

while(condition){


let option=await inquirer.prompt([{

name:"options",
message:"select one option you want to do",
type:"list",
choices:["Add task","delete task","update task","veiw todo-list","Exit"]



}]);
if(option.options==="Add task"){
   await addTask()
}else if (option.options==="delete task"){
    await deleteTask()
}else if(option.options==="update task"){
    await updateTask()
}

else if (option.options==="veiw todo-list"){
    await viewTask()
}else if (option.options==="Exit"){
    condition=false
}


}

}

let addTask=async()=>{
let newTask1=await inquirer.prompt([{

name:"task",
type:"input",
message:"enter your new task"





}]);

todo.push(newTask1.task)

console.log(`${newTask1.task}   task  added in todo list successfully`)



}


let viewTask=async()=>{

console.log('\n Your todo list \n');

todo.forEach((task,index)=>{
console.log(`${index +1} : ${task}`)

})

}

let deleteTask=async()=>{

await viewTask()

let taskindex=await inquirer.prompt([{

name:"index",
type:"number",

message:"Enter the index no of the task you want to delete"

}]);

let removedTask=todo.splice(taskindex.index - 1,1)

console.log(`${taskindex.index} this task has been deleted successfully from your todo list`)

}


let updateTask=async()=>{

await viewTask()


let updateindex=await inquirer.prompt([{

name:"update",
type:"number",
message:"Enter the index no of the task you want to update"

},
{

    name:"newTask",
    type:"input",
    message:"enter your new task"
}

]);
todo [updateindex.update -1 ]=updateindex.newTask

console.log(`\n  Task at index no ${updateindex.update -1} updated successfully[for updated list check view todo-list]`)

}

main()


