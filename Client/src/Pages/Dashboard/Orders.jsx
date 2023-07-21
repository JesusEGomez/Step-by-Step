import React, { useEffect, useState } from 'react';
import Title from './Title';
import ordersSlice, {fetchOrders, getOrders} from '../../features/ordersSlice'
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';





export default function Orders() {
const dispatch=useDispatch()
const orders =useSelector(getOrders);
useEffect(()=>{
    dispatch(fetchOrders())
}, [dispatch])

console.log(orders)

const rows = orders.map((order)=>({
    id: order.id,
    col1: order.id,
    col2: order.orderNumber,
    col3: order.paymentStatus,
    col4: order.fullFillmentStatus,
    col5:order.email
}))

const columns=[
    { field:'col1', headerName:"ID", width: 250 },
    { field:'col2', headerName:"Numero de orden", width: 150 },
    { field:'col3', headerName:"Estado del pago ", width: 150 },
    { field:'col4', headerName:"Envio", width: 150 },
    { field:'col5', headerName:"Email", width: 350 },

]

    return (
        <React.Fragment>
        
        <div style={{height:'20%',width:'100%'}}>
        <Title>Ultimas Ordenes</Title>
        <DataGrid rows={rows} columns={columns} />


        </div>
        </React.Fragment>
        );
    }