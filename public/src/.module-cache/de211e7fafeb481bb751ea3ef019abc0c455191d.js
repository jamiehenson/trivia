var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});

// var CommentList = React.createClass({
//   render: function() {
//     return (
//       <div className="commentList">
//         <Comment author="Pete Hunt">This is one comment</Comment>
//         <Comment author="Jordan Walke">This is *another* comment</Comment>
//       </div>
//     );
//   }
// });

// var CommentForm = React.createClass({
//   render: function() {
//     return (
//       <div className="commentForm">
//         Hello, world! I am a CommentForm.
//       </div>
//     );
//   }
// });

// var Comment = React.createClass({
//   render: function() {
//     return (
//       <div className="comment">
//         <h2 className="commentAuthor">
//           {this.props.author}
//         </h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('content')
);