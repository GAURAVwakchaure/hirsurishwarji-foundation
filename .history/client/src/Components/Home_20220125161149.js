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
                        src="https://images.jdmagicbox.com/quickquotes/images_main/duragres_glazed_vitrified_(grande_cementor_grey_600_x_1200_mm)_139481469379743800.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 class="Flable">First slide label</h3>
                        <p class="fldetail">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/collection/190727/1200x320"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/collection/190727/1200x320"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>

        </div>
    )
}
