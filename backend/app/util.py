import re


def to_camel(string: str) -> str:
    return re.sub(r'_([a-z])', lambda m: m.group(1).upper(), string)
