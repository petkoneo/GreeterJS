;( function(global, $) {

  // Creating a 'new' Object
  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }

  // Never accessible supported languages outside of SCOPE
  var supportedLangs = ['en', 'sk', 'hu'];


  // Informal Greetings
  greetings = {
    en: 'Hello',
    sk: 'Ahoj',
    hu: 'Szia'
  };


  // Formal Greetings
  formalGreetings = {
    en: 'Greetings',
    sk: 'Dobry den',
    hu: 'Udvozlett'
  };

  // Message Logger
  var logMessages = {
    en: 'Logged in',
    sk: 'Prihlaseny',
    hu: 'Bejelentkezve'
  }

  // Adding Methods for prototype
  Greetr.prototype = {

    // Fullname creation Method
    fullName: function() {
      return this.firstname + ' ' + this.lastname;
    },

    // Validation Method for languages
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid Language';
      }
    },

    // Informal Greeting method
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstname + '.';
    },

    // Formal greeting method
    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.firstname + ' ' + this.lastname;
    },

    // Chainable greet function with parameter of true false
    greet: function (formal) {
      var msg;

      if(formal) {
        msg = this.formalGreeting();
      }else {
        msg = this.greeting();
      }

      if(console) {
        console.log(msg);
      }

      // Makeing it chainable
      return this;
    },

    // Chainable log function for console logging
    log: function() {
      if(console) {
        console.log(logMessages[this.language] + ': ' + this.fullName())
      }

      return this;
    },

    // Chainable language setter function
    setLang: function(lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    // Chainable greeting for JQUERY
    HTMLGreeting: function(selector, formal) {
      if(!$) {
        throw 'Jquery not loaded!';
      }

      if(!selector) {
        throw 'Missing jQuery Selector!';
      }

      var msg;

      if(formal) {
        msg = this.formalGreeting();
      }else {
        msg = this.greeting();
      }

      $(selector).html(msg)

      return this
    }
  };


  // Creating of the actual object
  Greetr.init = function(firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';

    self.validate();

  }

  // No new Keyword needed === trick from jQuery
  Greetr.init.prototype = Greetr.prototype;

  // Attached the greeting to the global (window) object
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
