# TOP-ImageSlider

# top-drop-down-menu aka my first npm package

## What is it?

A Slideshow Plugin that can quickly be used in websites. It can be improved by adding many animations and tweaks but I'm ok with it like this for now.

## See it Live

[Demo](https://mohamedbechirmejri.github.io/TOP-ImageSlider/)

## installation

`npm install @mohamedbechirmejri/TOP-ImageSlider`

## How to use

### 1 - add this to your html file

```html
<div id="carousel">
  <div id="imgs-container"></div>
  <button id="nav-left" class="img-nav-button"></button>
  <button id="nav-right" class="img-nav-button"></button>
</div>
```

### 2 - import main.js into your project

`import '@mohamedbechirmejri/TOP-ImageSlider/src/main'`

### 3- call the function ImageSlider

`ImageSlider(arrayOfImages, timeout)`

`arrayOfImages` should look like this `[
    { url: 'https://i.picsum.photos/id/76/900/900.jpg?hmac=ylw9j9vC3BlL-ywWPpWXNxuBVn_nFqHSAmMCGO_gtS8', },
    { url: 'https://i.picsum.photos/id/530/900/900.jpg?hmac=csvEV8oxpqw5UTku5vZV82oZrLN_CEsDIcrUhx8ubKc', },
    { url: 'https://i.picsum.photos/id/527/900/900.jpg?hmac=cm6DDtenydFADP7OsHFCKnZO4xIcoQ3_24S3NAQ9iWc', },
    { url: 'https://i.picsum.photos/id/1/900/900.jpg?hmac=2IzxJtcEB5JapKj300sT1OiXGkUtDvtSX_aF1p3Li9Y', },
    { url: 'https://i.picsum.photos/id/233/900/900.jpg?hmac=6DKx1SCQQGBKJ_Vdr5HejihbuoY_B5dPlMNESpf20Vc', }, ]`

## Brainstorm

- ~~Create a function that takes an array of objects, each having a 'url' property with a value linking to the img src.~~
- ~~Then for each obj add an img element to the DOM with obj.url as it's source.~~
- ~~img elements should go inside an images div that has a fixed position on top of everything and takes up the whole page space.~~
- ~~imgs should have an id based on their position in array.~~
- ~~the imgs should be invisible by default except for the first one and when we click the nav buttons we give the visibility to the next img.~~
  - ~~should get the id of the current img, and give the .visible class to the item that has id +/- 1.~~
  - ~~the ids should be data-ids so we can use them in multiple places~~
- ~~animate the imgs when appearing/disappearing.~~
- ~~put a small bar on the bottom that lists all the images.~~
  - ~~should have the same data-ids as the imgs~~
  - ~~should have a class that differentiates them from the main imgs~~
  - ~~the current img should be highlighted to show where the user is~~
  - ~~pressing one of the imgs should change the picture~~
- ~~every 5 seconds the imgs change automatically~~
  - ~~should be a simple click on the right nav button~~
  - ~~if the current img id == array.length then change the picture to id == 1~~
  - ~~the number of seconds should be a variable so the dev can choose how many seconds they want the slideshow to take~~
- ~~change background of carousel to to a blurred version of current img.~~
