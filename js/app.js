var ViewModel = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.imgAttribution = ko.observable('SoonToBeDeleted');
  this.incrementCounter = function() {
    this.clickCount(this.clickCount() +1);
  };
  this.catLevel = ko.computed(function() {
    if (this.clickCount() < 10) {
      return "Neonate";
    } else if (this.clickCount() < 20) {
      return "Infant";
    } else if (this.clickCount() < 30) {
      return "Toddler";
    } else if (this.clickCount() < 40) {
      return "Child";
    } else if (this.clickCount() < 50) {
      return "Teen";
    } else {
      return "Adult";
    }
  }, this);
}

ko.applyBindings(new ViewModel());
