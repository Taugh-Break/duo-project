///////////////////////////////////////////////////////////////////////////
var i = 0;
var quizs = [
    {
        q: "When did Tunisia got her independence?",
        s: ["1956","1960" ,"1950"],
    },

    {
        q: "Who kicked pluto out of the solar system?",
        s: ["Neil Degrasse Tyson", "Mike Degrasse Tyson", "Tesla"],
    },

    {
        q: "Who invented the telephone?",
        s: ["Alexander Graham Bell","Thomas Edison", "Madam Cury"],
    },

    {
        q: "Who won the 2018 FIFA World Cup?",
        s: ["France", "Germany", "Brazil"],
    },

    {
        q: "Who was the 1st president of the United States?",
        s: ["George Washington","John Quincy Adams","Theodore Roosevelt"],
    },

    {
        q: "Who took the championship of world boxing title in 2020",
        s: ["Tyson Fury","Mike Degrasse Tyson","Mohamed Ali Clay"],
    },

    {
        q: "when did the twin towers fall?",
        s: ["Sept. 11, 2001","Sept. 07, 2001","Sept. 01, 2001"],
    },

    {
        q: "when did steve jobs die?",
        s: ["5 octobre 2011","1 octobre 2015","12 octobre 2018"],
    },

    {
        q: "who freed the slaves in america?",
        s: ["President Lincoln","President Washington","President Biden"],
    }
 ]

///////////////////////////////////////////////////////////////////////////////
function displayQuiz() {
    var quiz = quizs[i]
    console.log(quiz.q)
    $("#question").html(quiz.q)
}

function displayBox() {
    var x= ''
    var arr = quizs[i].s
    for(var j=0;j<arr.length;j++){
         x=(j+1).toString();
        x='#'+x
        console.log(x)
    $(x).html(arr[j])
    }
    $('#boxx').prop('checked', false);
}

displayQuiz()
displayBox() 
///////////////////////////////////////////////////////////////////////////////
function nextQuestion(){
    i++
    displayQuiz()
   
    displayBox()
}
//////////////////////////////////////////////////////////////////////////////
$('#reload').click(function() {
location.reload();
});

////////////////////////////////////////////////////////////////////////////////


$("#isSelect").click(function () {
        
    alert($('input:radio[name=input]:checked').val());
            
    });






