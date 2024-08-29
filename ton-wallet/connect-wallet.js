import './res/js/tonconnect-ui.min.js'

window.TON_WALLET = (() => {
  let currentAccount = "";
  const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://ronsyisme.github.io/ton/res/tonconnect-manifest.json',
    buttonRootId: 'connectButton'
  });
  //监听连接状态
  tonConnectUI.onStatusChange(
    walletAndwalletInfo => {
      //钱包详细信息
      console.log("walletAndwalletInfo", walletAndwalletInfo);
      currentAccount = tonConnectUI.account;
      const currentIsConnectedStatus = tonConnectUI.connected;
      //钱包账号
      console.log("currentAccount", currentAccount);
      //连接状态
      console.log("currentIsConnectedStatus", currentIsConnectedStatus);
    }
  );
  //发起交易
  const sendTransaction = async (targetAddress, amount) => {
    if (!tonConnectUI.connected) {
      console.log("未链接钱包");
      return;
    }
    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
      messages: [
        {
          address: targetAddress,
          amount: amount //"20000000",
        },
      ]
    }
    try {
      const result = await tonConnectUI.sendTransaction(transaction);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }
  // 连接
  const connectTon = () => {
    tonConnectUI.openModal();
  }
  //断开连接
  const disconnectTon = () => {
    tonConnectUI.disconnect();
  }
  return { connectTon, disconnectTon, sendTransaction }
})();


