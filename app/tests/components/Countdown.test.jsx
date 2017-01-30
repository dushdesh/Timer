var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');


describe('Countdown', () => {
  it("should exists", () => {
    expect(Countdown).toExist();
  });
  
  describe('handleStartTime', () => {
    it('should set state to started and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleStartTime(10);
      
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });
    
    it('should not go down to negative time', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleStartTime(1);
      
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3000)
    });
    
    it('should pause countdown on paused status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleStartTime(3);
      countdown.handleStatusChange('paused');
      
      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001)
    });
    
    it('should reset countdown on staopped status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleStartTime(3);
      countdown.handleStatusChange('stopped');
      
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001)
    });
  });
});

