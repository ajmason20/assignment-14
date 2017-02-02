var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}


document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2

  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var number = answerPTagWithValue.textContent;
  var resultNum = parseInt(number) * 2;
  answerPTagWithValue.innerHTML = resultNum;

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

  var answerWhiteBlack = document.querySelector('#circle-bw')
  var circleStyle = window.getComputedStyle(answerWhiteBlack)
  var newColor = circleStyle.backgroundColor;

  if (newColor === 'rgb(255, 255, 255)') {
    answerWhiteBlack.style.backgroundColor = 'rgb(0, 0, 0)';
  } else if (newColor === 'rgb(0, 0, 0)') {
    answerWhiteBlack.style.backgroundColor = 'rgb(255, 255, 255)';
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var answerCircleEl = document.querySelector('.circle-red')

  var circle = window.getComputedStyle(answerCircleEl);
  var circleWidth = circle.width
  var widthNumVal = parseInt(circleWidth)
  var newCircleWidth = widthNumVal * 2
  answerCircleEl.style.width = newCircleWidth + 'px'

  var circleHeight = circle.height
  var heightNumVal = parseInt(circleHeight)
  var newCircleHeight = heightNumVal * 2
  answerCircleEl.style.height = newCircleHeight + 'px'
  console.log(answerCircleEl.style.height, answerCircleEl.style.width)

  if (newCircleHeight < 320) {

  } else {
    answerCircleEl.style.width = '40px'
    answerCircleEl.style.height = '40px'
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userList = document.querySelector('#user-list')
  var answerUserListEl = document.querySelectorAll('#user-list li');

  forEach(answerUserListEl, function(liEl, index, theArray){
    console.log(liEl.className);
    if(liEl.className === 'inactive') {
      userList.removeChild(liEl)
      }
    })
  })


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

  var answerReverseSquaresEl = document.querySelectorAll('#reverse-squares span');
  var squareAnswer = document.querySelector('.square-answer');
  var squaresArray = []

  forEach(answerReverseSquaresEl, function(spanEl, index, theArray){
    squaresArray.push(spanEl)
    // console.log(squaresArray)
  })

var newArray = squaresArray.reverse()

for(var i = 0; i < newArray.length; i++){
  // squareAnswer.innerHTML = newArray[i].outerHTML + newArray[i].outerHTML;
}
squareAnswer.innerHTML = newArray[0].outerHTML
squareAnswer.innerHTML += newArray[1].outerHTML
squareAnswer.innerHTML += newArray[2].outerHTML
squareAnswer.innerHTML += newArray[3].outerHTML
squareAnswer.innerHTML += newArray[4].outerHTML
squareAnswer.innerHTML += newArray[5].outerHTML
squareAnswer.innerHTML += newArray[6].outerHTML

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

  //  (1) select all the #tasks li elements w/ .querySelectorAll(...)
//  (2) loop over each li DOM element
//   (3) inside of for-loop, store the value of the reversed string into a variable
//        - to reverse the string,
//           (i) split the string into an array of single characters,
//            (ii) reverse the array
//           (iii) join the now-reversed array back to a string

//  (3) inside of for-loop set DOMElement.innerHTML to the variable containing reversed string
//

  // var pigLatinEl = document.querySelectorAll('#tasks.li');
  // var arrayAnswer = document.querySelector('#tasks')
  // var charArray = []
  // var taskList = ''
  //
  //
  //
  //





})

// document.querySelector("#cycle-image button").addEventListener('click',function(){
//    //TASK #8
// })
