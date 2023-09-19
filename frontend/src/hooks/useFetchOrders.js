import { useQuery } from 'react-query';
import axios from 'axios';

const fetchOrders = () => axios.get('/chef/get-orders')

export const useFetchOrders = () => {
    return useQuery('waiting-orders', fetchOrders,
        {
            staleTime: 50000,
            select: data => data.data
        })
}
