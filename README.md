# JavaScript Assessment

For this assignment, we'll be working with an Instagram-style domain. We have two models - Image and Comment.
For our purposes, an Image has many Comments, and a Comment belongs to an Image.

## Topics

+ Class vs Instance methods in ES6
+ Object Relationships
+ DOM manipulation with jQuery or vanilla JS
+ Event Listeners

## Notes

Your goal is to build out all of the methods listed in the deliverables. Do your best to follow JavaScript best practices.

To run your html:

- Inside your cloned down folder, in terminal, type `pwd` to get your full file path. Copy and paste that path into your browser url and include `/index.html` to the end of that path.

**To Submit** - once you've completed all the deliverables, please copy/paste your three class definitions into the `solution.js` file. Please don't submit the lab until we give you the signal.

## Deliverables

Build out the following methods on the `CommentsController` class (Use ES6 syntax)

+ `CommentsController.prototype.addCommentFormListener()`
  + iterates through each comment form and adds an eventlistener to trigger a function on form submit
  + function should grab the imageId + comment and create a new Comment with those arguments
  + execute the render function on that found image object to append the new comment -->
+ `CommentsController.prototype.render(commentObject)`
  + selects the appropriate `ul` for this comment to be added to
  + appends the new comment element to this `ul`
  + Don't try to copy the `ImagesController.render` function because that is implemented differently

Build the following on the comment class model (Use ES6 syntax)

+ `new Comment(comment, imageId)`
  + should initialize with an id, image object (findImage) and commentContent (the actual text of the comment)
  + should save new comment to Comment.all property
+ `Comment.all`
  + should return all of the comment objects in an array
  + a property of the Comment class
+ `Comment.prototype.findImage(imageId)`
  + given an `int` for an image id, returns the image object with that id
  + before return - adds current comment to image's comments property
+ `Comment.prototype.commentEl()`
  + returns a string of html
    + html has an `li` tag with an `id` field and shows the comment

**NOTE:** All of the above will be tested thoroughly, so make sure your associations are working properly!


A few quirks: 
1) the Comment class's 'all' method seems to only return one comment object at a time, effectively copying the object instance to its 'allComments' property. I assume that I'm executing it in the wrong place, but wasn't very clear on this deliverable. 
2) the Comment class inherits from Image, which treats each new comment as a new Image itself. This doesn't affect the user experience, as comments are associated with images via their imageId taken from the DOM, rather than the image data array itself. In retrospect, I would probably want to refactor this to be more closely copuled to the image model. 
3) The h2 with the title of each image post is rendering to the side of each image, but would preferably be situated above each picture. I'm chalking this one up to my js mindset today :)

All in all this was a fun and challenging assignment. Thanks! 