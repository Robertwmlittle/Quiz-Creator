// What this library will do 
// 1.   get the name of the test and and have the name of the test be the container for the main test data
// 2.   Create an object that contains the question, answer, and the distractors as an array and push to the main test container
// 2.1  Be able to allow the user to create single Answer questions and multiple answer questions
// 3    Create a function that checks the answer and returns true 
// 4    Create the ability for the user to define a score for the test on the test object
// 5    Create a function that will allow the user to define what is a passing score and what is not a passing score
var qc = (function quizCreator(){
    function createTest(nameOfTest){
        var test = {
            [nameOfTest]:{}
        };
        return test;
    }  
    function createScoreRequirements(test ,passingScore, failingScore){
        if(typeof passingScore === 'number' && typeof failingScore === 'number'){
        test.score = {};
        test.score.currentScore = 0;
        test.score.passingScore = passingScore;
        test.score.failingScore = failingScore;
        }else{
            console.log(`${passingScore} and ${failingScore} need to be a number`);
        }
    }
    function createSingleAnwerQuestion(question, answer, distractors ){
    var questionToReturn = {
        question:question,
        answer:answer,
        distractors:distractors
    };
    if(Array.isArray(distractors)){
    return questionToReturn;
    }else{
        console.log(`${distractors} is not an array, please enter your distractors as an array, your question is currently set to undefined as a result`);
    }
    }
    function multipleSelectQuestion(question, answers, distractors){
         var questionToReturn ={
             question:question,
             answers:answers,
             distractors:distractors
         };   
    if(Array.isArray(answers) && Array.isArray(distractors)){
        return questionToReturn;    
    }else{
        console.log(`${answers} or ${distractors} must be entered as arrays, your question is currently set to undefined`);
    } 
    }
    return{
        createTest:createTest,
        createScoreRequirements:createScoreRequirements,
        createSingleAnwerQuestion:createSingleAnwerQuestion,
        multipleSelectQuestion:multipleSelectQuestion
    };
})();
var test = qc.createTest('bob');
qc.createScoreRequirements(test.bob, 70, 69); 
test.bob.question1 = qc.createSingleAnwerQuestion('Why do birds suddenly appear', 'because you are near', ['Sandwhiches', 'Psycotic Space Nuns', 'Sasquatch']);
test.bob.question2= qc.createSingleAnwerQuestion('What color is the sky', 'blue', ['bill', 'Jim Raynors Smile', 'Zerg Creep']);
test.bob.question3 = qc.multipleSelectQuestion('What does Captain Picard Like?', ['Tea Earl Grey Hot', 'Riding Horses'], ['Children', 'Lots of Noise']);
console.log(test.bob);