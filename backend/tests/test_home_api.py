

def test_get_home(client):
    response = client.get('/')
    assert response.status_code == 200
    assert response.json() == {
        "author": "Ahmed Al-Jawahiry",
        "app": "_football",
        "description": "info i care about for teams i care about"
    }