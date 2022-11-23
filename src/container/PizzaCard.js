import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Rating from '@mui/material/Rating';
import { Button, FormControlLabel, Radio, Switch, TextField } from '@mui/material';
import Navbar from '../components/Navbar';
import '../components/index.css';
import Footer from '../components/Footer';
import CloseIcon from '@material-ui/icons/Close';

export default function PizzaCard(details) {
  const [inputTextPrice, setInputTextPrice] = useState("");
  const [inputTextRating, setInputTextRating] = useState("");
  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalID, setModalID] = useState();
  const [modalName, setModalName] = useState();
  const [modalSize, setModalSize] = useState();
  const [modalToppings, setModalToppings] = useState();
  const [selectedSizeValue, setSelectedSizeValue] = useState();
  const [selectedToppingsValue, setSelectedToppingsValue] = useState();


  const [filterData, setFilterData] = useState();

  const handleChangeSize = (event) => {
    setSelectedSizeValue(event.target.value);
    // console.log(selectedSizeValue)
  };
  const handleChangeToppings = (event) => {
    setSelectedToppingsValue(event.target.value);
    // console.log(selectedToppingsValue)
  };

  let inputHandlerPrice = (e) => {
    setInputTextPrice(e.target.value);
  };

  let inputHandlerRating = (e) => {
    setInputTextRating(e.target.value - 1);
  };

  const inputHandlerType = (event) => {
    setChecked(event.target.checked);
  };

  const filteredDataPrice = (data, filterPrice) => {
    // console.log({filterPrice})
      if(!filterPrice){
        return data;
      }else{
        // console.log("filter: ",data?.filter((ep) => ep.price.toString().includes(filterPrice)))
        return data?.filter((ep) => ep.price.toString().includes(filterPrice))
      }
  }

  const filteredDataRating = (data, rating)=> {
    // console.log({rating})
    if(!rating){
      return data;
    }else{
      // console.log("rating filter: ",data?.filter((ep) => ep.price.toString().includes(rating)))
      return data?.filter((ep) => ep.rating.toString().includes(rating))
    }
  }

  const filteredDataType = (data, type)=> {
    // console.log({type})
    if(!type){
      return data;
    }else{
      return data?.filter((ep) => ep.isVeg)
    }
  }

  const filterDataFunction = (data, filterPrice = "", filterRating = "", filterType = false)=> {
      let dataAfterFilter = filteredDataPrice(data, filterPrice);
      dataAfterFilter = filteredDataRating(dataAfterFilter, filterRating);
      dataAfterFilter = filteredDataType(dataAfterFilter, filterType);
      setFilterData(dataAfterFilter)
  }

  useEffect(()=> {
    setFilterData(details.details);
  }, [details])

  useEffect(()=> {
    
    if(filterData){
      console.log("render")
      filterDataFunction(details.details, inputTextPrice, inputTextRating, checked)
    }else{
      console.log("no data")
    }

  }, [inputTextPrice, inputTextRating, checked])


  const handleOpenModal = (id, name, size, toppings) => {
    setModal(true);
    setModalID(id);
    setModalName(name);
    setModalSize(size);
    setModalToppings(toppings);
  }
  const handleCloseModal = () => {
    setModal(false);
  }

  const handleSubmit = (id, name, size, toppings) => {
    localStorage.setItem('ID', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Size', size);
    localStorage.setItem('Toppings', toppings);

    setModal(false);
  }

  // console.log(details?.details);

  if(!details){
    return <div> Loading...</div>
  }
  return (
    <div>
      <div style={{ backgroundColor: '#051426' }} className={modal ? "blur" : ""}>
        <Navbar />
        <div className='flex justify-between p-5 text-white'>
          <div >
            <TextField
              id="outlined-basic"
              className='text-white'
              onChange={inputHandlerPrice}
              variant="outlined"
              fullWidth
              label="Price"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              onChange={inputHandlerRating}
              variant="outlined"
              type="number"
              fullWidth
              label="Rating"
            />
          </div>
          <div>
            <h1>
              <Switch
                checked={checked}
                onChange={inputHandlerType}
                inputProps={{ 'aria-label': 'controlled' }}
              />Is-Veg</h1>
          </div>

        </div>
        <Grid container spacing={2} className="p-5">
          {filterData?.map((item, index) => (
            <Grid xs={12} md={3} lg={3}>
              <Card key={item.id} sx={{ maxWidth: 345 }} onClick={() => handleOpenModal(item.id, item.name, item.size[0].items, item.toppings[0].items)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img_url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography className="text-2xl">
                    {item.description}
                  </Typography>
                  <Typography>
                    <h1 className='font-bold'>Type: {item.isVeg == true ? <h1 className='text-green-500 inline'>Veg</h1> : <h1 className='text-red-500 inline'>Non-Veg</h1>}</h1>
                  </Typography>
                </CardContent>
                <div className='flex justify-between p-5 -mt-5'>
                  <h1 className="text-green-500 text-xl">Price: ₹{item.price}</h1>
                  <Rating value={item.rating} />
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Footer />
      </div>
      {modal && (
        <div className="">
          <Grid container className="bg-white modalPosition rounded-lg p-5">
            <Grid xs={12}>
              <div className='flex justify-end'> <CloseIcon onClick={handleCloseModal} /></div>
              <h1 className=''>Name: <h1 className='font-bold inline'>{modalName}</h1></h1>
              <h1 className='font-bold pt-5'>Choose Size</h1>
              {modalSize?.map((item) => (
                <FormControlLabel control={
                  <Radio color="primary" value={item.size} checked={selectedSizeValue === item.size} onChange={handleChangeSize} />
                } label={item.size} />
              ))}
              <h1 className='font-bold pt-5'>Choose Toppings:</h1>
              {modalToppings?.map((item) => (
                <FormControlLabel control={
                  <Radio color="primary" value={item.name} checked={selectedToppingsValue === item.name} onChange={handleChangeToppings} />
                } label={item.name} />
              ))}
              <div className='flex justify-center pt-5'>
                <Button color="primary" variant="contained" onClick={() => handleSubmit(modalID, modalName, selectedSizeValue, selectedToppingsValue )}>Submit</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  )
}
