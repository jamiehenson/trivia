var Quiz = React.createClass({
  render: function() {
    return(
      <div className = "quizwrap">
        <PlayerBox url="players.json" />
        <QuestionBox url="questions.json" />
      </div>
    );
  }
});

React.render(
  <Quiz />,
  document.getElementById('content')
);