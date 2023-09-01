import './_products.scss';

const Products = ()=>{
    const productData =[
        {
            pName:"T-Shirt",
            price:45,
            img:"tshirt1.jpg"
        },
        {
            pName:"T-Shirt",
            price:45,
            img:"tshirt1.jpg"
        },
        {
            pName:"T-Shirt",
            price:45,
            img:"tshirt1.jpg"
        },
        {
            pName:"T-Shirt",
            price:45,
            img:"tshirt1.jpg"
        },
        {
            pName:"T-Shirt",
            price:45,
            img:"tshirt1.jpg"
        },
        {
            pName:"T-Shirt",
            price:45,
            img:"tshirt1.jpg"
        }
    ]
    return (
        <div className='products-container'>
            {
                productData.map((product,key)=>{
                    return(
                        <div  className='mx-5 p-3 product-card'>
                        <div className='product-image-container'>
                            <img src={require('../../Assets/'+product.img)}/>
                        </div>
                        <div className='product-info'>
                            <h5><a href='#'>{product.pName}</a></h5>
                            <p className='product-price'>{product.price}</p>
                            <div className='product-rating'>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                                <i className='fa fa-star'/>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Products;