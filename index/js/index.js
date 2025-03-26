$(document).ready(function () {
  // Load header.html
  $("#main_content").before(
    '<div id="header-container"></div>'
  );
  $("#header-container").load("../../common/html/header.html", function (response, status, xhr) {
    if (status == "error") {
      console.error("Error loading header:", xhr.status, xhr.statusText);
    } else {
      console.log("Header loaded successfully.");
      // Initialize any header-related functionality here, if needed.
      // Example:
      // Handle the mode switch
      const modeSwitch = document.getElementById('modeSwitch');
      const modeSwitchMobile = document.getElementById('modeSwitchMobile');
      const body = document.body;

      const setDarkMode = (isDarkMode) => {
        if (isDarkMode) {
          body.setAttribute('data-bs-theme', 'dark');
          if (modeSwitch) modeSwitch.checked = true;
          if (modeSwitchMobile) modeSwitchMobile.checked = true;
        } else {
          body.setAttribute('data-bs-theme', 'light');
          if (modeSwitch) modeSwitch.checked = false;
          if (modeSwitchMobile) modeSwitchMobile.checked = false;
        }
      };

      // Load the user's preference from local storage
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode) {
        setDarkMode(savedMode === 'true');
      }

      // Event listeners for the mode switches
      if (modeSwitch) {
        modeSwitch.addEventListener('change', function() {
          setDarkMode(this.checked);
          localStorage.setItem('darkMode', this.checked);
        });
      }
      if (modeSwitchMobile) {
        modeSwitchMobile.addEventListener('change', function() {
          setDarkMode(this.checked);
          localStorage.setItem('darkMode', this.checked);
        });
      }
      // Example: Handle the click event for the home button
      $('[data-action="action_openIndex"]').click(function() {
        window.location.href = "../index/html/index.html";
      });
      $('[data-action="action_openItemSearch"]').click(function() {
        window.location.href = "../itemSearch/html/itemSearch.html";
      });
    }
  });

  // Load footer.html
  $("#main_content").after(
    '<div id="footer-container"></div>'
  );
  $("#footer-container").load("../../common/html/footer.html", function (response, status, xhr) {
    if (status == "error") {
      console.error("Error loading footer:", xhr.status, xhr.statusText);
    } else {
      console.log("Footer loaded successfully.");
      // Initialize any footer-related functionality here, if needed.
      // Example:
      $("#addTagButton").click(function(){
        alert("タグを追加");
      });
      $("#addTagButton_mobile").click(function(){
        alert("タグを追加");
      });
      $('[data-action="action_openItemSearch"]').click(function() {
        window.location.href = "../itemSearch/html/itemSearch.html";
      });
    }
  });
});
