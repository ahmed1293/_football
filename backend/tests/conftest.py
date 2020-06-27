import pytest
import responses
from starlette.testclient import TestClient

from app.api import app


@pytest.fixture(scope='session')
def client():
    return TestClient(app)


@pytest.fixture
def mocked_responses():
    with responses.RequestsMock() as rsps:
        yield rsps
