const primaryDict = {
  global: {
    ok: "好",
    back: "取消"
  },
  welcome: {
    welcome: "欢迎",
    loginTip: "提供连接字符串以继续",
    loginFieldSample: "/DefaultEndpointsProtocol=.+;AccountName=.+;AccountKey=.+;EndpointSuffix=.+/",
    loginInvalid: "不是有效的连接字符串;",
    loginFailure: "失败;",
    loginRunning: "建立连接;此过程可能需要几分钟时间...",
    loginInitial: "初始化数据库...",
    loginPulling: "下载数据库..."
  },
  dashboard: {
    write: "写入",
    read: "读取",
    recent: "最近30笔消耗品"
  },
  cat: {
    index: "分类",
    write: "写入",
    key: "键",
    label: "值"
  },
  write: {
    asset: "资产",
    consumable: "消耗",
    val: "数值",
    note: "注释",
    label: "标签",
    cat: "分类",
    writeError: "写入失败"
  },
  read: {
    asset: "资产",
    consumable: "消耗",
    keyword: "关键字"
  }
};

// const alterDict: {
//   [T: string]: typeof primaryDict
// } = {};

export {primaryDict as e};
