const students=[{'id':1,'name':'Ruby'},{'id':2,'name':'Reenu'},
                {'id':3,'name':'Reshma'}, {'id':4,'name':'Arun'},{'id':5,'name':'Pixie'}]


//to print the names as a string with , as separator
function printResult()
{
    //using foreach
    console.log("USING FOREACH:");
    let names=" ";
    students.forEach(y=>{names=(names===" "?y.name:`${names},${y.name}`)});
    console.log(names);

    //using reduce
    console.log("\nUSING REDUCE:");
    let fn=(names,y)=>{names=(names===" "?y.name:`${names},${y.name}`)};
    students.reduce(fn);
    console.log(names);
}