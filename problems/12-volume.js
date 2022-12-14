/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/
let recVolume = height =>{
  let volume ;
  if(height){
    volume = height
    return (width)=>{
      if(width) {
        volume = height * width
        return (Length)=>{
          if(Length){
            return volume = height* width * Length
          }
          return volume
        }
      }
      return volume
    }
  }
  return volume

}
// Your code here
// let recVolume = number =>{
//   let value = [];

//   return function(){
//     value.push(number)
//     console.log('here',value)

//   //   if(value[2] === undefined){
//   //   value.push(number)
//   //   console.log('here',value)
//   // }
//   // else if(value[2] !== undefined){

//   //   return value.reduce((i , j) =>{
//   //     i *= j
//   //   },1)
//   }
// }

// let recVolume = height => {
// let volume = height
//   return function (width) {
//     volume *= width
//     return function (length) {

//       return volume *= length;

//     }

//   }

// }
;
// console.log(recVolume(1)) //function
// console.log(recVolume(1)) //function
// console.log(recVolume(1)) //1

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
