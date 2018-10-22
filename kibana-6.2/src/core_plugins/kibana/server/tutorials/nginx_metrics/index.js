import { TUTORIAL_CATEGORY } from '../../../common/tutorials/tutorial_category';
import { ON_PREM_INSTRUCTIONS } from './on_prem';
import { ELASTIC_CLOUD_INSTRUCTIONS } from './elastic_cloud';
import { ON_PREM_ELASTIC_CLOUD_INSTRUCTIONS } from './on_prem_elastic_cloud';

export function nginxMetricsSpecProvider() {
  return {
    id: 'nginxMetrics',
    name: 'Nginx metrics',
    category: TUTORIAL_CATEGORY.METRICS,
    shortDescription: 'Fetches internal metrics from the Nginx HTTP server.',
    longDescription: 'The `nginx` Metricbeat module fetches internal metrics from the Nginx HTTP server.' +
                     ' The module scrapes the server status data from the web page generated by the' +
                     ' [ngx_http_stub_status_module](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html)' +
                     ' module, which needs to be enabled in you Nginx installation.' +
                     ' [Learn more]({config.docs.beats.metricbeat}/metricbeat-module-nginx.html)' +
                     ' about the nginx module.',
    //iconPath: '', TODO
    artifacts: {
      dashboards: [
        {
          id: '023d2930-f1a5-11e7-a9ef-93c69af7b129',
          linkLabel: 'Nginx metrics dashboard',
          isOverview: true
        }
      ],
      exportedFields: {
        documentationUrl: '{config.docs.beats.metricbeat}/exported-fields-nginx.html'
      }
    },
    completionTimeMinutes: 10,
    previewImagePath: '/plugins/kibana/home/tutorial_resources/nginx_metrics/screenshot.png',
    onPrem: ON_PREM_INSTRUCTIONS,
    elasticCloud: ELASTIC_CLOUD_INSTRUCTIONS,
    onPremElasticCloud: ON_PREM_ELASTIC_CLOUD_INSTRUCTIONS
  };
}
