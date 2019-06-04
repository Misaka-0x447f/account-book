const primaryDict = {
  global: {
    ok: "好"
  },
  welcome: {
    welcome: "欢迎",
    loginTip: "提供连接字符串以继续",
    loginFieldSample: "/DefaultEndpointsProtocol=.+;AccountName=.+;AccountKey=.+;EndpointSuffix=.+/",
    loginInvalid: "不是有效的连接字符串。",
    loginFailure: "建立连接的尝试失败。可能存在网络连接问题、没有读写权限或CORS配置不正确。可以使用F12来确定问题。",
    loginRunning: "正在建立连接。此过程可能需要几分钟时间，具体取决于您的网络环境。"
  }
};

const alterDict: {
  [T: string]: typeof primaryDict
} = {};

export {primaryDict as e};
