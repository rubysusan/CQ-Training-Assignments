const movie=[
    {
      "MovieName": "The Great Adventure",
      "ActorName": "John Smith",
      "ReleaseDate": "2023-01-15"
    },
    {
      "MovieName": "Mystery in the Woods",
      "ActorName": "Emily Johnson",
      "ReleaseDate": "2022-09-28"
    },
    {
      "MovieName": "Love and Destiny",
      "ActorName": "Michael Brown",
      "ReleaseDate": "2023-05-02"
    },
    {
      "MovieName": "City of Shadows",
      "ActorName": "Sophia Williams",
      "ReleaseDate": "2023-03-12"
    },
    {
      "MovieName": "The Last Stand",
      "ActorName": "William Davis",
      "ReleaseDate": "2022-11-07"
    },
    {
      "MovieName": "Echoes of Time",
      "ActorName": "Olivia Wilson",
      "ReleaseDate": "2022-12-19"
    }
  ]
 function movieResults() 
 {
 //1 
console.log("Movie name along with the actor name of those movies released in the year 2022");
movie.filter(y=>y.ReleaseDate.includes(2022)).forEach(key=>{console.log("\tMovieName:"+ key.MovieName + ", ActorName: " + key.ActorName)})
 
//2 
console.log("Movie names released in the year 2023 where the actor is William Davis");
console.log(movie.filter(y=>y.ReleaseDate.includes(2023) && y.ActorName==="William Davis").map(y=>y.MovieName));


//3
console.log("Actor name and release date of the movie The Last Stand");
movie.filter(y=>y.MovieName==="The Last Stand").forEach(key=>{console.log("\tMovieName:"+ key.MovieName + ", ReleaseDate: " + key.ReleaseDate)})

//4
console.log("Whether there is any movie in the list with actor name John Doe");
console.log(movie.some(y=>y.ActorName==="John Doe"));

  //5
  var count = movie.filter(y=>y.ActorName==="Sophia Williams").length;
  console.log("Count of movies where the actor name is Sophia Williams: "+count);

  //6
  var newElement={
                  "MovieName": "The Final Stage",
                  "ActorName": "John Doe",
                  "ReleaseDate": "2022-08-11"
            };
   movie.splice(movie.length,0,newElement); //or movie.push(newElement);
   console.log("After adding new element in the end: " );
   console.log(movie);

//7   
   var ct=0;
   if(movie[0].MovieName===movie[movie.length-1].MovieName)
   {
       ct++;
   }
   
  movie.forEach(y=>{
                  if(y.MovieName===(y+1).MovieName)
                      ct++
              })
  if(ct>0)
  {
      console.log("Duplicates Present");
  }
  else
      console.log("No Duplicates Present");

//8
  var newArr=movie.slice(3);
  console.log("New array created: ")
  console.log(newArr);

//9
let result = movie.filter((val,i,arr) => arr.findIndex((j) => j.ActorName=== val.ActorName) === i).map(y=>y.ActorName);
console.log("Distinct Actor Names:");
console.log(result);

//10
newElement={
    "MovieName": "Rich & Poor",
    "ActorName": "Johnie Walker",
    "ReleaseDate": "2023-08-11"
};
let index=movie.findIndex((y)=> y.MovieName === "Love and Destiny")
movie.splice(index+1,0,newElement);
console.log("New element inserted in between:");
console.log(movie);

//11
console.log("Count of distinct actors: " + result.length);

//12
index=movie.findIndex((y)=> y.MovieName === "The Last Stand");
movie.splice(index,1);
console.log("After deleting movie named The Last Stand:");
console.log(movie);

//13
console.log("whether all the movies are released after 2021 Dec 31");
console.log(movie.every(y=>y.ReleaseDate>"2021-12-31"));

//14
index=movie.findIndex((y)=> y.MovieName === "City of Shadows");
movie[index].ReleaseDate="2023-03-13";
console.log("Updated movie City of Shadows\'s release date as 2023-03-13");
console.log(movie[index]);

//15
var newMovie=movie.filter(y=>y.MovieName.length>10);
console.log("New array of movie names whose movie name length is greater than 10:");
console.log(newMovie);
}
movieResults();