const sampleData = [
    {
        id:1,
        first_name:"Zondra",
        last_name:"Etchell",
        email:"zetchell0@scribd.com",
        gender:"Male"
    },
    {
        id:2,
        first_name:"Grantley",
        last_name:"Siflet",
        email:"gsiflet1@sbwire.com",
        gender:"Female"
    },
    {
        id:3,
        first_name:"Vernon",
        last_name:"Cappell",
        email:"vcappell2@blogs.com",
        gender:"Female"
    },
    {
        id:4,
        first_name:"Svend",
        last_name:"Lghan",
        email:"slghan3@rediff.com",
        gender:"Male"
    },
    { 
        id:5,
        first_name:"Eachelle",
        last_name:"Olivi",
        email:"eolivi4@topsy.com",
        gender:"Male"
    },
    {

        id:6,
        first_name:"Roman",
        last_name:"Tebboth",
        email:"rtebboth5@i2i.jp",
        gender:"Female"
    },
    {
        id:7,
        first_name:"Etan",
        last_name:"Gouldthorp",
        email:"egouldthorp6@behance.net",
        gender:"Female"
    },
    {
        id:8,
        first_name:"Carolina",
        last_name:"Bladder",
        email:"cbladder7@loc.gov",
        gender:"Male"
    },
    {
        id:9,
        first_name:"Danni",
        last_name:"Winslet",
        email:"dwinslet8@prweb.com",
        gender:"Female"
    },
    {
        id:10,
        first_name:"Eniel",
        last_name:"Leba",
        email:"elebel@prweb.com",
        gender:"Male"
    }
];
//use of for loop
console.log("the id numbers used are:");
for(let i = 0; i<sampleData.length; i++){
    console.log(`id number No ${sampleData[i].id}`);
}
//use of while loop
console.log('complete name of the employee are:');
let n = 0;
while(n<sampleData.length){
    console.log(`id number No ${sampleData[n].id} 
    Name: ${sampleData[n].first_name}, ${sampleData[n].last_name}`);
    n++;
}
//use of foreach
console.log('employees and email are:')
sampleData.forEach((data) =>{
    console.log(` Name: ${data.first_name}, ${data.last_name}
Email: ${data.email}`);
    
})
//for of
console.log('employees email display with id number:');
for (let data of sampleData){
    console.log(`id number No ${data.id} 
   Email: ${data.email}`);
}
//for in
console.log('employees Last name display with id number:');
for (const data in sampleData){
    console.log(` id number No ${sampleData[data].id} 
Last name: ${sampleData[data].last_name}`)
}
//filter
console.log('list of employees male');
const isMale = sampleData.filter(function(data){
    return data.gender === 'Male'
})
n = 0;
while(n<isMale.length){
    console.log(`${isMale[n].first_name}, ${isMale[n].last_name}`);
    n++;
}
//map
console.log('list of employees female');
const isFemale = sampleData.filter(function(data){
    return data.gender === 'Female'
}).map(function(data){
    return `
    ${data.first_name}`;
})
console.log(`${isFemale}`);
//reduce
console.log('sum of all the id used');
const sum = (acc, cur) => acc + cur;
const mapUsedForReduce = sampleData.map(data => data.id)
console.log(mapUsedForReduce.reduce(sum));

