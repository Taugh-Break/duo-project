///////////////////////////////////////////////////////////////////////////
var i = 0;
var quizs = [
    {
        q: "When did Tunisia got her independence?",
        s: ["1956","1960" ,"1950"],
        c: 1
    },

    {
        q: "Who kicked pluto out of the solar system?",
        s: ["Neil Degrasse Tyson", "Mike Degrasse Tyson", "Tesla"],
        c: 0
    },

    {
        q: "Who invented the telephone?",
        s: ["Alexander Graham Bell","Thomas Edison", "Madam Cury"],
        c: 2
    },

    {
        q: "Who won the 2018 FIFA World Cup?",
        s: ["France", "Germany", "Brazil"],
        c: 0
    },

    {
        q: "Who was the 1st president of the United States?",
        s: ["George Washington","John Quincy Adams","Theodore Roosevelt"],
        c: 1
    },

    {
        q: "Who took the championship of world boxing title in 2020",
        s: ["Tyson Fury","Mike Degrasse Tyson","Mohamed Ali Clay"],
        c: 1
    } ]

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






