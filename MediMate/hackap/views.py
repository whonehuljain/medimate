from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')



# views.py
import requests
from django.shortcuts import render
from django.http import JsonResponse

from django.http import JsonResponse

def aiassist(request):
    if request.method == 'POST':
        query = request.POST.get('query')

        # Call ChatGPT API
        try:
            print(query)
            response = get_chatgpt_response(query)
            return render(request, 'aiassist.html', {'response': response})
        except Exception as e:
            error_message = f"Error communicating with GPT-3: {str(e)}"
            print(error_message)  # Log the error
            return JsonResponse({'error': error_message}, status=500)  # Return error response with status code

    return render(request, 'aiassist.html')

import openai
from django.conf import settings
from django.shortcuts import redirect
import openai

def get_chatgpt_response(query):    
    openai.api_key = 'YOUR OPENAI API'
    try:
        prompt = query

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt},
            ],
        )

        gpt3_response = response['choices'][0]['message']['content'].strip()
        print(gpt3_response)

        return gpt3_response

    except Exception as e:
        print(f"Error communicating with GPT-3: {e}")
        raise RuntimeError("Failed to communicate with GPT-3")



from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages

def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        
        # Check if the username or email already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username is already taken.')
            return redirect('signup')
        
        if User.objects.filter(email=email).exists():
            messages.error(request, 'Email is already registered.')
            return redirect('signup')
        
        # Create the new user
        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        messages.success(request, 'Account created successfully. You can now login.')
        return redirect('login')
    
    return render(request, 'signup.html')

from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        # Authenticate the user
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            # Login the user
            login(request, user)
            messages.success(request, 'Logged in successfully.')
            return redirect('home')  # Redirect to home page after login
        
        else:
            messages.error(request, 'Invalid username or password.')
    
    return render(request, 'login.html')


from django.shortcuts import redirect
from django.contrib.auth import logout

def logout_view(request):
    logout(request)
    return redirect('home')  # Redirect to your home page or any other page after logout

# models ka kaam
def vc(request):
    return render(request, 'vc.html')
# views.py

import requests
from django.shortcuts import render
from serpapi import GoogleSearch

def get_ip():
    response = requests.get('https://api64.ipify.org?format=json').json()
    return response["ip"]

def get_location():
    ip_address = get_ip()
    if ip_address:
        response = requests.get(f'https://ipapi.co/{ip_address}/json/').json()
        city = response.get("city")
        country = response.get("country_name")
        if city and country:
            return f"{city}, {country}"
    return "noida,india"  # Return a default value if location info is unavailable
def shopping(request):
    if request.method == 'POST':
        query = request.POST.get('query')
        location = get_location()
        
        params = {
            "engine": "google",
            "q": query+" medicine",
            "location": location,
            "google_domain": "google.co.in",
            "gl": "in",
            "hl": "en",
            "tbm": "shop",
            "num": "6",
            "api_key": "21f8d8ef0513b7e394a16efa5c56770c182e749897f7ecf003a368480208cfd3"  # Replace with your actual API key
        }

        search = GoogleSearch(params)
        dict1 = search.get_dict()

        # Check if the dictionary contains the expected key
        if 'shopping_results' in dict1:
            results = dict1["shopping_results"]
        else:
            results = []
        print(results)
        context = {
            'query': query,
            'search_results': results
        }
        return render(request, 'shopping.html', context)
    return render(request, 'shopping.html')
