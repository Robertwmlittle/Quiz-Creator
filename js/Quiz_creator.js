var qc = (function quizCreator(){
    function createTest(nameOfTest){
        var test = {
            [nameOfTest]:{

            }
        };

        return test;
    }
    function createSingleAnwerQuestion(question, answer, distractors ){
    var questionToReturn = {
        question:question,
        answer:answer,
        distractors:distractors
    }
    return questionToReturn;
    }

    return{
        createTest:createTest,
        createSingleAnwerQuestion:createSingleAnwerQuestion
    };
})();

var test = qc.createTest('bob'); 
test.bob.question1 = qc.createSingleAnwerQuestion('Why do birds suddenly appear', 'because you are near', ['Sandwhiches', 'Psycotic Space Nuns', 'Sasquatch']);
console.log(test);
