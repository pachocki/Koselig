import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';



const ScrollToTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 3000){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 3000){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className="scrolltop fill-green-400" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollToTop;