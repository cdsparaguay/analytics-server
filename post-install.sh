#!/bin/bash
sysctl -w vm.max_map_count=262144


##instalacion de searchguard 
bin/elasticsearch-plugin install -b com.floragunn:search-guard-6:6.2.2-21.0
cd plugins/search-guard-6/tools
./install_demo_configuration.sh
#las claves para todos los ceriticados se generan en <elsatichome>/config y tienen clase "changeit"
#editar elasticsearch.yml y agregar 
searchguard.enterprise_modules_enabled: false

#install kibana plugin 

SG_PLUGIN_KIBANA=https://search.maven.org/remotecontent?filepath=com/floragunn/search-guard-kibana-plugin/6.2.2-10/search-guard-kibana-plugin-6.2.2-10.zip
SG_PLUGIN_VERS=search-guard-kibana-plugin-6.2.2-10.zip
curl $SG_PLUGIN_KIBANA --output $SG_PLUGIN_VERS
bin/kibana-plugin install file:$SG_PLUGIN_VERS
#kibana.yml 
elasticsearch.ssl.verificationMode: none
# usuario por defecto que el plugin crea para kibana 
elasticsearch.username: "kibanaserver"
elasticsearch.password: "kibanaserver"
#copiar desde el elastic los cerfificados 
/usr/share/elasticsearch/config/*.pem
/usr/share/kibana/config
