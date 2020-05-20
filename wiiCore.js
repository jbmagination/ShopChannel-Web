// wiiCore.js: minified for essential functions. Expands when we are ready to test a new function on WSC.

const ecTimeout                 = null;
const useSyncRegistration       = null;


// Keyboard object.
const keyboard = new wiiKeyboard();

/*
keyboard.call(type, limitrow, secret) - call a keyboard!
	limitrow - amount of rows allowed?
	secret - replaces with dots? (Boolean)
=====keyboard types:=====
0: default
*/

// WiiShop object.
const shop = new wiiShop();
/*
  shop.returnToUpdate() - Go to Wii System Update in the settings
  shop.rebootSystem() - Reboots the system? (Freezes Dolphin)
  shop.returnToMenu() - Returns to the Wii Menu
  shop.jumpToEULAViewer() - Goes to the Wii Network Services EULA
  shop.jumpToManualChannel() -
  shop.beginWaiting() - Display the blue waiting ring
  shop.endWaiting() - Remove the blue waiting ring
  shop.setWallpaper( wallpaperId (integer) ) - Change the background which is displayed when using 16:9
  shop.disableHRP() - Disables reset, power-off, and the menu
  shop.enableHRP() - Enables reset, power-off, and the menu
  shop.closeManual() -
  shop.jumpDataMng( url (string) ) - Goes to Data Management, and returns to the URL specified when it is closed.
  shop.setSCARank( rank (integer) ) - Sets the Shop Connection Ambassador rank
  shop.error( errorCode (integer), errorType (integer) )
  shop.isCompatibleMode -
  shop.launchCode -
  shop.getLogUrl -
  shop.fadeColor -

  shop.title - Localized "Wii Shop Channel"
  shop.retryBtn - Localized "Try Again"
  shop.wiiUMenuBtn - Localized "Wii U Menu"
  shop.menuBtn - Localized "Wii Menu"
  shop.manualChannelBtn - Localized "Continue"
  shop.connecting - Localized "Connecting. Please wait..."

  Wallpaper IDs:
    0 - Dots (default)
    1 - Black
    2 - White
    3 - Vertical blue lines

  Error types:
    0 - Internet
    1 - Server
    2 - Online

  Not putting shop.connecting in to an element will result in the shop eventually timing out and throwing an error code.
*/

// initialiseShop: Mitigates the timeout error.
function initialiseShop() {
    document.getElementById("shopConnect").innerHTML = "init called.";
    document.getElementById("shopConnect").innerHTML = shop.connecting;
    shop.disableHRP();
    shop.enableHRP();
}