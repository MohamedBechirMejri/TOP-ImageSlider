# TOP-ImageSlider

## Brainstorm

- ~~Create a function that takes an array of objects, each having a 'url' property with a value linking to the img src.~~
- ~~Then for each obj add an img element to the DOM with obj.url as it's source.~~
- ~~img elements should go inside an images div that has a fixed position on top of everything and takes up the whole page space.~~
- ~~imgs should have an id based on their position in array.~~
- ~~the imgs should be invisible by default except for the first one and when we click the nav buttons we give the visibility to the next img.~~
  - ~~should get the id of the current img, and give the .visible class to the item that has id +/- 1.~~
  - ~~the ids should be data-ids so we can use them in multiple places~~
- animate the imgs when appearing/disappearing.
- ~~put a small bar on the bottom that lists all the images.~~
  - ~~should have the same data-ids as the imgs~~
  - ~~should have a class that differentiates them from the main imgs~~
  - ~~the current img should be highlighted to show where the user is~~
  - ~~pressing one of the imgs should change the picture~~
- every 5 seconds the imgs change automatically
  - should be a simple click on the right nav button
  - ~~if the current img id == array.length then change the picture to id == 1~~
  - the number of seconds should be a variable so the dev can choose how many seconds they want the slideshow to take
