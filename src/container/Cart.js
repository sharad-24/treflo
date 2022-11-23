import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Rating } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function Cart(details) {

    const [selectedValue, setSelectedValue] = useState([]);
    const [list, setList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantitiy] = useState(0)

    useEffect(() => {
        const id = localStorage.getItem('ID');
        const size = localStorage.getItem('Size');
        const toppings = localStorage.getItem('Toppings');

        setSelectedValue((selectedValue) => [
            {
                id,
                size,
                toppings
            },

        ]);

        for (var i = 0; i <= details.details?.length; i++) {
            if (id == details.details[i].id) {
                setList(details.details[i]);
                console.log("found", id);
                break;
            } else {
                console.log("not found")
            }

        }

    }, [])
    // console.log("sharad", selectedValue)

    const handleAdd = () => {
        setQuantitiy(quantity + 1)
        setTotalPrice(totalPrice + list.price);

    }
    const handleRemove = () => {
        setQuantitiy(quantity - 1);
        setTotalPrice(totalPrice - list.price);

    }

    return (
        <div style={{ backgroundColor: '#051426' }}>
            <Navbar />
            <Grid container spacing={2} className="p-5">

                <Grid xs={12} md={3} lg={3}>
                    <Card key={list.id} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={list.img_url}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {list.name}
                            </Typography>
                            <Typography className="text-2xl">
                                {list.description}
                            </Typography>
                            <Typography>
                                <h1 className='font-bold'>Type: {list.isVeg == true ? <h1 className='text-green-500 inline'>Veg</h1> : <h1 className='text-red-500 inline'>Non-Veg</h1>}</h1>
                            </Typography>
                            <h1 className='font-bold'>Selected Values: <h1 className='inline font-normal'>{selectedValue[0]?.size}</h1> and <h1 className='inline font-normal'>{selectedValue[0]?.toppings}</h1></h1>
                        </CardContent>
                        <div className='flex justify-between p-5 -mt-8'>
                            <div className='flex'>
                                <h1>Quantity:</h1>
                                <AddIcon onClick={handleAdd} />
                                <h1>{quantity}</h1>
                                <RemoveIcon onClick={handleRemove} />
                            </div>
                            <Rating value={list.rating} />
                        </div>
                        <h1 className="text-green-500 text-xl p-5 -mt-5">Total Price: ₹{totalPrice}</h1>
                    </Card>
                </Grid>

            </Grid>
            <Footer />
        </div>
    );
}