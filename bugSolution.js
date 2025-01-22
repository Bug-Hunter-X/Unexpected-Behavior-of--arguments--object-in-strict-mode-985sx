```javascript
function myFunc() {
  const args = Array.from(arguments);
  console.log(args.map(arg => arg * 2));
}

myFunc(1,2,3);
```