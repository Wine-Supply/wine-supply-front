import React from 'react';
import { fetchUtils, Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
//import UserList from "./Users";
import WineList from './WineList';
import UserList from './UserList';
import UserEdit from './UserEdit';
import WineEdit from './WineEdit';
import WineCreate from './WineCreate';
import Charts from './Charts';
import NewsletterForm from './NewsletterForm';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${JSON.parse(token)}`);
    return fetchUtils.fetchJson(url, options);
}

const api = restProvider('http://localhost:3001', httpClient)

const AdminDash = () => {

    return(
    <Admin basename="/admin" dataProvider={api} dashboard={Charts}>
        {/* <Resource name='chart' list={Charts}/> */}
        <Resource name='admin/wines' list={WineList} create={WineCreate} edit={WineEdit} delete={WineList}/>
        <Resource name='admin/users' list={UserList} edit={UserEdit}/>
        <Resource name='newsletter' list={NewsletterForm} />
    </Admin>)
}


export default AdminDash