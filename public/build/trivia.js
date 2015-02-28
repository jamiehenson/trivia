var converter = new Showdown.converter();

var PlayerBox = React.createClass({
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
      <div className="playerBox">
        <h1>Players</h1>
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
        <Player author={player.author} score={player.score} />
      );
    });
    return (
      <table className="playerList">
        {playerNodes}
      </table>
    );
  }
});

var PlayerForm = React.createClass({
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
      <form className="playerForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" ref="author" />
        <input type="text" placeholder="Score" ref="score" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var Player = React.createClass({
  render: function() {
    return (
      <tr className="player">
        <td className="playerAuthor">
          {this.props.author}
        </td>
        <td className="playerScore">
          {this.props.score}
        </td>
      </tr>
    );
  }
});

React.render(
  <PlayerBox url="players.json" />,
  document.getElementById('content')
);