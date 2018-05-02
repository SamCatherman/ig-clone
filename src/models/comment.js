// create Comment class here
class Comment extends Image {
    constructor(imageID, text){
        super()
        this.imageID = imageID
        this.text = text;
        this.all = []
        this.findImage(imageID)
    }

    all() {
        return this.all.push()
    }

    //pushes new comment into Image object's comments array, returns that image object
    findImage(imageId) {
        Image.all[imageId].comments.push(this.text)
        return Image.all[imageId]
    }
    
    commentEl() {
        console.log('commentEl function')
        return `<li id='${this.imageID}'>${this.text}</li>`
    }
}


