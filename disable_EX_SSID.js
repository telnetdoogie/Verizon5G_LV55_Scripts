//you should make sure `Radio.4.` is the radio the EX SSID is running on first by digging through:
function readParams(objectName){
  WNC.DM.get({
      args: {
          Object: objectName
      },
    success: function s(objs, status) {
      console.log("success: ", status, objs)
    },
    error: function s(objs, status) {
      console.log("error: ", status, objs)
    },
  })
}

//then once you've confirmed, use the below with the correct radio number.
WNC.DM.set({
  args: {
    Object:"Device.WiFi.Radio.4.",
    "Enable":false
  },
  success: function s(objs, status) {
    console.log("success: ", status, objs)
  },
  error: function s(objs, status) {
    console.log("error: ", status, objs)
  },
})
