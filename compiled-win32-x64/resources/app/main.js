const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
let win;

function createWindow() {

let screenElectron=electron.screen.getPrimaryDisplay().size; 
let screenHeight=screenElectron.height;
let screenWidth=screenElectron.width;

  win = new BrowserWindow({width: screenWidth, height: screenHeight});//vollbild
  win.setMenuBarVisibility(false)
  win.loadFile("Content/index.html");
  //win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
