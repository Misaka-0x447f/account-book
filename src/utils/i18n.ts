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
    c: "C",
    r: "R",
    u: "U",
    d: "D",
    recent: "最近30笔消耗品"
  },
  cat: {
    c: "写入",
    key: "键",
    label: "值"
  },
  c: {
    asset: "资产",
    consumable: "消耗",
    val: "数值",
    note: "注释",
    label: "标签",
    cat: "分类",
    writeError: "写入失败",
  },
  r: {
    asset: "资产",
    consumable: "消耗",
    keyword: "关键字"
  },
  d: {
    index: "数组索引",
    remove: "移除"
  }
};

// const alterDict: {
//   [T: string]: typeof primaryDict
// } = {};

export {primaryDict as e};
