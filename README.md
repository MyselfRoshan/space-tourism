# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

### `Home` Page Preview

![](/screenshots/space-tourism-home.png)

### `Destination` Page Preview

![](/screenshots/space-tourism-destination.png)

### `Crew` Page Preview

![](/screenshots/space-tourism-crew.png)

### `Technology` Page Preview

![](/screenshots/space-tourism-technology.png)

### Links

- Solution URL: (https://space-tourism-livid-alpha.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript
- Sass custom properties
- Sass Mixins, loops

### What I learned

I learned how to make custom Sass map and convet it into a custom property for different viewports

```scss
$font-size: (
  mobile: (
    900: clamp(5rem, 13.6vw + 1rem, 9.375rem),
    800: 3.5rem,
    700: 1.5rem,
    600: 1rem,
    500: 1rem,
    400: 0.9375rem,
    300: 1rem,
    200: 0.875rem,
  ),
  tablet: (
    800: 5rem,
    700: 2.5rem,
    600: 1.5rem,
    500: 1.25rem,
    400: 1rem,
  ),
  desktop: (
    800: 6.25rem,
    700: 3.5rem,
    600: 2rem,
    500: 1.75rem,
    400: 1.125rem,
  ),
);

$breakpoints: (
  tablet: 35em,
  desktop: 48em,
);

@mixin mediaquery($device) {
  $screen-size: map-get($breakpoints, $device);
  @media (min-width: $screen-size) {
    @content;
  }
}
// Code for generating css custom property with sass
:root {
  @each $screensize, $font-sizes in $font-size {
    @if $screensize == mobile {
      @each $property, $value in $font-sizes {
        --fs-#{$property}: #{$value};
      }
    } @else if $screensize == tablet {
      @include mediaquery(tablet) {
        @each $property, $value in $font-sizes {
          --fs-#{$property}: #{$value};
        }
      }
    } @else {
      @include mediaquery(desktop) {
        @each $property, $value in $font-sizes {
          --fs-#{$property}: #{$value};
        }
      }
    }
  }
}
```

In this project I learned how to move between tabs with left and right arrow keys (i.e. <-, ->)

```js
tabLists.addEventListener('keydown', (e) => {
  const keydownLeft = 37;
  const keydownRight = 39;
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute('tabindex', -1);

    if (e.keyCode === keydownRight) {
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === keydownLeft) {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute('tabindex', 0);
    tabs[tabFocus].focus();
  }
});
```
