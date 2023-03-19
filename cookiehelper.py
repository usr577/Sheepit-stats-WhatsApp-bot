import requests

# Set the login URL
login_url = "https://www.sheepit-renderfarm.com/user/authenticate"

# Set the username and password
username = "<your username>"
password = "<your password>"

# Create a dictionary with the login credentials
login_data = {"login": username, "password": password}

# Send a POST request to the login URL with the login data
response = requests.post(login_url, data=login_data)

# If the login is successful, the response status code will be 200
if response.status_code == 200:
    cookies = str(response.cookies).split("Cookie")
    print(cookies[2].replace(" for www.sheepit-renderfarm.com/>, <",""))
    print(cookies[3].replace(" for www.sheepit-renderfarm.com/>]>",""))