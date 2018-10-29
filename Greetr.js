( function(global, $) {

  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }

  var supportedLangs = ['en', 'sk', 'hu'];

  greetings = {
    en: 'Hello',
    sk: 'Ahoj',
    hu: 'Heló'
  };

  formalGreetings = {
    en: 'Greetings',
    sk: 'Dobrý deň',
    hu: 'Udvozlett'
  };

  var logMessages = {
    en: 'Logged in',
    sk: 'Prihlaseny',
    hu: 'Bejelentkezve'
  }

  Greetr.prototype = {

    fullName: function() {
      return this.firstname + ' ' + this.lastname;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid Language';
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstname + '.';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.firstname + ' ' + this.lastname;
    },

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

    log: function() {
      if(console) {
        console.log(logMessages[this.language] + ':' + this.fullName())
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;

      this.validate();

      return this;

    }
  };

  Greetr.init = function(firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';

  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
