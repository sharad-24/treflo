export const pizzaList =  () => (dispach) => {

    let url = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    let result = fetch(url).then((data) => {
        data.json().then((dataJson) => {
            // console.log(dataJson);
            return dispach({
                type: "PIZZA_LIST",
                id: dataJson,
            })
        })
    })

}