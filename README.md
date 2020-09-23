This app implements ngrx and effects in ngrx:

to get the list of users:

set header 'app-id' to (app-id: 5f5def1851f728c78f594dcb)get list of users

https://dummyapi.io/data/api/user?limit=50


to Login:
url: https://reqres.in/api/login

credentials:
{
"email": "eve.holt@reqres.in",
"password": "cityslicka"
}

better to try in postman with the required headers and credentials

(POC is prepared by me and Tarun Sharma(my colleague).)

it has two comps for profile list in which we are fetching data with effects and without effects.

