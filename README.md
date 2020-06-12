# tomochain-node-healthcheck
check if tomochain node is slow 
### Install
Required: NodeJS 10
```
npm i
```

### Usage
- Update configuration
```
cp .env.sample .env
# edit .env
```
- setup cronjob to run this command on the server which is running masternode/fullnode
```
node index.js
```

- Example alert:

![image](https://user-images.githubusercontent.com/17243442/83495687-3d865780-a4e2-11ea-9d51-a194ad85a953.png)
