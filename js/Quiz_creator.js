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
    function createSingleAnwerQuestion(question, answer, distractors, questionWorth ){
    var questionToReturn = {
        question:question,
        answer:answer,
        distractors:distractors,
        questionWorth:questionWorth,
        isCorrect:false
    };
    if(typeof questionWorth === 'number'){
    if(Array.isArray(distractors)){
    return questionToReturn;
    }else{
        console.log(`${distractors} is not an array, please enter your distractors as an array, your question is currently set to undefined as a result`);
    }
    }else{
        console.log(`${questionWorth} is not a number please change this argument to a number, your qustion object is undefined`);
    }
    }
    function multipleSelectQuestion(question, answers, distractors, questionWorth){
         var questionToReturn ={
             question:question,
             answers:answers,
             distractors:distractors,
             questionWorth:questionWorth,
             isCorrect:false
         };   
    if(typeof questionWorth === 'number'){
    if(Array.isArray(answers) && Array.isArray(distractors)){
        return questionToReturn;    
    }else{
        console.log(`${answers} or ${distractors} must be entered as arrays, your question is currently set to undefined`);
    }
    }else{
        console.log(`${questionWorth} is not a number please re enter this argument as a number, your question object is undefined`);
    } 
    }
    function changeCorrectState(question){
        if(question.isCorrect === false){
        question.isCorrect = true;
        }else{
            question.isCorrect = false;
        }
    }
    return{
        createTest:createTest,
        createScoreRequirements:createScoreRequirements,
        createSingleAnwerQuestion:createSingleAnwerQuestion,
        multipleSelectQuestion:multipleSelectQuestion,
        changeCorrectState:changeCorrectState
        
    };

})();
var test = qc.createTest('bob');
qc.createScoreRequirements(test.bob, 70, 69); 
test.bob.question1 = qc.createSingleAnwerQuestion('Why do birds suddenly appear', 'because you are near', ['Sandwhiches', 'Psycotic Space Nuns', 'Sasquatch'], 10);
test.bob.question2= qc.createSingleAnwerQuestion('What color is the sky', 'blue', ['bill', 'Jim Raynors Smile', 'Zerg Creep'], 'two');
test.bob.question3 = qc.multipleSelectQuestion('What does Captain Picard Like?', ['Tea Earl Grey Hot', 'Riding Horses'], ['Children', 'Lots of Noise'], 23);
//test.bob.question2.isCorrect = true;
qc.changeCorrectState(test.bob.question3);
//qc.changeCorrectState(test.bob.question2);

console.log(test.bob);