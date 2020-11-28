var name;
var count=0;
var random=Math.floor(Math.random()*12);
que=["Will I get the promotion at work?","Do I need to change my diet?",
     "Should I avoid anything to live a healthy lifestyle",
     "Should I change my career?",
     "Am I in the right career path?",
     "Am I going to get the promotion in my job?",
     "Will I get money from somewhere?",
      "Will I get a sickness or disease?",
      "Will I live a long life?",
      "Will I have friends if I move away?",
      "Is it a good idea for me to start my own business?"
    ];
ans=["It is certain.", 
      "It is decidedly so",
      "Without a doubt",
      "Yes – definitely.",
      "As I see it, yes.",
      " Very doubtful.",
      "My sources say no.",
      "My reply is no.",
      " Cannot predict now.",
      " Ask again later.",
      "Most likely.",
      "Reply hazy, try again."
    ];

function displayName()
{   
   name=document.getElementById('username').value;

   document.getElementById('usernames').innerHTML=" Hello " + name + " ! ";

  
	document.getElementById('interest').innerHTML="Do you want to continue ?";
	document.getElementById('response').style.display="block";
 
    document.getElementById('form').style.display="none";
  return false;
}

function yes()
{
    document.getElementById('back').style.display="block";
    document.getElementById('back').innerHTML="Check Your Future";
    document.getElementById('showquestion').style.display="block";
   
   return false;
}

function no()
{
	document.getElementById('user').style.display="none";
 	
 	document.getElementById('response').style.display="none";
 	document.getElementById('showquestion').style.display="none";
 	document.getElementById('back').style.display="block";
 	document.getElementById('back').style.marginTop="15%";
 	document.getElementById('back').innerHTML="Thank you " +name+ " for visting  Our website.";
 	name="";
 
  return false;
}


function showquestion()
{   document.getElementById('form').style.display="none";
    document.getElementById('back').style.display="none";
    document.getElementById('user').style.display="none";
    document.getElementById('response').style.display="none";
    document.getElementById('showquestion').style.display="none";
    document.getElementById('questiondiv').style.display="block";
	var question=document.getElementById('question');
	question.style.display="block";

	document.getElementById("q1").innerHTML=que[count];
    
    var random=Math.floor(Math.random()*12); 
	setTimeout(function()
      {
         document.getElementsByClassName("loader")[0].style.display="none";
         document.getElementById('answer').style.display="block";
         document.getElementById('answer').innerHTML=ans[random];
      },2000);

  return false;
}

function nextquestion()
{   
    document.getElementById('answer').style.display="none";
    document.getElementsByClassName('loader')[0].style.display="block";
	 count=count+1;
      if(count<que.length)
      {
	     document.getElementById("q1").innerHTML=que[count];

      }
      var random=Math.floor(Math.random()*12);
      setTimeout(function()
      {
      	 document.getElementsByClassName('loader')[0].style.display="none";
         document.getElementById('answer').style.display="block";
         document.getElementById('answer').innerHTML=ans[random];
      },2000);


}
function showanswer()
{   document.getElementById('nextquit').style.display="none";
    document.getElementById('restart').style.display="block";
	document.getElementById('queans').style.display="none";
	document.getElementById('quit').style.display="block";
	document.getElementById('quit').innerHTML="Oops Try again !";
}
function back()
{
	location.reload();
}