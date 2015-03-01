var PlayerBox = React.createClass({displayName: "PlayerBox",
  getInitialState: function() {
    return {data: []};
  },
  loadPlayersFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadPlayersFromServer();
  },
  handlePlayerSubmit: function(player) {
    var players = this.state.data;
    var newPlayers = players.concat([player]);
    this.setState({data: newPlayers});
  },
  render: function() {
    return (
      React.createElement("div", {className: "playerBox"}, 
        React.createElement(PlayerList, {data: this.state.data}), 
        React.createElement(PlayerForm, {onPlayerSubmit: this.handlePlayerSubmit})
      )
    );
  }
});

var PlayerList = React.createClass({displayName: "PlayerList",
  render: function() {
    var playerNodes = this.props.data.map(function (player) {
      return (
        React.createElement(Player, {author: player.author, score: player.score})
      );
    });
    return (
      React.createElement("table", {className: "playerList table table-striped"}, 
        playerNodes
      )
    );
  }
});

var PlayerForm = React.createClass({displayName: "PlayerForm",
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var score = this.refs.score.getDOMNode().value.trim();
    if (!score || !author) {
      return;
    }
    this.props.onPlayerSubmit({author: author, score: score});
    this.refs.author.getDOMNode().value = '';
    this.refs.score.getDOMNode().value = '';
  },
  render: function() {
    return (
      React.createElement("form", {className: "playerForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", placeholder: "Name", ref: "author"}), 
        React.createElement("input", {type: "text", placeholder: "Score", ref: "score"}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  }
});

var Player = React.createClass({displayName: "Player",
  render: function() {
    return (
      React.createElement("tr", {className: "player"}, 
        React.createElement("td", {className: "playerAuthor"}, 
          this.props.author
        ), 
        React.createElement("td", {className: "playerScore"}, 
          this.props.score
        )
      )
    );
  }
});

React.render(
  React.createElement(PlayerBox, {url: "players.json"}),
  document.getElementById('players')
);