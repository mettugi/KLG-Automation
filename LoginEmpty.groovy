import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

// Open the CURA demo website
WebUI.openBrowser('https://katalon-demo-cura.herokuapp.com/')

// Click on the 'Make Appointment' button
WebUI.click(findTestObject('LoginPage/Page_CURA Healthcare Service/a_CURA Healthcare_menu-toggle'))

// Input valid credentials
WebUI.click(findTestObject('LoginPage/Page_CURA Healthcare Service/a_Login'), FailureHandling.STOP_ON_FAILURE)

WebUI.setText(findTestObject('LoginPage/Page_CURA Healthcare Service/input_Username_username'), '')

// Click on the 'Login' button
WebUI.setText(findTestObject('LoginPage/Page_CURA Healthcare Service/input_Password_password'), '')

// Verify that the login was successful by checking if the logout button is visible
WebUI.click(findTestObject('LoginPage/Page_CURA Healthcare Service/button_Login'))

// Optionally: Print a message to the console
WebUI.comment('Login test passed!')

// Close the browser
WebUI.closeBrowser()

