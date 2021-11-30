# Verizon5G_LV55_Scripts
Useful scripts for the LV55 Verizon 5G Home Internet Gateway

[Enable IPv6 Bookmarklet](/enable_ipv6_bookmarklet.js)
- Add this script as a bookmarklet in your browser to enable the IPv6 settings in System Settings | LAN Settings on the LV55.

[Switch to Bridge Mode](/switch_to_bridge_mode.js) 
- Copy this javascript code and paste it into the browser's console when on the modem's admin home page to switch the device to Bridge Mode.
- Once the modem restarts, you'll need to access the admin UI at http://10.0.0.2 or http://10.0.0.1
- To see more than just a basic page after bridge mode, use the URL http://10.0.0.1/cgi-bin/luci/verizon/system_settings

[Query Modem Parameters](/query_modem_params.js)
- Enter this into your browser's console when in the modem's Admin UI, and you can pass Modem config objects to browse their settings.
- The TR-069 Object Model is documented [here](https://cwmp-data-models.broadband-forum.org/tr-181-2-14-1-cwmp.html)
