import React from "react";
import { Component } from "react";
import Section from "./components/Section";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";
import Feedback from "./components/Feedback/Feedback";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = (name) => () => {
    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);

    return (
      <>
        <Section title={"Please leave feedback"}>
          <Feedback
            onGood={this.onBtnClick("good")}
            onNeutral={this.onBtnClick("neutral")}
            onBad={this.onBtnClick("bad")}
          />
        </Section>
        <Section title={"Statistics"}>
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
