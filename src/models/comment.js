// create Comment class here
class Comment {
    constructor(imageID, text){
        this.imageID = imageID
        this.text = text;
        this.findImage();
    }

    all() {
      
    }

    findImage() {
      console.log('comments array', Image.comments)
    //   return Image.comments
    }
    
    commentEl() {
        console.log('commentEl function')
        return `<li id='${this.imageID}'>${this.text}</li>`
    }

}

