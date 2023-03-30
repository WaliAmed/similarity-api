export const nodejs = `const axios = require("axios");
const options = {
    method: 'POST',
    url: 'https://similarityapi.com/api/v1/similarity',
    params: {
      text1: 'First text',
      text2: 'Second text'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`;

export const python = `import requests
url = 'https://similarityapi.com/api/v1/similarity'
api_key = 'YOUR_API_KEY'
text1 = 'First text'
text2 = 'Second text'
headers = {
    'Authorization': api_key
}
payload = {
    'text1': text1,
    'text2': text2
}
response = requests.post(url, headers=headers, json=payload)
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;

export const Fetch = `const url = 'https://similarityapi.com/api/v1/similarity';
    const params = { text1: 'First text', text2: 'Second text' };
    const headers = { Authorization: 'YOUR_API_KEY' };
    
    fetch(url + '?' + new URLSearchParams(params), {
        method: 'POST',
        headers: headers
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));`;

export const GoLang = `package main

    import (
        "bytes"
        "encoding/json"
        "fmt"
        "net/http"
    )
    
    func main() {
        url := "https://similarityapi.com/api/v1/similarity"
        params := map[string]string{"text1": "First text", "text2": "Second text"}
        jsonParams, err := json.Marshal(params)
        if err != nil {
            fmt.Println("Error marshaling JSON:", err)
            return
        }
        req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonParams))
        if err != nil {
            fmt.Println("Error creating HTTP request:", err)
            return
        }
        req.Header.Set("Content-Type", "application/json")
        req.Header.Set("Authorization", "YOUR_API_KEY")
        client := &http.Client{}
        resp, err := client.Do(req)
        if err != nil {
            fmt.Println("Error making API request:", err)
            return
        }
        defer resp.Body.Close()
        var data map[string]interface{}
        if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
            fmt.Println("Error decoding JSON response:", err)
            return
        }
        fmt.Println(data)
    }`;
