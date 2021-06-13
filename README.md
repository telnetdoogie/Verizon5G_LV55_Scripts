# Verizon5G_LV55_Scripts
Useful scripts for the LV55 Verizon 5G Home Internet Gateway

[Enable IPv6 Bookmarklet](/enable_ipv6_bookmarklet.js)
- Add this script as a bookmarklet in your browser to enable the IPv6 settings in System Settings | LAN Settings on the LV55.

[Switch to Bridge Mode](/switch_to_bridge_mode.js) 
- Copy this javascript code and paste it into the browser's console when on the modem's admin home page to switch the device to Bridge Mode.
- Once the modem restarts, you'll need to find your Public IP and access the admin UI for the modem at http://{PublicIp + 1} or http://{PublicIp -1}.
- Try hitting https://api.ipify.org/ in a browser to see your public IP.
