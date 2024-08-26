import './res/js/tonconnect-ui.min.js'
window.CONNECT_WALLET = (() => {
  let currentAccount = "";
  const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    //应用元信息配置，比如应用的URL、名称、图标URL等，这些信息会被传递给钱包应用，以便在用户与TON钱包进行交互时提供更好的用户体验和一致性
    manifestUrl: './res/tonconnect-manifest.json',
    // buttonRootId: 'connectButton'
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
  const connectTon = async () => {
    console.log("connectTon click");
    await tonConnectUI.openModal();
    console.log("connectTon",currentAccount);
  }
  return { connectTon }
})();

