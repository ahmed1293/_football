import os

API_TOKEN = os.getenv('API_TOKEN')
LOCAL = os.getenv('LOCAL', default=False) == 'True'
