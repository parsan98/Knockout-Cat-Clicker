var allCats = [
  {
    "name" : "Crookshanks",
    "image" : "https://vignette.wikia.nocookie.net/harrypotter/images/7/71/CrookshanksPottermore.png",
    "counter" : 0,
    "catNickname" : ['Hermione\'s Cat', 'The Granger Cat', 'Orange kitty']
  },
  {
    "name" : "Garfield",
    "image" : "https://png.pngtree.com/element_origin_min_pic/16/11/24/ea803516a485cd425ce348ea32075b87.jpg",
    "counter" : 0,
    "catNickname" : ['Davis Cat', 'Lazy tabby']
  },
  {
    "name" : "Sylvester",
    "image" : "https://img00.deviantart.net/7664/i/2002/40/9/5/silly_sylvester.jpg",
    "counter" : 0,
    "catNickname" : ['Tweety\'s nemesis', 'Silly black thing']
  },
  {
    "name" : "Tom",
    "image" : "https://png2.kisspng.com/20180406/row/kisspng-tom-cat-tom-and-jerry-nibbles-cartoon-tom-and-jerry-5ac786490a90e8.2434223615230254810433.png",
    "counter" : 0,
    "catNickname" : ['Thomas', 'Jasper']
  },
  {
    "name" : "Hello Kitty",
    "image" : "http://media.comicbook.com/uploads1/2015/02/hello-kitty-124499.jpg",
    "counter" : 0,
    "catNickname" : ['Girliest entry here']
  },
  {
    "name" : "Cheshire Cat",
    "image" : "https://cdn.shopify.com/s/files/1/2527/4000/products/cheshire-cat-alice-in-wonderland_2048x.jpg",
    "counter" : 0,
    "catNickname" : ['The cat from wonderland', 'Mad cat']
  }
];

var ViewModel = function () {
  var self = this;
  this.catList = ko.observableArray([]);

  allCats.forEach(function(cat){
    self.catList.push(new Cat(cat));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() +1);
  };

  this.changeCat = function(clickedItem) {
    self.currentCat(clickedItem);
  }
}

var Cat = function(data) {
  this.clickCount = ko.observable(data.counter);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.image);
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
  this.catNickname = ko.observableArray(data.catNickname);
}

ko.applyBindings(new ViewModel());
