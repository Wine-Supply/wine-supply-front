import React from 'react';
import { fetchUtils, Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
//import UserList from "./Users";
import WineList from './WineList';
import UserList from './UserList';


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
    <Admin basename="/admin" dataProvider={api}>
        <Resource name='admin/wines' list={WineList} delete={WineList}/>
        <Resource name='admin/users' list={UserList} delete={UserList} />
    </Admin>)
}


export default AdminDash