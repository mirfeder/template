from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/")
def helloWorld():
    return {'data': 'Hello World'}

