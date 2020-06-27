from fastapi import FastAPI

app = FastAPI()


@app.get('/')
def home():
    return {
        "author": "Ahmed Al-Jawahiry",
        "app": "_football",
        "description": "info i care about for teams i care about"
    }
