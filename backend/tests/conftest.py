import pytest
import responses
from starlette.testclient import TestClient

from app import settings
from app.api import app


@pytest.fixture(autouse=True)
def mock_env_user(monkeypatch):
    monkeypatch.setattr(settings, 'LOCAL', False)


@pytest.fixture(scope='session')
def client():
    return TestClient(app)


@pytest.fixture
def mocked_responses():
    with responses.RequestsMock() as rsps:
        yield rsps
