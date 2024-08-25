# MediMate

## Overview

MediMate is a comprehensive healthcare platform built using Django, aimed at improving healthcare accessibility in underserved areas. It combines modern technology with healthcare needs, offering features such as disease prediction, medicine availability tracking, and a multilingual AI health assistant. MediMate leverages machine learning to provide accurate disease predictions based on user-input symptoms, ensuring timely and informed health decisions. The platform also supports wellness by offering yoga recommendations tailored to individual needs.

## Problem Statement

MediMate addresses the challenges in rural healthcare by offering immediate health support, disease predictions, and wellness advice.

## Features

### ML Disease Prediction

- **Symptom Analysis:** Users can input symptoms, and the system predicts possible diseases based on a trained machine learning model.
- **Accuracy:** The prediction engine leverages multiple models to ensure high accuracy in identifying potential health conditions.
- **Instant Feedback:** Provides users with instant, reliable health insights, aiding in early diagnosis and treatment.

### Medicine Availability

- **Search Functionality:** Allows users to search for specific medicines and find availability in nearby pharmacies.
- **Geolocation Integration:** The system can suggest pharmacies based on the user's location, making it easier to obtain the required medicines quickly.

### AI Health Assistant Chatbot

- **Multilingual Support:** The chatbot supports multiple vernacular languages, ensuring accessibility for users from different linguistic backgrounds.
- **Interactive Interface:** Provides personalized health advice and guidance, making it easier for users to navigate their health concerns.

### Yoga Suggestions

- **Customized Routines:** Offers yoga routines tailored to individual needs, promoting both physical and mental well-being.
- **Holistic Approach:** Encourages users to adopt healthy lifestyle practices alongside medical care.

## Tech Stack

- **Frontend:** HTML, CSS, Bootstrap, JavaScript
- **Backend:** Django, Python
- **Machine Learning:**
  - **Models Used:** Support Vector Machine (SVM), Naive Bayes, Random Forest
  - **Libraries:** scikit-learn, pandas, numpy
- **Databases:** SQLite, managed via Django ORM

## Machine Learning for Disease Prediction

MediMate’s disease prediction feature uses machine learning models like Support Vector Machine (SVM), Naive Bayes, and Random Forest. These models analyze user-input symptoms to predict possible diseases. Trained on a dataset of symptoms and corresponding diseases, the models are evaluated for accuracy, ensuring that users receive reliable health insights. This integration of ML models enhances the platform's ability to provide timely and accurate health guidance.

## Installation

To set up the project locally, follow these steps:

1. **Fork the Repository**

   Click the "Fork" button on the GitHub repository page to create a personal copy.

2. **Clone the Repository Locally**

   ```bash
   git clone https://github.com/your-username/medimate.git

3. **Navigate to the Project Directory**
    ```bash
    cd medimate

4. **Install Dependencies**

    ```bash
    pip install -r requirements.txt
    
5. **Navigate to the MediMate Directory**
This is where the complete project resides.

    ```bash
    cd MediMate
6. **Apply Migrations**

    ```bash
    python manage.py makemigrations
    python manage.py migrate

7. **Run the Server**

    ```bash
    python manage.py runserver

The Django server will run on http://localhost:8000

## Usage

- Access disease prediction, medicine availability search, and the AI chatbot from the homepage.
- The AI chatbot supports multiple languages, enhancing accessibility.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

For more details, visit the [Devfolio project page](https://devfolio.co/projects/medimate-e82a).
