function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
}

BookReader.prototype.nextPage = function() {
  this.currentPage++;
  if(this.currentPage === this.book.length){
    this.currentPage--;
    return 'short';
  }
  return this.book[this.currentPage];
};

BookReader.prototype.previousPage = function() {
  this.currentPage--;
  if(this.currentPage === -1) {
    this.currentPage++;
    return 'any';
  }
  return this.book[this.currentPage];
};

BookReader.prototype.pagesLeft = function() {
  return (this.book.length - 1) - this.currentPage;
};

BookReader.prototype.encouragement = function() {
  if(this.pagesLeft() === 1)
  return "Keep going, this book is good 'til the last drop!";
  return 'Keep going, only ' + this.pagesLeft() + ' pages left after this one!';
};

// DO NOT MODIFY BELOW THIS COMMENT
module.exports = BookReader;
