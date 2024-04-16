# test-task-o-complex

This is a guide on how to run the test-task-o-complex project locally.

Prerequisites
Before getting started, make sure you have the following installed on your machine:

Node.js (version 18.17.0 or higher)
npm (Node Package Manager)

Getting Started

Clone the project repository to your local machine:

In the root folder of the project, locate the .env.development file and rename it to .env:

Install project dependencies using npm:
npm install

Start the development server by running:
npm run dev

Access the Application

Once the development server is running, you can access the application in your web browser at: http://localhost:3000

By following these steps, you should be able to successfully set up and run the test-task-o-complex project on your local environment.

#######################
Features to Implement

1. Adaptation for Mobile and Tablet Devices

- Ensure the web application is responsive and optimized for various screen sizes.

2. Reviews Content

- Populate reviews dynamically from HTML content wrapped in JSON.
- Display reviews with appropriate formatting and author details.

3. Product Listing from API

- Fetch and display the first page of products immediately.
- Load additional pages of products via AJAX requests as the user scrolls down.

4. Interactive Buy Button

- Implement functionality where clicking "Buy" toggles the button to show quantity controls (+/-) and an input field to adjust the quantity.
- Allow users to increase/decrease the quantity or manually enter a quantity.

5. Cart Updates

- Update cart information (e.g., total items, total price) dynamically when the quantity of a product changes.

6. Persistence of State

- Maintain state persistence across page reloads for selected products and entered phone number.

7. Phone Number Input

- Apply a mask to the phone number input field to format it correctly.

8. Order Validation and Submission

- Validate that the phone number is fully entered before allowing order submission.
- Highlight any input errors (e.g., incomplete phone number) to the user.

9. Order Submission and Feedback

- Send an API request upon order submission.
- Display a success popup upon successful response from the server.

All Features above are implemented except for the first part of feature 6.

Deployed Website
The project is deployed and accessible online. You can visit the deployed website using the following link:

[Live Demo - Test Task o Complex](https://test-task-o-complex.vercel.app/)

You need to allow insecure content in deployed website because the server endpoints are insecure (http).

You can change that setting in your google browser following the guide by this link.

https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content
