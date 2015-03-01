var PlayerBox = React.createClass({
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
      <div className="players">
        <PlayerList data={this.state.data} />
        <PlayerForm onPlayerSubmit={this.handlePlayerSubmit} />
      </div>
    );
  }
});

var PlayerList = React.createClass({
  render: function() {
    var playerNodes = this.props.data.map(function (player) {
      return (
        <Player name={player.name} score={player.score} colour={player.colour}/>
      );
    });
    return (
      <table className="playerList table table-striped">
        {playerNodes}
      </table>
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

var PlayerForm = React.createClass({
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
      <form className="playerForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" ref="name" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var Player = React.createClass({
  render: function() {
    var playerStyle = {
      backgroundColor: this.props.colour
    };

    return (
      <tr className="playerRow" style={playerStyle}>
        <td className="playerName">
          {this.props.name}
        </td>
        <td className="playerScore">
          {this.props.score}
        </td>
      </tr>
    );
  }
});