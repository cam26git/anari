const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const sendNotifications = require("./notifications");
const aiAssistant = require("./aiAssistant");

exports.sendNotifications = sendNotifications.sendReminder;
exports.aiAssistant = aiAssistant.respond;
