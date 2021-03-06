var React = require("react");
var Router = require("react-router");

var MultipleTrigger = require("./examples/MultipleTriggerView");
var SingleLine = require("./examples/SingleLineView");
var Advanced = require("./examples/AdvancedView");


var users = [
  {
    id: "johndoe",
    display: "John Doe"
  },
  {
    id: "johndoe",
    display: "verylong"
  },
  {
    id: "joesmoe",
    display: "Joe Smoe"
  }
];

module.exports = React.createClass({

  displayName: "Examples",


  render: function() {
    return (
      <div className="examples">
        <div className="row">
          <div className="col-lg-12">
            <MultipleTrigger data={ users } />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <SingleLine data={ users } />
          </div>
          <div className="col-md-6">ッッッk＜＜テxt
          <textarea>kkkk</textarea>
            <Advanced data={ users } />
          </div>
        </div>
      </div>
    );
  }

});