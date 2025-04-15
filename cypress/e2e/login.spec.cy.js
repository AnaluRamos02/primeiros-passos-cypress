import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboard.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM Tests', () => {


  
    it('login - Fail', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
    })
    it('login - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()


    })
  })
