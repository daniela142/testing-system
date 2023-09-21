# URL
https://testing-system-blush.vercel.app/

# Usage
```
GET /
Response:
{
    "message": "v3"
}


GET /api
Response:
{
    "message": "Hello World!"
}


Register new user
POST /api/users
Body: {
    username: test,
    firstname: test,
    lastname: test,
    email: test@test.com,
    password: 123
}


Sign in
POST /api/users/auth
Body: {
    email: test@test.com,
    password: 123
}
Response: {
    _id: abc123,
    email: test@test.com
}


Sign out
POST /api/users/logout
Body: {}
Response: {
    "message": "Logged out successfully"
}

```