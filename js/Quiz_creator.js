var qc = (function quizCreator() {
    function createTest(nameOfTest) {
        var test = {
            [nameOfTest]: {}
        };
        return test;
    }

    function createScoreRequirements(test, passingScore, failingScore) {
        if (typeof passingScore === 'number' && typeof failingScore === 'number') {
            test.score = {};
            test.score.currentScore = 0;
            test.score.passingScore = passingScore;
            test.score.failingScore = failingScore;
        } else {
            console.error(`${passingScore} and ${failingScore} need to be a number`);
        }
    }

    function createSingleAnswerQuestion(question, answers, distractors, questionWorth) {
        let questionDistractor = distractors;
        if (typeof questionWorth === 'number') {
            if (Array.isArray(distractors)) {
            let questionToReturn = {
            question: question,
            answers: {
                answer: answers,
                isClicked: false
            },
            Distractor: [],
            questionWorth: questionWorth,
            isCorrect: false
        };
        for (let i = 0; i < questionDistractor.length; i++) {
            questionToReturn.Distractor.push({
                distractor: questionDistractor[i],
                isClicked: false
            });
        }
                return questionToReturn;
            } else {
                console.error(`${distractors} is not an array, please enter your distractors as an array`);
                return `${distractors} is not an array, please enter your distractors as an array`;
            }
        } else {
            console.error(`On question "${question}" ${questionWorth} is not a number please change this argument to a number`);
            return `On question "${question}" ${questionWorth} is not a number please change this argument to a number`;
        }
    }

    function multipleSelectQuestion(question, answers, distractors, questionWorth) {
        let questionAnswers = answers;
        let questionDistractors = distractors;
        if (typeof questionWorth === 'number') {
            if (Array.isArray(answers) && Array.isArray(distractors)) {
                let questionToReturn = {
                question: question,
                Answers: [],
                Distractors: [],
                questionWorth: questionWorth,
                isCorrect: false
        };
            for (let i = 0; i < questionAnswers.length; i++) {
                questionToReturn.Answers.push({
                    answer: questionAnswers[i],
                    isClicked: false
                });
        }

            for (let i = 0; i < questionDistractors.length; i++) {
                questionToReturn.Distractors.push({
                    distractor: questionDistractors[i],
                    isClicked: false
                });
            }
                return questionToReturn;
            } else {
                console.error(`${answers} or ${distractors} must be entered as arrays`);
            }
        } else {
            console.error(`${questionWorth} is not a number please re enter this argument as a number`);
        }
        
    
    }

    function changeCorrectState(question) {
        if ([question].isCorrect === false) {
            [question].isCorrect = true;
        } else {
            [question].isCorrect = false;
        }
    }

    // function checkIfAnswerIsCorrect(test){
    //     if(test.answers){
    //         ///test to make sure this 
    //     }
    // }

    return {
        createTest: createTest,
        createScoreRequirements: createScoreRequirements,
        createSingleAnswerQuestion: createSingleAnswerQuestion,
        multipleSelectQuestion: multipleSelectQuestion,
        changeCorrectState: changeCorrectState
    };

})();
var test = qc.createTest('bob');
qc.createScoreRequirements(test.bob, 70, 69);
test.bob.question1 = qc.createSingleAnswerQuestion('Why do birds suddenly appear', 'because you are near', ['Sandwhiches', 'Psycotic Space Nuns', 'Sasquatch'], 10);
test.bob.question4 = qc.createSingleAnswerQuestion('What color is the sky', 'blue', ['bill', 'Jim Raynors Smile', 'Zerg Creep'], 'dog');
test.bob.question3 = qc.multipleSelectQuestion('What does Captain Picard Like?', ['Tea Earl Grey Hot', 'Riding Horses'], ['Children', 'Lots of Noise'], 23);
test.bob.question2 = qc.multipleSelectQuestion('what does the fox say', ['jim', 'phil'], ['howard', 'steven', 'devin'], 20);
//test.bob.question2.isCorrect = true;
qc.changeCorrectState(test.bob.question3);
//qc.changeCorrectState(test.bob.question2);

console.log(test.bob);