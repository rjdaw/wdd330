export class Comment {
    constructor(comment, hikeId) {
        this.CommentId = Date.now,
        this.HikeId = hikeId,
        this.Comment = comment,
        this.Date = Date().toLocaleDateString("en-US").split("/")
    }
}