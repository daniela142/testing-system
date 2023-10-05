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


Create a new question
POST /api/questions
Body: {
    name: test,
    imageUrl: , // can be null or excluded
    type: MultipleChoice, // 3 types: ["MultipleChoice", "ShortAnswer", "CheckBoxes"]
    answer: "test",
    elo: 123,
}
```