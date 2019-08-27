# Responsive Table with Swipe Slider

Make any table as a slider on responsive view

## Getting Started

Now you can turn any table into swipeable slider for both desktop and mobile devices.

### jQuery and jQuery mobile

This plugin needs jQuery and JQuery mobile

```
<link rel="stylesheet" href="https://code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.min.css">

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script src="https://code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.min.js"></script>

```

### Installing

Installing is the most easiest way.

you just need to add the CSS library

```
<link rel="stylesheet" href="./tableJS-production.css">
```

And the js library

```
<script scr="./tableJS-production.js">
```

And that's it. Now you are ready for initializing.

## Initializing

It's petty simple

```
 jQuery('table').TableJS();
```

## Options

```
 jQuery('table').TableJS({

     // options goes here
    // ----

 });

```
| Options  | Default value | Desctiption |
| :-------: | :-------: | :----------- |
|   `gap`   |   70    | **integer :**  Gap from left and right of the active item |
|   `activeColl`   |   3    | **integer :**    active Item number  |
|   `navDots`   |     false   |   **boolen :** true or false to active the dots    |
|   `initResolution`  |   640     | **integer :** initialize tableJS from the resolution|
|   `navText`     |   `"<span>Prev</span>", "<span>Next</span>"`   | **array :** ["Previous item", "Next item"] |




## Built on top of

* [jQuey](https://code.jquery.com) - The main library   
* [jQuery Mobile](https://jquerymobile.com/) - For swipe support

## Versioning

Current version: 1.0.0 

## Authors

* **Ranit Majumder** - *Main Developer* - [facebook](https://facebook.com/ranit.majumder)

## License

This project is licensed under the MIT License