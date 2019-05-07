var submitButton = document.querySelector('#SubmitButton'); // targets the submit button

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // prevents the form from being sent to the server
                         // (keeps it client/browser-side and prevents
                         // the browser from awkward reloading)
   var inputName = document.querySelector('#InputName'); // targets the username input

   var name = inputName.value;

   var error = document.querySelector('#error'); // targets the error message
  var result = document.querySelector('#result'); // targets the success message

   error.classList.remove("hidden")
   error.classList.add("hidden")

   console.log([name])
   ///mkubera@borderscollege.ac.uk
   var winners = [
     {year: 2010, name: "Randy Orton"},
     {year: 2011, name: "CM Punk"},
     {year: 2012, name: "CM Punk"},
     {year: 2013, name: "Daniel Bryan"},
     {year: 2014, name: "Brock Lesnar"},
     {year: 2015, name: "Seth Rollins"},
     {year: 2016, name: "AJ Styles"},
     {year: 2017, name: "AJ Styles"},
     {year: 2018, name: "AJ Styles"},
   ]

var number = winners.filter(function(winner) { return winner.name === name}).length

console.log([number])

   alert (name + " Has been PWI Wrestler Of The Year " + number + " times");
})
