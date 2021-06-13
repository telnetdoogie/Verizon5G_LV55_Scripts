//Copy this into the browser's console on the Home page of the UI after logging in, and run it to switch the modem to bridge mode.

$("#restart-modal .modal-body").html("<p>While your Device is restarting, its Wi-Fi network won't be available to the devices connected to it, and you won't be able to control your smart home devices. To access the Admin UI after the restart, try \'http://{public_ip+1 or public_ip-1}/cgi-bin/luci\'</p>");
var msg = {
  title: "<h4 class=\"modal-title\"><b>System Restarting in Bridge Mode...</b></h4>",
  context: "<br><p>Please wait for a few minutes.</p>",
  fail: "<p>Failed to restart</p>",
  finish: "<br><p>Restart finished, Please access New IP address of this Device after restarting</p>"
}
$('#restart-modal').data('action', { url: modeswitch_url, msg: msg, data: {mode: "Bridge"}, count: 150000, refresh: false }).modal('show');
