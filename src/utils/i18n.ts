const primaryDict = {
  global: {
    ok: "好"
  },
  welcome: {
    welcome: "欢迎",
    loginTip: "提供连接字符串以继续",
    loginFieldSample: "mongodb://username:password@server.documents.azure.com:port/?ssl=true&replicaSet=globaldb",
    loginInvalid: "不是有效的连接字符串",
    loginRunning: "正在建立连接。此过程可能需要几分钟时间..."
  }
};

const alterDict: {
  [T: string]: typeof primaryDict
} = {};

export {primaryDict as e};
