
const initializeInfiniteScroll = () => {
  window.onscroll = () => {
    if (!this.isRetreivingTutorials && !this.isLastPage) {
      let pageHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      let scrollPos = window.pageYOffset;
      let currentPosition = scrollPos + clientHeight;
      let percentageScrolled = currentPosition / pageHeight;
      if (percentageScrolled > .8) {
        this.isRetreivingTutorials = true;
        this.currentPage++;
        this._tutorialService.getTutorials(this.currentPage, this.lastCategoryId).subscribe(tutorials => {
          if (tutorials.length > 0)
            this.tutorials = this.tutorials.concat(tutorials);
          else
            this.isLastPage = true;
          this.isRetreivingTutorials = false;
        });
      }
    }
  }
}
