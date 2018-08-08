FROM nginx:1.13.12
MAINTAINER Nelson Duranona <nelsonds.py@gmail.com>

ADD install_openresty.sh /install_openresty.sh
ADD nginx-ldap-auth.conf /etc/nginx/conf.d/nginx-ldap-auth.conf
RUN chmod +x ./install_openresty.sh

CMD apt-get update
CMD apt install -y curl

