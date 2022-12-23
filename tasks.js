/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */









function startApp(name) {
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', onDataReceived)
  console.log(`Welcome to ${name}'s application!`)
  console.log('--------------------')
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  if (text === 'quit\n' || text ==='exit\n') {
    quit()
  } else if (text === 'hello\n'  || text.split(" ")[0] === "hello") {
    hello(text)
  } else if (text === 'help\n') {
    help()
   }  else if (text==='list\n'){
      Liste();
  }else if (text.split(" ")[0] === "add") {
    addList(text);
  }
  else if (text.split(" ")[0] === "remove"){
   
    remove(text);
      

  }
  else if(text === 'remove\n'){
    if (listy.length==0){
      console.log("list is empty ");}
      else{
    listy.splice(listy.length-1);}
  }
  else if (text == "edit\n"){
    console.log("errore ")
  }
  else if(text.split(" ")[0] === "edit"){
    edit(text);
  }
  else {
    unknownCommand(text)
  }
}

 //edit function
 function edit(data){
  data = data.replace('\n', '').trim()
  const arry = data.split(' ');
  if (arry[0] === 'edit') {
  const secondword = arry.slice(1,2).join(' ');
  let pars = parseInt(secondword);
  if(arry.length>2){
    const thirdword = arry.slice(2).join(' ');
    listy[pars-1]=thirdword;

  }else if (arry.length=2){
  
  listy.splice(listy.length-1);
  
  listy.push(secondword);
  // let last = listy.pop();
  // listy.push(last);

  }
else{
  console.log("error")
}}

 }

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(data) {
  data = data.replace('\n', '').trim()
  const arry = data.split(' ')
  if (arry[0] === 'hello') {
    const secondword = arry.slice(1).join(' ');
    console.log('hello'+secondword +'!') 
}}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit()
}
//liste function
let listy=["taleb","khaddour","hassan"];

// add list
function addList(data) {
  data = data.replace('\n', '').trim()
  const arry = data.split(' ')
  if (arry[0] === 'add') {
    const secondword = arry.slice(1).join(' ');
    listy.push(secondword);
}}

function Liste(){
if(listy.length===0){
  console.log("error not task to do ");
}

for (let i =0 ;i<listy.length;i++){

 console.log(`${i+1}- ${listy[i]}`) ;
}}
function remove(data){

  data = data.replace('\n', '').trim()
  const arry = data.split(' ')
  if (arry[0] === 'remove') {
    const secondword = arry.slice(1).join(' ');
    if (parseInt(secondword)>listy.length){
      console.log("is greater then list size");
    }else{
           listy.splice(secondword-1,1);
           console.log("remove is done ");
       

      }}}








//List all the possible commnds
function help() {
  console.log(
    'quit or exit : to quit outside the program and stop it \n' +
      'hello: to recive you a message hello!\n',
      'hello + word : give you hello word!\n',
      'list : that give you list of task \n',
       'add :add to the list at last\n',
       'remove : remove the last element in list\n',
       'remove +number :remove the elemet that number is for example 1 you remove the first list \n'
  )
  }

// The following line starts the application
startApp('taleb khaddour')
