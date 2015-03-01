var Quiz = React.createClass({displayName: "Quiz",
  render: function() {
    return(
      React.createElement("div", {className: "quizwrap"}, 
        React.createElement(PlayerBox, {url: "players.json"}), 
        React.createElement(QuestionBox, {url: "questions.json"})
      )
    );
  }
});

React.render(
  React.createElement(Quiz, null),
  document.getElementById('content')
);