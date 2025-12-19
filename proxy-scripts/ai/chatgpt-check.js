/**
 * ChatGPT Availability Check
 */

const url = "https://chat.openai.com";
$httpClient.get(url, function (error, response, data) {
  if (error) {
    $notification.post("ChatGPT", "请求失败", "");
    $done();
    return;
  }

  if (response.status === 200) {
    $notification.post("ChatGPT", "✅ 可访问", "");
  } else {
    $notification.post("ChatGPT", "❌ 不可用", "");
  }
  $done();
});
