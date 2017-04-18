angular.
  module('firmApp').
  component('menu', {
    template:
        '<ul>' +
          '<li ng-repeat="menuItem in $ctrl.menuItems">' +
            '<a href="{{menuItem.link}}">{{menuItem.name}}</a>' +
          '</li>' +
        '</ul>',
    controller: function MenuListController() {
      this.menuItems = [
        {
          name: 'Firmy',
          link: ''
        }, {
          name: 'Produkty',
          link: '#!/product'
        }, {
          name: 'Faktury',
          link: '#!/invoice'
        }
      ];
    }
  });
