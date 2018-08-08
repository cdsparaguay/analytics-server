#!/bin/bash
curl -H "Content-Type: application/json" -XPOST "localhost:10200/py/casos/_bulk?pretty&refresh" --data-binary "@datos.test.json"



