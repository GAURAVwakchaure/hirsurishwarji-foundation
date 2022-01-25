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
                        src="data:image/jpeg;base64,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"
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
