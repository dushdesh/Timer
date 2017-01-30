var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  
  getInitialState: function () {
    return (
      {
        countdownStatus: 'paused',
        count: 0
      }
    );  
  },
  
  componentDidUpdate: function (prevProps, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus)  {
      switch(this.state.countdownStatus){
        case 'started': 
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
      }
    }
  },
  
  componentWillUnmount: function () {
    clearInterval(this.timer);  
  },
  
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({count: newCount})
    }, 1000);
  },
  
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  
  render: function () {
    var {countdownStatus, count} = this.state;
    return (
      <div> 
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countdownStatus === 'stopped' ? 'paused' : countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;