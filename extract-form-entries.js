/**
 * Google Form Entry ID Extractor
 *
 * Instructions:
 * 1. Open your Google Form in edit mode or preview mode
 * 2. Open browser Developer Tools (F12)
 * 3. Go to Console tab
 * 4. Paste this entire script and press Enter
 * 5. Copy the output JSON and use it to update RegistrationsGoogle.jsx
 */

(function extractGoogleFormEntries() {
  console.log("=== Google Form Entry ID Extractor ===\n");

  // Try to find all input, select, and textarea elements with entry IDs
  const formElements = document.querySelectorAll('[name^="entry."]');

  if (formElements.length === 0) {
    console.error(
      "No form entries found. Make sure you are on the Google Form page."
    );
    console.log(
      '\nAlternative method: Right-click on any form field, select "Inspect", and look for name="entry.XXXXXXXX"'
    );
    return;
  }

  const entries = {};
  const seen = new Set();

  formElements.forEach((element) => {
    const entryId = element.getAttribute("name");
    if (seen.has(entryId)) return;
    seen.add(entryId);

    // Try to find the label
    let label = "";
    const ariaLabel = element.getAttribute("aria-label");
    if (ariaLabel) {
      label = ariaLabel;
    } else {
      // Try to find parent label or nearby text
      const parentLabel =
        element.closest('[role="listitem"]') ||
        element.closest(".freebirdFormviewerComponentsQuestionBaseRoot");
      if (parentLabel) {
        const labelElement =
          parentLabel.querySelector('[role="heading"]') ||
          parentLabel.querySelector(
            ".freebirdFormviewerComponentsQuestionBaseTitle"
          );
        if (labelElement) {
          label = labelElement.textContent.trim();
        }
      }
    }

    const type = element.type || element.tagName.toLowerCase();

    entries[entryId] = {
      label: label || "Unknown",
      type: type,
      required:
        element.hasAttribute("required") ||
        element.getAttribute("aria-required") === "true",
    };
  });

  console.log("Found", Object.keys(entries).length, "form entries:\n");
  console.log(JSON.stringify(entries, null, 2));

  console.log("\n=== Copy this mapping for your code ===\n");
  console.log("const entryMapping = {");
  Object.entries(entries).forEach(([entryId, info], index, arr) => {
    const fieldName = info.label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");
    console.log(
      `  ${fieldName}: '${entryId}'${index < arr.length - 1 ? "," : ""} // ${
        info.label
      }`
    );
  });
  console.log("};");

  return entries;
})();

console.log("\n=== Manual Method ===");
console.log("If the above does not work:");
console.log("1. Fill out the form with test data");
console.log("2. Before clicking Submit, open Network tab in DevTools");
console.log("3. Click Submit");
console.log('4. Look for the "formResponse" request');
console.log(
  "5. Check the Form Data section to see all entry IDs with your test values"
);
