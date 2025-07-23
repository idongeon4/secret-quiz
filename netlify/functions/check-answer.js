exports.handler = async function(event) {
    const data = JSON.parse(event.body);
    const userAnswer = data.answer;
    const correctAnswer = "3";
    return {
        statusCode: 200,
        body: JSON.stringify({ isCorrect: (userAnswer === correctAnswer) })
    };
};
