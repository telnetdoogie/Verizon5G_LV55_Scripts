//Enter this into the console of the browser when on the modem's Admin UI.

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

//then you can query parameters set on the Modem. 

//examples:
readParams("Device.Firewall.");
readParams("Device.DeviceInfo");
readParams("Device.DeviceInfo");
readParams("Device.DHCPv6.Server.");
