var wikiRandom = "http://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1"

var QuestionBox = React.createClass({displayName: "QuestionBox",
  loadQuestion: function() {
    $.ajax({
      url: wikiRandom,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
        console.log(data.query.random.title)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      React.createElement("h3", null, "DOG")
    );
  }
});

React.render(
  React.createElement(QuestionBox, null),
  document.getElementById('questions')
);