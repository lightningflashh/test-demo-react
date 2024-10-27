import Countdown from "./Countdown";

const RightContent = (props) => {
    const { dataQuiz } = props;
    const onTimeUp = () => {
        props.handleFinishQuiz();
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
                            <div key={`question-check-${index + 1}`} className="question">{index + 1}</div>
                        )
                    })

                }

            </div>
        </>
    )
}
export default RightContent;