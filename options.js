//when options page is loaded, do the following to the checkboxes
document.addEventListener('DOMContentLoaded', function () {
    var tooltipsCheckbox = document.querySelector('#tooltips');
    var stickersCheckbox = document.querySelector('#stickers');
    var ASCheckbox = document.querySelector('#useAS');
    var MBFCCheckbox = document.querySelector('#useMBFC');
    var options;

    //get options from storage and set the checkboxes to the correct state
    chrome.storage.local.get("options", function(obj) {
      options = obj.options;
      tooltipsCheckbox.checked = options.tooltips;
      stickersCheckbox.checked = options.stickers;
      ASCheckbox.checked = options.ASData;
      MBFCCheckbox.checked = options.MBFCData;
    });

    //if tooltips checkbox is changed, update the options in storage
    tooltipsCheckbox.addEventListener('change', function () {
      if (tooltipsCheckbox.checked) {
        options.tooltips = true;
      } else {
        options.tooltips = false;
      }
      console.log(options);
      chrome.storage.local.set({ "options":options });
    });

    //if stickers checkbox is changed, update the options in storage
    stickersCheckbox.addEventListener('change', function () {
      if (stickersCheckbox.checked) {
        options.stickers = true;
      } else {
        options.stickers = false;
      }
      console.log(options);
      chrome.storage.local.set({ "options":options });
    });

    //if allsides data checkbox is changed, update the options in storage
    ASCheckbox.addEventListener('change', function () {
      if (ASCheckbox.checked) {
        options.ASData = true;
      } else {
        options.ASData = false;
      }
      console.log(options);
      chrome.storage.local.set({ "options":options });
    });

    //if MBFC data checkbox is changed, update the options in storage
    MBFCCheckbox.addEventListener('change', function () {
      if (MBFCCheckbox.checked) {
        options.MBFCData = true;
      } else {
        options.MBFCData = false;
      }
      console.log(options);
      chrome.storage.local.set({ "options":options });
    });

  });