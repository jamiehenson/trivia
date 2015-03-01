var Question = React.createClass({
  getInitialState: function() {
    return {data: null};
  },
  loadQuestionsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
        this.nextQuestion();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadQuestionsFromServer();
  },
  nextQuestion: function() {
    var questionVal = Math.floor(0 + Math.random() * this.state.data.categories.people.length)
    this.setState({qval: questionVal});
  },
  render: function() {
    if (!this.state.data) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="question">
          {this.state.data.categories.people[this.state.qval]}
          <QuestionButtons onButtonPress={this.nextQuestion} />
        </div>
      );
    }
  }
});

var QuestionButtons = React.createClass({
  handlePress: function() {
    this.props.onButtonPress();
  },
  render: function() {
    return (
      <div className="skip">
        <button type="button" className="btn btn-default btn-sm" onClick={this.handlePress}>
          <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Skip
        </button>
      </div>
    );
  }
});

React.render(
  <Question url="questions.json" />,
  document.getElementById('questions')
);