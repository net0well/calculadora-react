import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { CalculatorScreenStyled, Easteregg } from "./calculatorScreen.Styled";

import video from "/gtaSa.mp4"

interface CalculatorScreenType {
  text: string
}

export function CalculatorScreen({ text }:CalculatorScreenType) {
  
  const divRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [render, setRender] = useState(false)

  useEffect(() => {
    const div = divRef.current
    if(div) {
      div.scrollLeft = div.scrollWidth - div.clientWidth
    }
  },[text])

  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    const container = e.currentTarget
    container.scrollLeft += e.deltaY * 0.1
  }
  useEffect(() => {
    if(text === '389,,/+++789') {
      setRender(true)
      videoRef.current?.play()
    }else {
      setRender(false)
      videoRef.current?.pause()
    }
  }, [text]) 


  return(
    <CalculatorScreenStyled>
      <Easteregg render={render}>
        <video ref={videoRef} src={video} controls={false} ></video>
      </Easteregg>
      <div ref={divRef} onWheel={handleScroll}>
        {text}
      </div>
    </CalculatorScreenStyled>
  )
}