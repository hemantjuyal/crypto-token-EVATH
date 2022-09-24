# ERC-20 Crypto Token EVATH (Eva Token)

## What is ERC-20 token
The ERC-20 token a standard from ERC-20 to design Fungible Tokens. These fungible tokens have a property that makes each token be exactly the same as another token.


We are naming our token as "EVA Token" and our token symbol will be "EVATH" with the following capabilities

- Transfer Token
```
function transferToken(address receiver, uint256 tokenAmount) public returns (bool) {
        uint256 balance = accountBalance(msg.sender);
        uint256 tokenAmount_ = toTransactionUnits(tokenAmount);
        require(receiver != address(0), "invalid receiver. please check");
        require(tokenAmount_ <= balance, "low balance. please check");
        return transfer(receiver, tokenAmount_);
    }
```

- Account Balance Check
```
function accountBalance(address account) public view returns (uint256) {
        return balanceOf(account);
    }
```
- Issuing more EVATH tokens
```
function issueMoreSupply(uint256 amount) public onlyOwner{
        _mint(msg.sender, toTransactionUnits(amount));
    }
```

- Token burning scenarios if in case required
```
function burnTokenForAccount(address account, uint256 tokenAmount) public onlyOwner {
        uint256 tokenAmount_ = toTransactionUnits(tokenAmount);
        require(account != address(0), "invalid receiver. please check");
        return _burn(account, tokenAmount_);
    }
```

<br/>

## Deploying EVATH on Polygon

![EVA Token: Deploying ERC-20 token on Polygon](https://cdn-images-1.medium.com/max/800/1*qSKUreXAzWXGsyFeDfBBVw.png)


