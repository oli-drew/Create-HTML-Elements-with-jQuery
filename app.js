// As a user, I want to be greeted with a quote by an author when I open the page.

// It's done when the page dynamically displays a quote by an author and the author's name on load.
const parent = $("body");
const quoteElement = $("<h1>").appendTo(parent);
quoteElement.attr("id", "quote");
const authorElement = $("<h1>").appendTo(parent);
authorElement.attr("id", "author");

//  On page load do this
$(document).ready(() => {
  display("hi", "~Oli");
});

// Display on page
const display = (quote, author) => {
  quoteElement.text(quote);
  authorElement.text(author);
};
