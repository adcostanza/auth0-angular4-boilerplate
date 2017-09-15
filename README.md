# Auth0 Angular4 Boilerplate
I wanted to implement super simple authentication using Auth0 in Angular 4 for admin SPA. 
This code relies heavily on these samples: https://github.com/auth0-samples/auth0-angular-samples

It takes the Login example and updates it to use CanActivate to protect routes. The example is expanded to enable as many protected components as you want while also working on a real webhost (Namecheap).

## Hash
The example above does not use hashes, so it fails to actually work on a simple server host like Namecheap. I updated it to remove the callback and have the "index" main page be the callback file so that the hash can be parsed.

## Redirect
In order to make this work well, you should redirect the route urls to the main  page /, i.e.

/home redirect to /
/login redirect to /

The reason for this is these are Angular routes, not real server routes so you will get a 404 if you do not redirect.

Redirecting on the server will not affect the app, and will actually make it work better if you accidentally reload one of those URLs by behaving normally.
## Demo
See a Demo here: http://acostanza.com/auth0-demo/login

## More info
Post with more details to come