# Mini.js
 * Mini.js is a little and simple example of library for http(s) requests.
 
 
 ## Example to Use:
 
```javascript
 var mini = new Mini('http://192.168.1.10:8000/', "JWT "+localStorage.getItem("TOKEN"));
    mini.client('GET','files').
      then(function(data){
        console.log(data)
      })
```

