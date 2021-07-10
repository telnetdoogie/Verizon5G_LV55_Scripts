//Enter this into the console of the browser when on the modem's Admin UI.
//-- this script adapted from tifan.net blog, and credit goes to Difan Zhang: 
//--    https://tifan.net/blog/2021/04/01/enable-bridge-mode-on-verizon-5g-home-router-lv55-lvskisp/

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
readParams("Device.IP.Interface");
readParams("Device.DHCPv6.Server.");
readParams("Device.Cellular.Interface.1."); // current cellular info. Look for "CurrentAccessTechnology" for current mode (5G, LTE)
