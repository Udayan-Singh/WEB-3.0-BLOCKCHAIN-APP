


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    spolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/QYnXcfjGoPPdhg0qQWNJa9DjGuQxvir5',
      accounts: ['877c1423f4a7c809c64d96de548303b5afc2418e621b65d8029843c15f9eaafd']
    }
  }
}