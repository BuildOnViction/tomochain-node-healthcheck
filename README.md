# tomochain-node-healthcheck
check if tomochain node is slow 
### Install
```
npm i
```

### Usage
- Update configuration
```
cp .env.sample .env
# edit .env
```
- setup cronjob to run this command
```
node index.js
```

- Example alert:

![image](https://user-images.githubusercontent.com/17243442/82778429-99fecc80-9e7b-11ea-878d-e6ba5617f589.png)
