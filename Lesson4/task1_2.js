"use strict";
/* e5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (newText) {
    this.text = newText;
    console.log("Текст был заменен на " + this.text)
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
    console.log(this.highlighted);
};

let post1 = new AttachedPost("Вася", "оригинальный текст Васи", "20.09.2021");
post1.edit('новый текст Васи');
post1.makeTextHighlighted();
*/


// e6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(newText) {
        this.text = newText;
        console.log("Текст был заменен на " + this.text)
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
        console.log(this.highlighted);
    }
}
let post1 = new AttachedPost("Вася", "оригинальный текст Васи", "20.09.2021");
post1.edit('новый текст Васи');
post1.makeTextHighlighted();
