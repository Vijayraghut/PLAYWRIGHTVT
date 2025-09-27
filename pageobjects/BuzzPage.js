class BuzzPage {
    constructor(page) {
        this.page = page;
        this.buzzMenu = "//span[text()='Buzz']";
        this.postTextArea = "//textarea[@class='oxd-buzz-post-input']";
        this.postButton = "//button[contains(@class, 'oxd-button--main')]";
        this.mostRecentPost = "(//div[contains(@class, 'buzz-post-body')])[1]";
    }

    async navigateToBuzz() {
        await this.page.locator(this.buzzMenu).click();
        // Wait for the Buzz page to load
        await this.page.waitForURL('**/buzz/viewBuzz');
    }

    async createPost(message) {
        await this.page.locator(this.postTextArea).fill(message);
        await this.page.locator(this.postButton).click();
        // Wait for post to be created
        await this.page.waitForTimeout(2000); // Wait for post to appear
    }

    async getLatestPostText() {
        await this.page.waitForSelector(this.mostRecentPost);
        return await this.page.locator(this.mostRecentPost).textContent();
    }
}

module.exports = BuzzPage;