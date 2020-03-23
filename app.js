

const fullName = 'Ogochukwu Odom';

const myCourses = ['HTML', 'CSS', 'Javascript', 'Node Js'];

console.log('My name is ' + fullName);
console.log('The courses I do are: ');
myCourses.forEach((i) => {
  console.log(i);
})

console.log('Below are even numbers between 1 and 200')
for(let i = 1; i <= 200; i++) {
  if((i % 2) === 0) {
    console.log(i)
  }
  
}

