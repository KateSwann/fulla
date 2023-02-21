# Деплой vue-приложения для frontend-а публичной части

## Зависимости:
в скобках указаны протестированные версии
- nginx (v1.17.6)
- npm (v8.3.1)
- node (v16.14.0)
- @vue/cli-service (v ^5.0.8)

1. Склонировать из репозитория тело vue-проекта из папки 'fulla' на сервер в папку 'webapps/fulla'

2. Устанавливаем/обновляем зависимости для продакшена
```console
npm install --production
```

3. Если не установлена зависимость, ставим:
 ```console
npm i @vue/cli-service
```

4. Собираем проект
 ```console
npm run build
```

5. В директории /etc/nginx/sites-available/ создать файл fulla.conf
```console
sudo nano /etc/nginx/sites-available/fulla.conf
```

6. Добавить в конфигурационный файл:
```
server {
    listen 80;
    listen [::]:80;
    server_name fulla.com www.fulla.com;
    root /home/username/webapps/fulla/dist;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_log  /var/log/nginx/fulla-vue-app-error.log;
    access_log /var/log/nginx/fulla-vue-app-access.log;
}
```

7. Создать симлинк для этого файла:
```console
sudo ln -s /etc/nginx/sites-available/fulla.conf /etc/nginx/sites-enabled/fulla.conf
```

8. Проверить корректность созданного симлинка
```console
sudo nginx -t
```

9. Перезапустить nginx
```console
sudo systemctl restart nginx
```

9. Проверяем статус nginx
```console
sudo systemctl status nginx
```
