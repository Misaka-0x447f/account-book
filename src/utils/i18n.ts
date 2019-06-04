const primaryDict = {
  global: {
    ok: "好"
  },
  welcome: {
    welcome: "欢迎",
    loginTip: "提供连接字符串以继续",
    loginFieldSample: "/DefaultEndpointsProtocol=.+;AccountName=.+;AccountKey=.+;EndpointSuffix=.+/",
    loginInvalid: "不是有效的连接字符串。",
    loginFailure: "建立连接的尝试失败了。请确认您的网络连接，或者是否已针对Blob允许CORS。",
    loginRunning: "正在建立连接。此过程可能需要几分钟时间..."
  }
};

// const alterDict: {
//   [T: string]: typeof primaryDict
// } = {};

export {primaryDict as e};
