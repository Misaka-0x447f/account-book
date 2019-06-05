const primaryDict = {
  global: {
    ok: "好",
    back: "C"
  },
  welcome: {
    welcome: "欢迎",
    loginTip: "提供连接字符串以继续",
    loginFieldSample: "/DefaultEndpointsProtocol=.+;AccountName=.+;AccountKey=.+;EndpointSuffix=.+/",
    loginInvalid: "不是有效的连接字符串;",
    loginFailure: "建立连接的尝试失败了;请确认您的网络连接;或者是否已针对Blob允许CORS;",
    loginRunning: "建立连接;此过程可能需要几分钟时间...",
    loginInitial: "初始化数据库...",
    loginPulling: "下载数据库..."
  },
  dashboard: {
    write: "写入",
    read: "读取"
  },
  write: {
    asset: "资产",
    consumable: "消耗",
    val: "数值",
    note: "注释",
  }
};

// const alterDict: {
//   [T: string]: typeof primaryDict
// } = {};

export {primaryDict as e};
