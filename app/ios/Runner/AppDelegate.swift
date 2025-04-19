import Flutter
import UIKit

@main
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    GeneratedPluginRegistrant.register(with: self)

     // Exclude the apps folders from backup.
    try! setExcludeFromiCloudBackup(isExcluded: true)

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }
}

private func setExcludeFromiCloudBackup(isExcluded: Bool) throws {
    var values = URLResourceValues()
    values.isExcludedFromBackup = isExcluded

    var documentsURL = try! FileManager.default.url(for: .documentDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
    var applicationSupportDirectoryURL = try! FileManager.default.url(for: .applicationSupportDirectory, in: .userDomainMask, appropriateFor: nil, create: true)

    try documentsURL.setResourceValues(values)
    try applicationSupportDirectoryURL.setResourceValues(values);
}