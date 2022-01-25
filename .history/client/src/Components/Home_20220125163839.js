import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Home() {
    return (
        <div class ="container">
            <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/151827.jpg"
                        alt="First slide"
                        width="1200"
                        height="400"
                    />
                    {/* <Carousel.Caption>
                        <h3 class="Flable">JAI JINENDRA</h3>
                        <p class="fldetail">Faith and Prayer both are invisible, but they make impossible things possible..</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/735833.jpg"
                        alt="Second slide"
                        width="1200"
                        height="400"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://kcd.org.uk/wordpress/wp-content/uploads/2020/04/WEBSITE-Risen-Ascended-Glorified-1200x400.jpg"
                        alt="Third slide"
                        width="1200"
                        height="400"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/1119361.jpg"
                        alt="Third slide"
                        width="1200"
                        height="400"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            </div>

        </div>
    )
}
