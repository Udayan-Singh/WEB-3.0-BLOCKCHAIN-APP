document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const walletAddress = document.querySelector('#wallet-address').value;
    mineEth(walletAddress);
});