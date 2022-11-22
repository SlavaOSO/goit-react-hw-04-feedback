import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
// import PropTypes from 'prop-types';



export const Section = () => {
    
    const [goodS, setGood] = useState(0);
    const [neutralS, setNeutral] = useState(0);
    const [badS, setBad] = useState(0);

    const addFeedBackGood = (e) => { 
        switch (e) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                break;
        }
     };
    const countTotalFeedback = () => [goodS + neutralS + badS].reduce((previousValue, currentValue) => previousValue + currentValue + 0);
    const countPositiveFeedbackPercentage = () =>  Math.round((goodS / countTotalFeedback()*100)) + "%" ;
    const options = ['good', 'neutral', 'bad'];

    return (<section>
          
          <h1>Please leave feedback</h1>
            {<FeedbackOptions options={options} onLeaveFeedback={addFeedBackGood} />}
            {countTotalFeedback() === 0? <Notification message="There is no feedback" />:
            <Statistics
                good={goodS}
                neutral={neutralS}
                bad={badS}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
            />}
           </section>
       );
}

// export class Section extends React.Component {

//     static defaultProps = {
//         initialValue: 0,
//     }

//     static propTypes = {
//         title: PropTypes.string,
//     };

//     title = this.props.title;
    
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }
        
//     addFeedBackGood = (e) => {return this.setState((prevState) => ({ [e]: prevState[e] + 1 })) }; // не то 'е' о котором можно было подумать. 
        
//     countTotalFeedback = ()=> Object.values(this.state).reduce((previousValue, currentValue) => previousValue + currentValue + 0);//тотал 
    
//     countPositiveFeedbackPercentage = () =>  Math.round((this.state.good / this.countTotalFeedback()*100)) + "%" ; // процент

    
    
//     render() {
           
//         return (<section>
          
//           <h1>{this.title}</h1>
//             {<FeedbackOptions option={[...Object.keys(this.state)]} onLeaveFeedback={this.addFeedBackGood} />}
//             {this.countTotalFeedback() === 0? <Notification message="There is no feedback" />:
//             <Statistics
//                 good={this.state.good}
//                 neutral={this.state.neutral}
//                 bad={this.state.bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//             />}
//            </section>
//        );
//     }
// };