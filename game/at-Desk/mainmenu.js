const {Menu} = require('electron')
const electron = require('electron')
const app = electron.app

const template = [
  {
    role: 'about',
    submenu: [
      {
        label: 'Game Website',
        click () { require('electron').shell.openExternal('https://pp.webdesk.me') }
      },
      {
        label: 'Sans',
        click () { require('electron').shell.openExternal('https://www.sans.org/') }
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        type: 'separator'
      },
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Game Website',
        click () { require('electron').shell.openExternal('https://pp.webdesk.me') }
      },
      {
        label: 'Sans',
        click () { require('electron').shell.openExternal('https://www.sans.org/') }
      },
      {
        label: 'Privacy Policy',
        click () { require('electron').shell.openExternal('https://www.webdesk.me/privacy-policy') }
      },
      {
        label: 'Terms Of Use',
        click () { require('electron').shell.openExternal('https://www.webdesk.me/terms-of-use') }
      },
      {
        label: 'Licence',
        click () { require('electron').shell.openExternal('https://www.webdesk.me/license') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  })
  // Edit menu.
  template[1].submenu.push(
    {
      type: 'separator'
    },
    {
      label: 'Speech',
      submenu: [
        {
          role: 'startspeaking'
        },
        {
          role: 'stopspeaking'
        }
      ]
    }
  )
  // Window menu.
  template[3].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
