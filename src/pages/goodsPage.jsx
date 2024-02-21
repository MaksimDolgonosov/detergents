import '../css/goodsPage.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination';
import { useGetAllGoodsQuery } from '../query/goodsApiSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { addBasket } from '../slices/userSlice';

import { useAddBasketMutation } from '../query/userApiSlice';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export function GoodsPage() {
    const  activeCategory  = useSelector(state => state.category.activeCategory)
    const quantityOfGoodsOnPage = 12;
    const [curentPage, setCurentPage] = useState(1);
    const { data: goods = [], isLoading } = useGetAllGoodsQuery();
    const dispatch = useDispatch();
    const filteredGoods = activeCategory === "Все" ? goods : goods.filter(item => item.category === activeCategory);


    const [updateBasket, isLoad] = useAddBasketMutation();

    const addBasketHandle = (id, title, price) => {
        dispatch(addBasket({ title, price }));
        updateBasket({ id, title, price }).unwrap();
    }



    const goodsList = filteredGoods.map(good => {
        return (
            // <Col className="p-2 gx-5" sm={{ span: 5, offset: 1 }} xs={{ span: 11, offset: 0 }} xxl={{ span: 2, offset: 0 }} style={{ display: "flex", justifyContent: "center" }}>
            <Card className='goods__card' key={good.id} style={{ width: '196px', height: '394px' }}>
                <Card.Img className='goods__img' variant="top" src={good.image} style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
                <Card.Body className='goods__body'>
                    <Card.Title className='goods__title'>{good.title}</Card.Title>
                    <Card.Text className='goods__text'>
                        {good.description}
                    </Card.Text>
                    <div className='goods__price'>{good.price} руб.</div>
                    <Button className='goods__btn' variant="primary" onClick={() => addBasketHandle(good.id, good.title, good.price)}>В корзину</Button>
                </Card.Body>
            </Card>
            //  </Col> 
        )
    })




    // const LoadingCard = ({ id }) => {
    //     return (
    //         // <Spinner animation="border" variant="secondary" style={{margin: "200px auto" }}/>
    //         <Card key={Card.key} className='goods__card' style={{ width: '196px', height: '394px' }}>
    //             <Placeholder animation="glow" style={{ width: "196px", height: "196px", display: "flex", justifyContent: "center", alignItems: "center" }} lg={1}>
    //                 <Spinner animation="border" variant="secondary" />
    //             </Placeholder>
    //             <Card.Body>
    //                 <Placeholder as={Card.Title} animation="glow">
    //                     <Placeholder xs={6} />
    //                 </Placeholder>
    //                 <Placeholder as={Card.Text} animation="glow">
    //                     <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
    //                     <Placeholder xs={6} /> <Placeholder xs={8} />
    //                 </Placeholder>
    //                 <Placeholder.Button style={{ width: '100%' }} className='goods__btn' variant="primary" xs={6} />
    //             </Card.Body>
    //         </Card>
    //     )
    // }
    // const loadingList = new Array(quantityOfGoodsOnPage).fill(<LoadingCard />);
    const loadingList = new Array(quantityOfGoodsOnPage).fill(null).map((good, index) => {
        return (
            // <Col md="auto">
            <Card key={index} className='goods__card' style={{ width: '196px', height: '394px' }}>
                <Placeholder animation="glow" style={{ width: "196px", height: "196px", display: "flex", justifyContent: "center", alignItems: "center" }} lg={1}>
                    <Spinner animation="border" variant="secondary" />
                </Placeholder>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button style={{ width: '100%' }} className='goods__btn' variant="primary" xs={6} />
                </Card.Body>
            </Card>
            //</Col>
        )
    })
    //const loadingList = new Array(quantityOfGoodsOnPage).map((item, index) => <LoadingCard id={index} />);
    // const loadingList = new Array(quantityOfGoodsOnPage).map((item, index) => {
    //     return (
    //         <Card key={index} className='goods__card' style={{ width: '196px', height: '394px' }}>
    //             <Placeholder animation="glow" style={{ width: "196px", height: "196px", display: "flex", justifyContent: "center", alignItems: "center" }} lg={1}>
    //                 <Spinner animation="border" variant="secondary" />
    //             </Placeholder>
    //             <Card.Body>
    //                 <Placeholder as={Card.Title} animation="glow">
    //                     <Placeholder xs={6} />
    //                 </Placeholder>
    //                 <Placeholder as={Card.Text} animation="glow">
    //                     <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
    //                     <Placeholder xs={6} /> <Placeholder xs={8} />
    //                 </Placeholder>
    //                 <Placeholder.Button className='goods__btn' variant="primary" xs={6} />
    //             </Card.Body>
    //         </Card>
    //     )
    // })

    const paginationItems = filteredGoods.map((item, index) => {
        if (index % quantityOfGoodsOnPage === 0) {

            if (((index / quantityOfGoodsOnPage) + 1) === curentPage) {
                return (
                    <Pagination.Item onClick={() => setCurentPage((index / quantityOfGoodsOnPage) + 1)} active key={(index / quantityOfGoodsOnPage) + 1}>{(index / 12) + 1}</Pagination.Item>
                )
            } else {
                return (
                    <Pagination.Item onClick={() => setCurentPage((index / quantityOfGoodsOnPage) + 1)} key={(index / quantityOfGoodsOnPage) + 1}>{(index / quantityOfGoodsOnPage) + 1}</Pagination.Item>
                )
            }

        }
        return null;

    })




    return (

        <section className='goods'>

            {/* <Container fluid>
                <Row className="justify-content-center">
                    {isLoading ? loadingList : goodsList.slice(quantityOfGoodsOnPage * (curentPage - 1), quantityOfGoodsOnPage * (curentPage - 1) + quantityOfGoodsOnPage)}
                </Row>
            </Container> */}



            <div className='goods__list' style={{ gridTemplateRows: `repeat(${quantityOfGoodsOnPage / 5}, 394px )` }}>
                {isLoading ? loadingList : goodsList.slice(quantityOfGoodsOnPage * (curentPage - 1), quantityOfGoodsOnPage * (curentPage - 1) + quantityOfGoodsOnPage)}
            </div>

            <div className='goods__pagination'>
                <Pagination style={{ textAlign: "center", margin: '10px auto' }}>
                    <Pagination.First onClick={() => setCurentPage(1)} />
                    <Pagination.Prev onClick={() => 1 < curentPage ? setCurentPage(curentPage - 1) : null} />
                    {paginationItems}
                    {/* <Pagination.Ellipsis />
                    <Pagination.Item>{goods.length / quantityOfGoodsOnPage}</Pagination.Item> */}
                    <Pagination.Next onClick={() => goods.length / quantityOfGoodsOnPage > curentPage ? setCurentPage(curentPage + 1) : null} />
                    <Pagination.Last onClick={() => setCurentPage(goods.length / quantityOfGoodsOnPage)} />
                </Pagination>
            </div>
            {/* {goods.length / quantityOfGoodsOnPage} */}
        </section>

    )
}
