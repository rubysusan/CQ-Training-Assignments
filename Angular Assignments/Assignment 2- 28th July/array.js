const arr=[
    {
      "FirstName": "John",
      "LastName": "Doe",
      "Age": 20,
      "Department": "Computer Science"
    },
    {
      "FirstName": "Jane",
      "LastName": "Smith",
      "Age": 22,
      "Department": "Physics"
    },
    {
      "FirstName": "Michael",
      "LastName": "Johnson",
      "Age": 21,
      "Department": "Mathematics"
    },
    {
      "FirstName": "Sarah",
      "LastName": "Williams",
      "Age": 19,
      "Department": "Computer Science"
    },
    {
      "FirstName": "Robert",
      "LastName": "Brown",
      "Age": 23,
      "Department": "Mathematics"
    },
    {
      "FirstName": "Emily",
      "LastName": "Davis",
      "Age": 20,
      "Department": "Computer Science"
    }
  ]
function showResult()
{
   // document.write("hi");
    //document.writeln(JSON.stringify(arr));
    //1
    console.log("Students whose department is computer science:");
    console.log(arr.filter(y=>y.Department==="Computer Science"));
    //2
    console.log("Students whose age is greater than 21:");
    console.log(arr.filter(y=>y.Age>21).map(y=>y.FirstName));
    //3
    console.log("Student having a first name as Robert is present in the Computer Science Department:");
    console.log(arr.filter(y=>y.Department==="Computer Science").map(y=>y.FirstName).includes("Robert"));
    //4
    console.log("Student whose age is greater than 23 is studying in the Maths department:");
    console.log(arr.some(y=>y.Department==="Mathematics" && y.Age>23));
    //5
    console.log("All students are above an age group of 18:");
    console.log(arr.every(y=>y.Age>18));
    //6
    console.log("Department of Student with First Name \"John\":");
    console.log(arr.filter(y=>y.FirstName==="John").map(y=>y.Department));
}
