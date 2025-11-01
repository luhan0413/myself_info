# 使用輕量級的 Nginx 作為基礎映像
FROM nginx:alpine

# 複製網站文件到 Nginx 的預設服務目錄
COPY . /usr/share/nginx/html/

# 複製自定義的 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# Nginx 會自動啟動，不需要額外的 CMD
