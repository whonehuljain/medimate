import requests
from serpapi import GoogleSearch

def get_ip():
    response = requests.get('https://api64.ipify.org?format=json').json()
    return response["ip"]

def get_location():
    ip_address = get_ip()
    print(ip_address)
    response = requests.get(f'https://ipapi.co/{ip_address}/json/').json()
    city = response.get("city")
    country = response.get("country_name")
    print(city)
    # loc = city+", "+country
    return 'delhi,india'

location = get_location()
query = input("Enter the name of the medicine: ")

params = {
  "engine": "google",
  "q": query+" medicine",
  "location": location,
  "google_domain": "google.co.in",
  "gl": "in",
  "hl": "en",
  "tbm": "shop",
  "num": "6",
  "api_key": "21f8d8ef0513b7e394a16efa5c56770c182e749897f7ecf003a368480208cfd3"
}

print(params)


search = GoogleSearch(params)
dict1 = search.get_dict()
results = dict1["shopping_results"]
print(results)
