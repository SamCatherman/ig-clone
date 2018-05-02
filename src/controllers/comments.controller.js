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
    let self = this;
    this.$wrapper.on('submit', '.add-comment', function () {
      event.preventDefault(); 
      var imageId = parseInt($(this).parents('ul').data('id'));
      var text = $(`#comment-description-${imageId}`);
      var comment = new Comment(imageId, text.val());
      $(text).val('');
      self.render(imageId, comment)
    });
  }

  render(imageId, comment) {
    $(`#comments-${imageId}`).append(comment.commentEl())
  }
}
