import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboard.js'
import Menupage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new Menupage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillNameField(chance.first(), chance.last(), chance.string())
    myInfoPage.fillPersonalDetails('EmployId', 'otherId','Drivers Number', '2025-29-03')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
    })
  
  
  })
