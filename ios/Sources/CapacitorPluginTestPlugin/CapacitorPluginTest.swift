import Foundation

@objc public class CapacitorPluginTest: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
