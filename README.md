# 新型コロナウイルス感染症対策サイト[松戸市版]

各地で立ち上がっているサイトのまとめ
https://hackmd.io/9TTyyjchR8ufuMd9z08Rcg?view

### 日本語 | [English](./README_EN.md) | [Spanish](./README_ES.md)

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいですm(_ _)m

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。

## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上
- eslintエラーが続出しますので、docker-compose を使われることをおすすめします
- 開発版は、covid19-matsudo developmentで行っております。
- 関連ツールとして[covid19-chiba-tools](https://github.com/civictechzenchiba/covid19-chiba-tools)があります。ご参照ください。

**yarn を使う場合**
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

