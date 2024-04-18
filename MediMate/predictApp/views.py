from django.shortcuts import render

import json
from django.http import JsonResponse
from .predict import predictDisease

# from django.http import JsonResponse

def predictor(request):
    template = "main/predic.html"
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        tags = data.get('tags', [])
        print(tags)  # Print tags to the terminal
        predictedDisease = predictDisease(tags)
        print(predictedDisease)
        print('hello am rechable')
        # return render(request, template, {'result': predictedDisease})
        return JsonResponse({'result': predictedDisease})

        # return JsonResponse({'message': 'Tags received successfully'})  # Return a JSON response if needed
    else:
        return render(request, template)



