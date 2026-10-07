# Counter

A simple counter built with HTML, CSS and plain JavaScript.

**Try it: <https://walteraggor.github.io/counter/>**

Three buttons decrease, reset and increase the number. The number changes color as it moves: green above zero, red below zero and dark grey at zero.

## Run it on your own computer

There is nothing to install or build. Download the files and open `index.html` in a browser.

```bash
git clone https://github.com/walteraggor/counter.git
cd counter
```

Then double-click `index.html`, or run `start index.html` on Windows or `open index.html` on macOS.

## How it works

| File | Role |
|---|---|
| `index.html` | The page: a heading, the number and three buttons |
| `styles.css` | Layout, colors and button styles, with the shared values kept in CSS variables |
| `app.js` | The counter logic |

`app.js` keeps the count in a single variable. Every button has the class `btn` plus one of `decrease`, `reset` or `increase`. The same click handler is attached to all three buttons. It checks which class the clicked button has, updates the count and calls `showCount()`.

`showCount()` writes the number to the page and gives it the class `positive` or `negative`, or neither at zero. The colors themselves are in `styles.css`, so the script decides what state the number is in and the stylesheet decides how that state looks.

The number is marked with `aria-live`, so a screen reader reads it out each time it changes.
