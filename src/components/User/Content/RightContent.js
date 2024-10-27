import { useRef } from "react";
import Countdown from "./Countdown";

const RightContent = (props) => {
    const refDiv = useRef([]);

    const { dataQuiz } = props;
    const onTimeUp = () => {
        props.handleFinishQuiz();
    }
    const getClassQuestion = (question, index) => {
        // Check answered
        if (question && question.answers.length > 0) {
            let isAnswered = question.answers.find(ans => ans.isSelected == true);
            if (isAnswered) {
                return "question selected";
            }
        }
        return "question"
    }

    const handleClickQuestion = (question, index) => {
        props.setIndex(index);
        if (refDiv.current) {
            refDiv.current.map(item => {
                if (item && item.className === "question pushed") {
                    item.className = "question"
                }
            })
        }

        if (question && question.answers.length > 0) {
            let isAnswered = question.answers.find(ans => ans.isSelected == true);
            if (isAnswered) {
                return;
            }
        }
        refDiv.current[index].className = "question pushed"
    }

    return (
        <>
            <div className="main-timer">
                <
                    Countdown
                    onTimeUp={onTimeUp}
                />
            </div>
            <div className="main-question">
                {dataQuiz && dataQuiz.length > 0 &&

                    dataQuiz.map((item, index) => {
                        return (
                            <div
                                key={`question-check-${index + 1}`}
                                className={getClassQuestion(item, index)}
                                onClick={() => handleClickQuestion(item, index)}
                                ref={e => refDiv.current[index] = e}
                            >
                                {index + 1}

                            </div>
                        )
                    })

                }

            </div>
        </>
    )
}
export default RightContent;