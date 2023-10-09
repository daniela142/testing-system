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
    password: 123,
    // usertype has 3 option: student, teacher, admin
    usertype: teacher,
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
```
Create a new question
POST /api/questions
Access Public
Body: {
    name: test,
    imageUrl: , // can be null or excluded
    type: MultipleChoice, // 3 types: ["MultipleChoice", "ShortAnswer", "CheckBoxes"]
    option: ["123", "abc", "xyz"], // can be null or excluded
    answers: ["test"],
    elo: 123,
}

Get all questions
GET /api/questions
Access Public
Body: {}

Get single question
GET /api/questions/id // replace id with question id
Access Public
Body: {}
```

```
Create a test/ quiz
POST /api/tests
Access Public
Body: {
    "name": "software design",
    "description": "very hard",
    "questions": [
        {
            "name": "test 1",
            "type": "MultipleChoice",
            "options": ["123", "abc", "xyz"], // -> can be null
            "answers": ["test"],
            "elo": 123
        },
        {
            "name": "test 2",
            "type": "ShortAnswer",
            "answers": ["test"],
            "elo": 123
        },
        {
            "name": "test 3",
            "type": "CheckBoxes",
            "options": ["123", "abc", "xyz"], // -> can be null
            "answers": ["test"],
            "elo": 123
        }
    ]
}

Get all tests
GET /api/tests
Body {}

Get single test
GET /api/tests/id
example -> /api/tests/6520fdb48bcbeb164e4c9032
```
