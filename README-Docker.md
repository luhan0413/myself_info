# Docker 部署說明

## 建立和執行

### 方法 1：使用 Docker Compose（推薦）
```bash
# 建立並啟動容器
docker-compose up -d

# 停止容器
docker-compose down

# 重新建立映像並啟動
docker-compose up -d --build
```

訪問網站：http://localhost:8080

### 方法 2：使用 Docker 指令
```bash
# 建立 Docker 映像
docker build -t portfolio-website .

# 執行容器
docker run -d -p 8080:80 --name portfolio portfolio-website

# 停止容器
docker stop portfolio

# 刪除容器
docker rm portfolio

# 查看運行中的容器
docker ps
```

訪問網站：http://localhost:8080

## 部署到雲端平台

### 部署到 Docker Hub
```bash
# 登入 Docker Hub
docker login

# 標記映像
docker tag portfolio-website your-username/portfolio-website:latest

# 推送到 Docker Hub
docker push your-username/portfolio-website:latest
```

### 部署到其他伺服器
```bash
# 在目標伺服器上拉取映像
docker pull your-username/portfolio-website:latest

# 執行容器
docker run -d -p 80:80 --name portfolio your-username/portfolio-website:latest
```

## 常用指令

```bash
# 查看容器日誌
docker logs portfolio-website

# 進入容器內部
docker exec -it portfolio-website sh

# 重新啟動容器
docker restart portfolio-website
```
