#!/bin/bash
cd Code/

# Start python server
python -m http.server &

# Wait for 8 seconds to start the server 
sleep 8

# Open browser, and redirect to localhost:8000 page
command -v xdg-open && xdg-open http://localhost:8000/ || \          # For MacOS      : !REF: https://askubuntu.com/questions/68961/what-can-i-use-instead-of-gnome-open           | https://superuser.com/questions/38984/linux-equivalent-command-for-open-command-on-mac-windows
command -v gnome-open && gnome-open http://localhost:8000/ || \      # For Linux/Unix : !REF: https://embraceubuntu.com/2006/12/16/gnome-open-open-anything-from-the-command-line/ | https://www.unix.com/man-page/opensolaris/1/gnome-open/
echo "Unable to open the browser. Please open http://localhost:8000/ manually on the browser."

read -p "Press enter to close"
