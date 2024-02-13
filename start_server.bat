@echo off
cd Code/
:: Start python server
start python -m http.server
:: Open browser, and navigate to localhost:8000
start "" http://localhost:8000/
pause
