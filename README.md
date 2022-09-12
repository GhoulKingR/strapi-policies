# The project

The backend is based on a grocery store. The backend stores and retrieves an item with its name, code, and price.

The article I'm writing shows its readers how to setup the project, how to create a policy for the project, and how to connect the policy to the required route.

# The policy

Strapi allows developers to use policies for customization at the backend. As an example, we will build a policy that validates requests to create a store item our the strapi backend. The policy we will build ensures that the request data is 100% valid.

This policy uses a schema to validate a requests. The schema is created with Joi, a JavaScript library. Joi is a powerful tool for creating schemas, and validating data.

To create the project, follow these steps:
1. Create the strapi project.
2. Register an admin account to access the dashboard.
3. Open **content-type builder** so we can build the content-type.
4. Create an `item` content-type.
5. Create the following fields in `item` content-type:
    1. name, as short text
    2. code, as short text
    3. price, as decimal number
6. Click **save** to save and register the new content-type.

After setting up the project, the next step is to setup the unauthorised access to allow access to the routes of a content-type without needing an account. The following are steps to set up unauthorised access:
1. Open **Settings**.
2. Open **Roles** under **Users & permissions**.
3. Click **public** to configure what unauthorised users can access.
4. Toggle **item** dropdown to configure what unauthorised users can access about the `item` content-type.
5. Click on **Select All** to allow unauthorised users fetch, change, and add data to the `item` content-type.
6. Click **save** for the changes to take effect.

Allowing unauthorised access to all routes in a content-type is ideal for basic local development. In a production environment, you should prefer restricting access to important routes like fetching sensitive data, or changing important data. If the route isn't important, in a real world situation, you don't have to restrict access to it.

Steps to creating the policy:
1. Run `strapi generate`.
2. Create a global policy file that I'll use later for text parsing.
3. Create an text based api that can possibly be used with the policy.
4. Enable unauthorised users to access the API routes. 
4. Perform experiments to see how `policyContext` works.
3. Open the policy file to create the policy described earlier.
4. Create comments to describe my thought process on the policy function.
5. Create the policy function.

# Formatting item code

This project validates request data by checking for a specified pattern. The data should follow the pattern of numbers and letters.

The policy that I'm creating for this backend checks if the item code is a valid `A-NNNA` format ( A - Alphabet, N - Number ).
