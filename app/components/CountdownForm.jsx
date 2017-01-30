var React = require('react');

var CountdownForm = React.createClass({
  submitStartTime: function (e) {
    e.preventDefault();
    
    var strSeconds = this.refs.seconds.value;
    
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onStartTime(parseInt(strSeconds, 10));
    }
  },
  
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.submitStartTime} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;