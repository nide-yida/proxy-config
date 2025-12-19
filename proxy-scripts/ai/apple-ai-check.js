/**
 * Apple Intelligence Connectivity Check
 * Rule:
 * - 能访问 ≠ 一定可用
 * - 不能访问 = 一定不可用
 */

const testTargets = [
  "https://guzzoni.apple.com",
  "https://apple-relay.apple.com"
];

let reachableCount = 0;

function check(index) {
  if (index >= testTargets.length) {
    // 判断结果
    if (reachableCount === 0) {
      $notification.post(
        "🍎 Apple Intelligence",
        "❌ 一定不可用",
        "核心服务完全不可达"
      );
    } else if (reachableCount < testTargets.length) {
      $notification.post(
        "🍎 Apple Intelligence",
        "⚠️ 可能可用",
        "部分服务可达（不保证成功）"
      );
    } else {
      $notification.post(
        "🍎 Apple Intelligence",
        "✅ 网络条件满足",
        "注意：能访问 ≠ 一定可用"
      );
    }
    $done();
    return;
  }

  $httpClient.get(testTargets[index], function (error, response) {
    if (!error && response) {
      reachableCount++;
    }
    check(index + 1);
  });
}

check(0);
