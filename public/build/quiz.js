var Quiz = React.createClass({
  render: function() {
    return(
      <div className = "quizwrap">
        <PlayerBox />
        <QuestionBox url="questions.json" />
      </div>
    );
  }
});

React.render(
  <Quiz />,
  document.getElementById('content')
);