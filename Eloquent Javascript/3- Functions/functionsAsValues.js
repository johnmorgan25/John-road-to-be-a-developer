// Binding can be assigned to a new value

let launchMissles = function () {
  missleSystem.launch("now");
};
if (safeMode) {
  launchMissles = function () {
    /* do nothing */
  };
}

// There will be further details in chapter 5

// Declaration notation
