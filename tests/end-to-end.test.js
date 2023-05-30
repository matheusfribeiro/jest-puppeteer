import HomePage from "../pages/HomePage"
import TopBar from "../pages/components/TopBar"
import LoginPage from "../pages/LoginPage"
import FeedbackPage from "../pages/FeedbackPage"
import { username, password } from "../config"

describe('End-to-End test', () => {
  let homePage
  let loginPage
  let topbar
  let feedbackPage

  beforeAll(async () => {
    homePage = new HomePage()
    loginPage = new LoginPage()
    topbar = new TopBar()
    feedbackPage = new FeedbackPage()
  })
  
  it('should load homepage', async () => {
    await homePage.visit()
    await homePage.isNavbarDisplayed()

  })

  it('should submit feedback', async () => {
    await homePage.clickFeedbackLink()
    await feedbackPage.isFeedbackFormDisplayed()
    await feedbackPage.submitFeedback("Johnny Doe", "johndoe@email.com", "this is a random subject text, it has no meaning", "this is a random comment text, it has no meaning and no sense.")
  })

  it('should login to application', async () => {
    await homePage.visit()
    await topbar.isTopBarDisplayed()
    await topbar.clickSignInButton()
    await loginPage.isLoginFormDisplayed()
    await loginPage.login(username, password)
  })

  
})