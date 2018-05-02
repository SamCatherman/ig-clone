class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.$wrapper = $('#wrapper')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // create comment form listener code here
    var self = this;
    this.$wrapper.on('submit', '.add-comment', function () {
      event.preventDefault(); 
      var imageId = parseInt($(this).parents('ul').data('id'));
      var text = $(`#comment-description-${imageId}`)
      var comment = new Comment(imageId, text.val())
      console.log(comment)
      $(text).val('')
      // self.render(comment)
    });
  }

  // render(comment) {
  //   $(`#comments-0`).append(comment.commentEl())
  // }
}
