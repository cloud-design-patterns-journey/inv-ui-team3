import http from 'k6/http';

const BASE_URL = 'http://inv-ui-team3-inventory-team3-dev.apps.tokyo.edu.ihost.com';

export default function () {
    http.get(`${BASE_URL}/inventory/items`);
}
