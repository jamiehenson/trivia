var PlayerBox = React.createClass({displayName: "PlayerBox",
  getInitialState: function() {
    return {data: []};
  },
  handlePlayerSubmit: function(player) {
    var players = this.state.data;
    var newPlayers = players.concat([player]);
    this.setState({data: newPlayers});
  },
  render: function() {
    return (
      React.createElement("div", {className: "players"}, 
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
        React.createElement(Player, {name: player.name, score: player.score, colour: player.colour})
      );
    });
    return (
      React.createElement("table", {className: "playerList table table-striped"}, 
        playerNodes
      )
    );
  }
});

var Colours = [
  "red",
  "cyan",
  "green",
  "white",
  "magenta",
  "yellow",
  "grey"
]

var PlayerForm = React.createClass({displayName: "PlayerForm",
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.getDOMNode().value.trim();
    if (!name) {
      return;
    }
    console.log($('#playerTable tr').length);
    this.props.onPlayerSubmit({name: name, score: 0, colour: Colours[$('.playerList tr').length]});
    this.refs.name.getDOMNode().value = '';
  },
  render: function() {
    return (
      React.createElement("form", {className: "playerForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", placeholder: "Name", ref: "name"}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  }
});

var Player = React.createClass({displayName: "Player",
  render: function() {
    var playerStyle = {
      backgroundColor: this.props.colour
    };

    return (
      React.createElement("tr", {className: "playerRow", style: playerStyle}, 
        React.createElement("td", {className: "playerName"}, 
          this.props.name
        ), 
        React.createElement("td", {className: "playerScore"}, 
          this.props.score
        )
      )
    );
  }
});