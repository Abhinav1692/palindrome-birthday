const inputDate=document.querySelector("#input");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function showMessage(message)
{  
  output.innerText=message;
}

function checkPalindromeBirthday() {
  var dateValue = inputDate.value;
  

   var date = {
      day: Number(dateValue.slice(8,10)),
      month:Number(dateValue.slice(5,7)),
      year: Number(dateValue.slice(0,4)),
   };
   if(dateValue==='')
   {
      showMessage("please enter date of birth.")
   }
   else{
     
      var isPalindrome = checkPalindrome(date);
      if(isPalindrome === 'true')
      {
        showMessage("Yay!🎉 Your birthday is Palindrome.")
      }
      else{
       
        var nextPalindromeDate =  getNextPalindrome(date);
        
         var nextPalin= String(nextPalindromeDate[1].day) + '-' + String(nextPalindromeDate[1].month) + '-' + String(nextPalindromeDate[1].year);
 
        showMessage("The nearest Palindrome date is " + String(nextPalin) + ". It will come after " + String(nextPalindromeDate[0]) + " days");
      }
   }
 
// here I used slice() func, but can use split('-') func also.


    //console.log(date);
  }




function reverseString(str) {
   var listOfChar = str.split("");
   var reverse = listOfChar.reverse();
   var reversedString = reverse.join("");
   //console.log(reversedString);
   return reversedString;

}





// we get input date as a number, but we need to convert into String
// in order to check palindrome.
function convertDateToString(date) {
   var dateStr = {
      day: '',
      month: '',
      year: '',
   };
   if (date.day < 10)
      dateStr.day = '0' + date.day; //adding number to a string results as string
   else
      dateStr.day = date.day.toString();


   if (date.month < 10)
      dateStr.month = '0' + date.month; //adding number to a string results as string
   else
      dateStr.month = date.month.toString();


   dateStr.year = date.year.toString();


   return dateStr;
}




function getAllDateFormats(date) {
  var dateStr = convertDateToString(date);

   var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
   var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
   var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
   var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
   var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
   var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;


   var allDateFormats = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
   // console.log(allDateFormats);
   //returning array consists of all date formats(as string)
   return allDateFormats;
}


function checkPalindrome(date) {
   var flag = 'false';
   var allDateFormats = getAllDateFormats(date);
   //console.log(allDateFormats);
   for (let i = 0; i < allDateFormats.length; i++) { // console.log(allDateFormats[i]);
      var reverseDate = reverseString(allDateFormats[i]);
      if (reverseDate === allDateFormats[i]) {
         flag = 'true';
         break;
      } else
         continue;

   }
   return flag;
   // console.log(flag);
  //  if(flag==='true')
  //  return flag;
  //  else
  //  {   
  //     var nextPalindrome = getNextPalindrome(date);
  //     return nextPalindrome;
  //  } 

}




function isLeapYear(year) {
   if (year % 400 === 0)
      return true;
   if (year % 100 === 0)
      return false;
   if (year % 4 === 0)
      return true;
}



function getNextDate(date) {
   var day = date.day + 1;
  // console.log(day);
   var month = date.month;
   var year = date.year;
   // months----[0-11]
   var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   if (month === 2) {
      //check for leap year
      if (isLeapYear(year)) {
         if (day > 29) {
            day = 1;
            month++;
         }
      } else {
         if (day > 28) {
            day = 1;
            month++;
         }
      }
   } else {
      if (day > daysInMonth[month - 1]) {
         day = 1;
         month++;
      }
      if (month > 12) {
         month = 1;
         year++;
      }
   }

return {
  day:day,
  month:month,
  year:year
};

}

function getNextPalindrome(date) 
{
    
    var counter=0;
     var nextDate=getNextDate(date);
    while(1)
    {   counter++;
       var isPalin= checkPalindrome(nextDate);
       if(isPalin === 'true')
       {
        break;
       }
       nextDate= getNextDate(nextDate);
    
      }
   return [counter,nextDate];
}


checkButton.addEventListener("click", checkPalindromeBirthday);


// var date = {
//    day: 11,
//    month: 2,
//    year: 2020,
// };
//console.log("hello");
// console.log(isPalindrome(date));
// console.log(getNextPalindrome(date));