# 海豹核心 Enhanced DnD 插件

### 介绍

这是一个用于海豹核心的插件，主要提供了一些 DnD 核心模块中没有的功能，比如物品栏，消耗性物品使用的跟踪，购买物品自动计算金钱等。

未来我还打算加入一些其他的功能，比如长休/短休自动恢复各种特性，自动化魔法物品的充能等。

### 如何使用

clone或下载项目，随后:

```
npm install
npm run build
```

好的，现在你的项目被编译成功了，就在dist目录。

### 开发指南 / 贡献代码

目前进展缓慢的是物品表的录入，这个工作很累人，不过完成也很简单，在data目录下有一个dnd5e.ts文件，里面是一个物品表的定义，你可以参考现成的格式，添加没有的物品。

如果你有兴趣参与的话欢迎随时贡献 pr 给我
