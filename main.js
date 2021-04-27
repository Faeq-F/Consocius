// The "app" object controls your applications life-cycle. It exposes various
// events and methods to control how your app exposes itself to the operating
// system.
//
// For more info, see:
// https://electronjs.org/docs/api/app

const { app } = require('electron')
console.log(`The app lives at: ${app.getAppPath()}`)
console.log(`It's named: ${app.name}`)
console.log(`It has the version: ${app.getVersion()}`)
app.on('ready', () => {
    const { BrowserWindow } = require('electron')
    const myWindow = new BrowserWindow({transparent: true, frame: false, width: 800,
    height: 700,
    minWidth: 350,
    minHeight: 350,
    resizable: true,
    icon: "M:/The Algorithm/Protocol & the mind-palace/Documentation/Visual Resources/Icon.png"})
    myWindow.setTitle(require('./package.json').name);
    myWindow.loadURL('file://' + __dirname + '/index.html')

});
app.on('resize-window', (event, width, height) => {
    let browserWindow = myWindow.fromWebContents(event.sender)
    browserWindow.setSize(width,height)
})