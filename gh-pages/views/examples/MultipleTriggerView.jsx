var React = require("react");
var ReactMentions = require("react-mentions");

var MentionsMixin = require("../mixins/MentionsMixin");


var MentionsInput = ReactMentions.MentionsInput;
var Mention = ReactMentions.Mention;

// use first/outer capture group to extract the full entered sequence to be replaced
// and second/inner capture group to extract search string from the match
var emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/;
var wordBeginRegex = /(?:^|\s)((\b[a-zA-Z]+))$/;


module.exports = React.createClass({

  displayName: "MultipleTriggers",

  mixins: [ MentionsMixin ],

  getInitialState: function() {
    return {
      value: "pl[l[plp[l... ",
      convoId: 111
    };
  },

  render: function() {
    var mention;
    console.log('state');
    console.log('state', this.state.convoId);
    if(this.props.data.length) {
      mention = <Mention
            type="user"
            trigger="@"
            data={ this.props.data }
            renderSuggestion={this.renderSuggestion}
            onAdd={this.handleAdd}
            onRemove={this.handleRemove} />;
    }
    return (
      <div className="multiple-triggers">
        <h3>Multiple trigger patterns</h3>
        <p>Mention people using '@' + username or type an email address</p>
  llllll
        <div onclick={this.changeProp}>Chagne prop</div>

        <MentionsInput
          value={this.state.value}
          convoId={this.state.convoId}
            onKeyDown={this.onKeyDown}
            onChange={this.handleChange}
          markup="@[__display__](__type__:__id__)"
          placeholder={"Mention people using '@'"}>

          {mention}
          <Mention
            type="user"
            trigger={wordBeginRegex}
            data={ this.datla }
            renderSuggestion={this.renderSuggestion}/>
        </MentionsInput>
      </div>
    );
  },

  changeProp: function() {
    this.setState({
      convoId: 100
    });
  },

  datla: function(e) {
    if(e.length > 2) {

      e = e.toLowerCase();

      var r = [];

      for(var i = 0; i < this.props.data.length; i++) {
        var o = this.props.data[i];
        var x = o.display.toLowerCase();
        if(o.display.startsWith(e)) {
          r.push(o);
        }
      }

      return r;
    }
  },

  onKeyDown: function(event) {
    // Close tip
    if(event.keyCode == 13 ) {
      alert(event.target.value);
    }
  },

  key: function(e) {
    console.log(e);
  },

  handleRemove: function() {
    console.log("removed a mention", arguments);
  },

  handleAdd: function() {
    console.log("added a new mention", arguments);
  },

  renderSuggestion: function(id, display, search, highlightedDisplay) {
    return (
      <div className="user">
        { highlightedDisplay }
      </div>
    );
  },

  requestEmail: function(search) {
    return [
      { id: search, display: search }
    ];
  }

});