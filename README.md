# 092网站
本仓库是一个静态网站，介绍yima与相关练习。采用[ vitepress ](https://vitepress.dev/zh/)框架。感谢[ 虎码官网](https://www.tiger-code.com/)和[ 声笔系列输入法 ](https://sbxlm.github.io/) [ 易码 ](https://www.github.com/yb6b/yima)。

## 本地运行
1. 克隆[ 本仓库 ](https://www.github.com/yb6b/yima)到本地。
2. 执行 `pnpm i` 安装依赖。
3. 执行 `pnpm dev` 预览网站。
4. 执行 `pnpm build` 生成最终的网站。

如果要把本网站部署到你的平台上，修改 `docs/.vitepress/config.mts` 里的 `base`。也要留意markdown文件的所有的 `/yima` 开头的地址。

## 开源协议
本网站遵守[ GPLv3 ](LICENSE)协议。