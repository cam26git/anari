const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.sendReminder = functions.pubsub.schedule("every 24 hours").onRun(async () => {
  const payload = {
    notification: {
      title: "ANARI Reminder",
      body: "You have tasks or bills due today!"
    }
  };
  
  await admin.messaging().sendToTopic("users", payload);
  console.log("Notifications sent");
});
