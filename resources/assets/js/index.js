const app = angular.module('app', []);

app.controller('keiji', function($rootScope) {
  'ngInject';

  this.taxi = 10;
  this.bus = 8;
  this.train = 4;

  this.plus = (name)=> {
    this[name]++;
    $rootScope.$emit('keiji-plus', name);
  };

  this.minus = (name)=> {
    this[name]--;
    $rootScope.$emit('keiji-minus', name);
  };
});

app.controller('kaitou', function($rootScope) {
  'ngInject';

  this.taxi = 4;
  this.bus = 3;
  this.train = 3;
  this.black = 5;
  this.double = 2;

  $rootScope.$on('keiji-plus', (e, name)=> this[name]--);
  $rootScope.$on('keiji-minus', (e, name)=> this[name]++);

  this.consumes = [];

  this.consume = (name)=> {
    this.consumes.push(name);
    this[name]--;
  };

  this.unconsume = ()=> {
    const name = this.consumes.pop();
    this[name]++;
  };

  this.undouble = ()=> {
    this.double++;
  };

  this.usedouble = ()=> {
    this.double--;
  };

  this.isOpen = (count)=> {
    return [3,8,13,18,24].includes(count);
  };
});
