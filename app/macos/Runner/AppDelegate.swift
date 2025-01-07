import Cocoa
import FlutterMacOS
import app_links

@main
class AppDelegate: FlutterAppDelegate {
  override func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
    return true
  }

  override func applicationSupportsSecureRestorableState(_ app: NSApplication) -> Bool {
    return true
  }

  // Handle 'open with' for .torrent file
  override func application(_ application: NSApplication, open urls: [URL]) {
    if (!urls.isEmpty) {
      AppLinks.shared.handleLink(link: urls.first!.path)
    }
  }
}
