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
        React.createElement(Player, {player: player.player, score: player.score})
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
    var player = this.refs.player.getDOMNode().value.trim();
    if (!player) {
      return;
    }
    this.props.onPlayerSubmit({player: player, score: 0});
    this.refs.player.getDOMNode().value = '';
  },
  render: function() {
    return (
      React.createElement("form", {className: "playerForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", placeholder: "Name", ref: "player"}), 
        React.createElement("input", {type: "submit", value: "Post"})
      )
    );
  }
});

var Player = React.createClass({displayName: "Player",
  render: function() {
    return (
      React.createElement("tr", {className: "player"}, 
        React.createElement("td", {className: "playerplayer"}, 
          this.props.player
        ), 
        React.createElement("td", {className: "playerScore"}, 
          this.props.score
        )
      )
    );
  }
});