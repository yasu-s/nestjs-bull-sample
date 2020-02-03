## 概要

* NestJS で bull を使用したサンプルです。

## 実行環境

* Docker
* Docker Compose
* Redis
* Node.js - 10.x
* Yarn - 1.17.x

## 使用ライブラリ

* @nestjs/core - 6.7.x
* @nestjs/bull - 0.0.1
* bull - 3.12.1

## 動作確認

### 1. サンプルのダウンロード

```bash
git clone git@github.com:yasu-s/nestjs-bull-sample.git
```

### 2. パッケージインストール  

```bash
cd nestjs-bull-sample
yarn install
```

### 3. Redis起動  

```bash
docker-compose up -d
```

### 4. サンプルの起動  

```bash
yarn start
```

## 参考URL

* https://docs.nestjs.com/techniques/queues
