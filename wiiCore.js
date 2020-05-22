// wiiCore.js: minified for essential functions. Expands when we are ready to test a new function on WSC.

const ecTimeout                 = null;
const useSyncRegistration       = null;
const ecsUrl = "https://ecs.s.oscwii.org";
const iasUrl = "https://ecs.s.oscwii.org";
const ccsUrl = "https://ecs.s.oscwii.org";
const ucsUrl = "https://ecs.s.oscwii.org";
const casUrl = "https://ecs.s.oscwii.org";

var progress;



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
*/

// ECommerceInterface object.
const ec = new ECommerceInterface();

var sound = new wiiSound()

/*
sound.playBGM() - play the background music
sound.playSE(id) - play a sound
=====sound ids:=====
1: nothing
2: focus
3: select (pressed)
4: cancel
5: keyboard - switch
6: keyboard - empty
7: dl success?
8: update success?
9: mario: jump
10: mario: jump (low)
11: mario: fireball
12: mario: coin
13: mario: brick block?
14: mario: squash
15: loading 1
16: loading 2
apparently you can stop both loading sounds using the success sounds
*/

// Mitigates timeouts.
const connected = shop.connecting;

// initialiseShop: Mitigates the timeout error.
function initialiseShop() {
    sound.playBGM();
    ec.setWebSvcUrls(ecsUrl, iasUrl, casUrl);
    ec.setContentUrls(ccsUrl, ucsUrl);
}

// getECLog: Returns the ECommerce Library log. (Good for Eval page.)
function getECLog() {
    document.getElementById('evalOutput').value = ec.getLog();
}

// dl(titleId): Downloads a title from WSC. TitleId must be a string.
function dl(titleId) {
    progress = ec.downloadTitle(titleId);
    document.getElementById('evalOutput').value = progress;
}