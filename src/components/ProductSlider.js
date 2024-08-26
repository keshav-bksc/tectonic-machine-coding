import { useEffect, useRef, useState } from 'react';
import ProductImage1 from '../assets/image1.jpeg';
import ProductImage2 from '../assets/image2.jpeg';
import ProductImage3 from '../assets/image3.jpeg';
import ProductImage4 from '../assets/image4.jpeg';
import './ProductSlider.css';
import { Link } from 'react-router-dom';

const ProductSlider = () => {
    const slides = [ProductImage1, ProductImage2, ProductImage3, ProductImage4];
    const [cur, setCur] = useState(0);
    const [progress, setProgress] = useState(0);
    const ref = useRef();
    const ref2 = useRef();

    useEffect(() => {
        console.log(cur);
    }, [cur])

    const prev = () => {setCur((cur) => cur === 0 ? slides.length - 1 : cur - 1)};

    const next = () => {setCur((cur) => cur === slides.length - 1 ? 0 : cur + 1)};

      useEffect(() => {
        setProgress(0);

        ref2.current = setInterval(() => {
            setProgress((prev) => prev+20);
        }, 1000)

        return () => clearInterval(ref2.current);

      }, [cur])


    useEffect(() => {
        ref.current = setInterval(() => {
            setCur((cur) => cur === slides.length -1 ? 0 : cur + 1);
        }, [5000])

        return () => clearInterval(ref.current);
    }, [])

    return (
        <div className='wrapper'>
            <div className='container' style={{transform: `translateX(-${cur * 100}%)`}}>
                {slides.map((s, idx) => (
                    <img key={idx} src={s} alt={`Product ${idx}`} width='300px' height='460px'/>
                ))}
            </div>
            <div className='btns'>
                <button className='btn' onClick={prev}>{'<'}</button>
                <button className='btn' onClick={next}>{'>'}</button>
            </div>
           
            <Link to='/product-detail'>
                <button className='product-btn'>View Product</button>
            </Link>
            <div className='indicators'>
                {slides.map((_,idx) => (
                    <div className='progress-bar'>
                        <div className='progress-bar-fill' style={{
                            width: idx === cur ? `${progress}%` : idx > cur ? '0%' : idx < cur ? '100%' : '',
                        }}>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductSlider;
