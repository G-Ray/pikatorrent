export const handleSquirrelEvent = async (app) => {
  if (process.platform !== 'win32') {
    return false
  }

  const squirrelCommand = process.argv[1]

  switch (squirrelCommand) {
    case '--squirrel-uninstall':
      unregisterAppAssociations()
  }

  if (await import('electron-squirrel-startup')) {
    app.quit()
  }
}

export const registerAppAssociations = async () => {
  const Registry = (await import('rage-edit')).default
  await Registry.set(
    'HKCU\\Software\\Classes\\pikatorrent\\shell\\open\\command',
    '',
    `"${process.execPath}" "%1"`
  )
  await Registry.set(
    'HKCU\\Software\\PikaTorrent\\Capabilities',
    'ApplicationName',
    'PikaTorrent'
  )
  await Registry.set(
    'HKCU\\Software\\PikaTorrent\\Capabilities',
    'ApplicationDescription',
    require('../package.json').description
  )
  await Registry.set(
    'HKCU\\Software\\PikaTorrent\\Capabilities\\MIMEAssociations',
    'application/x-bittorrent',
    'pikatorrent'
  )
  await Registry.set(
    'HKCU\\Software\\PikaTorrent\\Capabilities\\FILEAssociations',
    '.torrent',
    'pikatorrent'
  )
  await Registry.set(
    'HKCU\\Software\\PikaTorrent\\Capabilities\\URLAssociations',
    'magnet',
    'pikatorrent'
  )
  await Registry.set(
    'HKCU\\Software\\RegisteredApplications',
    'PikaTorrent',
    'Software\\PikaTorrent\\Capabilities'
  )
}

const unregisterAppAssociations = async () => {
  const Registry = (await import('rage-edit')).default
  await Registry.delete('HKCU\\Software\\PikaTorrent')
  await Registry.delete('HKCU\\Software\\Classes\\pikatorrent')
  await Registry.delete('HKCU\\Software\\RegisteredApplications', 'PikaTorrent')
}
