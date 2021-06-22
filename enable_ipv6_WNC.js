//for enabling IPv6 on modem (run in browser console from admin page)

WNC.DM.set({
  args: {
    Object:"Device.DHCPv6.Server.",
    "Enable":1,
    "X_WNC_DNS_filter_aaaa": "0"
  },
  success: function s(objs, status) {
    console.log("success: ", status, objs)
  },
  error: function s(objs, status) {
    console.log("error: ", status, objs)
  },
})
