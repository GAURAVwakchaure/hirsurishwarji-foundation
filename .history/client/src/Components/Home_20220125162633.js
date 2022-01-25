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
                        width="1200"
                        height="400"
                    />
                    <Carousel.Caption>
                        <h3 class="Flable">JAI JINENDRA</h3>
                        <p class="fldetail">Faith and Prayer both are invisible, but they make impossible things possible..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.jdmagicbox.com/quickquotes/images_main/duragres_glazed_vitrified_(grande_cementor_dolomite_600_x_1200_mm)_139481452505677500.jpg"
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
                        src="https://images.jdmagicbox.com/quickquotes/images_main/duragres_glazed_vitrified_(grande_exp_claudia_white_600_x_1200_mm)_139481302012095500.jpg"
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
