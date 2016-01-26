var React = require('react');
var Stream = require('./Stream.react.jsx');
// var Collection = require('./Collection.react.jxs');

var Application = React.createClass({

  getInitialState: function () {
    return {
      collectionTweets: {}
    };
  },

  addTweetToCollection: function (tweet) {
    var collectionTweets = this.state.collectionTweets;

    collectionTweets[tweet.id] = tweet;

    this.setState({
      collectionTweets: collectionTweets
    });
  },

  removeTweetFromCollection: function (tweet) {
    var collectionTweets = this.state.collectionTweets;

    delete collectionTweets[tweet.id];

    this.setState({
      collectionTweets: collectionTweets
    });
  },

  removeAllTweetsFromCollection: function () {
    this.setState({
      collectionTweets: {}
    });
  },

  render: function () {
      
            // <Collection
            //   tweets={this.state.collectionTweets}
            //   onRemoveTweetFromCollection={this.removeTweetFromCollection}
            //   onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
                  
    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-4 text-center">

            <Stream onAddTweetToCollection={this.addTweetToCollection} />

          </div>
          <div className="col-md-8">
          
            <p>Collection</p>
            
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Application;