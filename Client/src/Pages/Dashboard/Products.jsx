import React, { useEffect, useState } from 'react';
import { getAllProducts, fetchProducts } from '../../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Switch from '@mui/material/Switch';


function renderImageCell(params) {
    const imageUrls = params.value.split(', ');
    return (
        <div>
        {imageUrls.length > 0 ? (
            imageUrls.map((url, index) => (
                <img
                key={index}
                src={url}
                alt={`Image ${index}`}
                style={{ width: 30, height: 30, padding: 2, marginRight: 5 }}
                />
                ))
                ) : (
                    <span>No Images</span>
                    )}
                    </div>
                    );
                }
                function renderSwitchCell(params) {
                    const isPublish = params.row.col6 === 'Yes';
                    
                    const handleChange = (event) => {
                        // Add your logic here to update the 'isPublish' field in your data source
                        const updatedRows = rows.map((row) => {
                            if (row.id === params.row.id) {
                                return { ...row, col6: event.target.checked ? 'Yes' : 'No' };
                            }
                            return row;
                        });
                        
                        // Call any function or dispatch any action needed to update the Redux store or your data source
                        console.log('Switch value changed:', event.target.checked);
                        // Example dispatching action to update the Redux store (if you're using Redux)
                        // dispatch(updateProduct(params.row.id, { isPublish: event.target.checked ? 'Yes' : 'No' }));
                        
                        // Optional: Set the updated rows state to trigger a re-render of the DataGrid
                        setRows(updatedRows);
                    };
                    
                    return <Switch checked={isPublish} onChange={handleChange} />;
                }
                
                
                function Products() {
                    const dispatch = useDispatch();
                    const products = useSelector(getAllProducts);
                    const [loading, setLoading] = useState(true);
                    
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
                    
                    const rows = products.map((product) => ({
                        id: product.id,
                        col1: product.id,
                        col2: product.item_number,
                        col3: product.model,
                        col4: product.description,
                        col5: product.discountPercentage,
                        col6: product.isPublish ? 'Yes' : 'No',
                        col7: product.sold_count,
                        col8: product.gender,
                        col9: product.images.join(', '),
                        col10: product.brand, 
                        col11: product.colors, 
                        col12: product.categories.join(', '), 
                        col13: product.stock.map((size) => size.size).join(', '),
                        col14: product.stock.reduce((totalStock, size) => totalStock + size.stockPerSize, 0),
                    }));
                    
                    const columns = [
                        { field: 'col1', headerName: 'Id', width: 50 },
                        { field: 'col2', headerName: 'Item_Number', width: 150 },
                        { field: 'col3', headerName: 'Nombre', width: 350 },
                        { field: 'col4', headerName: 'Descripcion', width: 150 },
                        { field: 'col5', headerName: 'Porcentaje de Descuento', width: 50 },
                        { field: 'col6', headerName: 'Publicado', width: 150, renderCell: renderSwitchCell, },
                        { field: 'col7', headerName: 'Contador de ventas', width: 100 },
                        { field: 'col8', headerName: 'Generos', width: 150 },
                        { field: 'col9', headerName: 'Imagenes', width: 100, renderCell: renderImageCell },
                        { field: 'col10', headerName: 'Marca', width: 100 },
                        { field: 'col11', headerName: 'Color', width: 100 },
                        { field: 'col12', headerName: 'Categorias', width: 150 },
                        { field: 'col13', headerName: 'Talles', width: 400 },
                        { field: 'col14', headerName: 'Stock', width: 150 },
                    ];
                    
                    return (
                        <div style={{ height: '100%', width: '100%' }}>
                        {loading ? (
                            <span className="loading loading-bars ml-96 mt-28 loading-3xl"></span>
                            ) : (
                                <DataGrid rows={rows} columns={columns} />
                                )}
                                </div>
                                );
                            }
                            
                            export default Products;
                            