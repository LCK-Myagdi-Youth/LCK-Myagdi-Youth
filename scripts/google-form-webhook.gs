/**
 * Google Apps Script bridge.
 * Add this to the Google Form's linked spreadsheet and create an installable
 * "On form submit" trigger for handleFormSubmit.
 */
function handleFormSubmit(event) {
  var values = event.namedValues;
  var payload = {
    name: first(values, "Name"),
    email: first(values, "Email"),
    phone: first(values, "Phone"),
    age: first(values, "Age"),
    occupation: first(values, "Occupation / College"),
    why_join: first(values, "Why do you want to join?"),
    skills_interests: first(values, "Skills / interests"),
    social_media: first(values, "Social media")
  };

  UrlFetchApp.fetch("https://YOUR-DOMAIN.com/api/integrations/google-form", {
    method: "post",
    contentType: "application/json",
    headers: { "x-google-form-secret": "REPLACE_WITH_WEBHOOK_SECRET" },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });
}

function first(values, key) {
  return values[key] && values[key].length ? values[key][0] : "";
}