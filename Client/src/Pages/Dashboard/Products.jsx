import React, { useEffect, useState } from 'react';
import { getAllProducts, fetchProducts } from '../../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Switch from '@mui/material/Switch';
import Title from './Title';
import axios from 'axios';

function renderImageCell(params) {
    const imageUrls = params.value.split(', ');
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {imageUrls.length > 0 ? (
                imageUrls.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Image ${index}`}
                        style={{ width: 55, height: 55, padding: 2, marginRight: 5 }}
                    />
                ))
            ) : (
                <span>No Images</span>
            )}
        </div>
    );
}

function Products() {
    const dispatch = useDispatch();
    const productsFromRedux = useSelector(getAllProducts);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts())
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [dispatch]);

    useEffect(() => {
        setProducts(
            productsFromRedux.map((product) => ({
                ...product,
                col6: product.isPublish ? true : false,
            }))
        );
    }, [productsFromRedux]);

    const handleSwitchChange = (id) => (event) => {
        const updatedProducts = products.map((product) =>
            product.id === id ? { ...product, col6: event.target.checked } : product
        );
        setProducts(updatedProducts);

        const updateData = {
            id,
            isPublish: event.target.checked,
        };

        axios
            .put(`http://localhost:3001/products/update`, updateData)
            .then((response) => {
                console.log('Update successful:', response.data);
            })
            .catch((error) => {
                console.error('Error updating data:', error);
            });
    };

    const rows = products.map((product) => ({
        id: product.id,
        col1: product.id,
        col2: product.item_number,
        col3: product.model,
        col4: product.description,
        col5: product.discountPercentage,
        col6: (
            <Switch
                checked={product.col6}
                onChange={handleSwitchChange(product.id)}
            />
        ),
        col7: product.sold_count,
        col8: product.gender,
        col9: product.images.join(', '),
        col10: product.brand,
        col11: product.colors,
        col12: product.categories.join(', '),
        col13: product.stock.map((size) => size.size).join(', '),
        col14: product.stock.reduce(
            (totalStock, size) => totalStock + size.stockPerSize,
            0
        ),
    }));

    const columns = [
        { field: 'col1', headerName: 'Id', width: 50 },
        { field: 'col2', headerName: 'Item_Number', width: 150 },
        { field: 'col3', headerName: 'Nombre', width: 350 },
        { field: 'col4', headerName: 'Descripcion', width: 150 },
        { field: 'col5', headerName: 'Porcentaje de Descuento', width: 50 },
        {
            field: 'col6',
            headerName: 'Publicado',
            width: 150,
            renderCell: (params) => params.row.col6,
        },
        { field: 'col7', headerName: 'Contador de ventas', width: 100 },
        { field: 'col8', headerName: 'Generos', width: 100 },
        { field: 'col9', headerName: 'Imagenes', width: 250, renderCell: renderImageCell },
        { field: 'col10', headerName: 'Marca', width: 100 },
        { field: 'col11', headerName: 'Color', width: 100 },
        { field: 'col12', headerName: 'Categorias', width: 150 },
        { field: 'col13', headerName: 'Talles', width: 400 },
        { field: 'col14', headerName: 'Stock', width: 150 },
    ];

    return (
        <div style={{ height: '95%', width: '100%' }}>
            <Title>Productos</Title>
            {loading ? (
                <span className="loading loading-bars ml-96 mt-28 loading-3xl"></span>
            ) : (
                <DataGrid rows={rows} columns={columns} />
            )}
        </div>
    );
}

export default Products;
