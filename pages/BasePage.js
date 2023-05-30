export default class BasePage {
  async wait(time) {
    await new Promise(r => setTimeout(r, time))
  }

  async getTitle() {
    return await page.title()
  }

  async getUrl() {
    return await page.url()
  }
}