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
        <Player player={player.player} score={player.score} />
      );
    });
    return (
      <table className="playerList table table-striped">
        {playerNodes}
      </table>
    );
  }
});

var PlayerForm = React.createClass({
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
      <form className="playerForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" ref="player" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var Player = React.createClass({
  render: function() {
    return (
      <tr className="player">
        <td className="playerplayer">
          {this.props.player}
        </td>
        <td className="playerScore">
          {this.props.score}
        </td>
      </tr>
    );
  }
});