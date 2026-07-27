// Random data generate karne ke liye
function generateRandomEmail() {
  const timestamp = Date.now();
  return `testuser${timestamp}@example.com`;
}

function generateRandomString(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateRandomPhoneNumber() {
  return `9${Math.floor(100000000 + Math.random() * 900000000)}`;
}

// Date/time helpers
function getFormattedDate() {
  const date = new Date();
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

// Wait helper (jab specific element ke liye custom wait chahiye ho)
async function waitForPageLoad(page) {
  await page.waitForLoadState('networkidle');
}

// Screenshot lene ke liye (failed tests ke liye useful)
async function takeScreenshot(page, name) {
  await page.screenshot({ path: `screenshots/${name}-${Date.now()}.png`, fullPage: true });
}

// Test data JSON file se read karne ke liye
const fs = require('fs');
function readTestData(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

module.exports = {
  generateRandomEmail,
  generateRandomString,
  generateRandomPhoneNumber,
  getFormattedDate,
  waitForPageLoad,
  takeScreenshot,
  readTestData
};