/**
 * YouTube Region Check
 */

const url = "https://www.youtube.com/premium";
$httpClient.get(url, function (error, response, data) {
  if (error) {
    $notification.post("YouTube", "检测失败", "");
    $done();
    return;
  }

  if (data && data.includes("YouTube Premium")) {
    $notification.post("YouTube", "✅ Premium 可用", "");
  } else {
    $notification.post("YouTube", "⚠️ 普通地区", "");
  }
  $done();
});
