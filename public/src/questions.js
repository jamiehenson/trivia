var QuestionBox = React.createClass({displayName: "QuestionBox",
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
      return React.createElement("div", null, "Loading...");
    }
    else {
      return (
        React.createElement("div", {className: "questions"}, 
          this.state.data.categories.people[this.state.qval], 
          React.createElement(QuestionButtons, {onButtonPress: this.nextQuestion})
        )
      );
    }
  }
});

var QuestionButtons = React.createClass({displayName: "QuestionButtons",
  handlePress: function() {
    this.props.onButtonPress();
  },
  render: function() {
    return (
      React.createElement("div", {className: "skip"}, 
        React.createElement("button", {type: "button", className: "btn btn-default btn-sm", onClick: this.handlePress}, 
          React.createElement("span", {className: "glyphicon glyphicon-star", "aria-hidden": "true"}), " Skip"
        )
      )
    );
  }
});