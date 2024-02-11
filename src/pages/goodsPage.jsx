import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Spinner from 'react-bootstrap/Spinner';

import { useGetAllGoodsQuery } from '../query/goodsApiSlice';


export function GoodsPage() {

    const { data: goods = [], isLoading } = useGetAllGoodsQuery();



    const goodsList = goods.map(good => {
        return (
            isLoading ?
                <Card style={{ width: '18rem' }}>
                    <Placeholder animation="glow" style={{ width: "286px", height: "180px", display: "flex", justifyContent: "center", alignItems: "center" }} lg={1}>
                        {/* <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner> */}
                        <Spinner animation="border" variant="secondary" />
                    </Placeholder>
                    {/* <Placeholder as={Card.Img} animation="glow" lg={15} /> */}
                    {/* <Card.Img variant="top" as={Card.Img} animation="glow" style={{ width: "286px", height: "180px" }} /> */}
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                </Card>
                :
                <Card key={good.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={good.image} style={{ width: "286px", height: "180px", display: "flex", justifyContent: "center", alignItems: "center" }} />
                    <Card.Body>
                        <Card.Title>{good.title}</Card.Title>
                        <Card.Text>
                            {good.description}
                        </Card.Text>
                        <div className='goods__price'>{good.price} рублей</div>
                        <Button variant="primary">В корзину</Button>
                    </Card.Body>
                </Card>

        )
    })
    console.log(isLoading);
    return (

        <section className='goods'>
            {goodsList}

        </section>

        // <div className="d-flex justify-content-around">
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src="holder.js/100px180" style={{ width: "286px", height: "180px", display: "flex", justifyContent: "center", alignItems: "center" }} />
        //         <Card.Body>
        //             <Card.Title>Card Title</Card.Title>
        //             <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //             </Card.Text>
        //             <div className='goods__price'>20 рублей</div>
        //             <Button variant="primary">Go somewhere</Button>
        //         </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem' }}>
        //         <Placeholder animation="glow" style={{ width: "286px", height: "180px", display: "flex", justifyContent: "center", alignItems: "center" }} lg={1}>
        //             {/* <Spinner animation="border" role="status">
        //                 <span className="visually-hidden">Loading...</span>
        //             </Spinner> */}
        //             <Spinner animation="border" variant="secondary" />
        //         </Placeholder>
        //         {/* <Placeholder as={Card.Img} animation="glow" lg={15} /> */}
        //         {/* <Card.Img variant="top" as={Card.Img} animation="glow" style={{ width: "286px", height: "180px" }} /> */}
        //         <Card.Body>
        //             <Placeholder as={Card.Title} animation="glow">
        //                 <Placeholder xs={6} />
        //             </Placeholder>
        //             <Placeholder as={Card.Text} animation="glow">
        //                 <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        //                 <Placeholder xs={6} /> <Placeholder xs={8} />
        //             </Placeholder>
        //             <Placeholder.Button variant="primary" xs={6} />
        //         </Card.Body>
        //     </Card>
        // </div>
    )
}
