#Instala nginx
docker run -d -p 8080:80 -v /vagrant/video-service-slice/kubernetes-setup/nginx.conf:/etc/nginx/nginx.conf nginx