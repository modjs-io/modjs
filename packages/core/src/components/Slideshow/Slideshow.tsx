import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'
import {
    LeftArrowIcon,
    RightArrowIcon,
    SquareIcon,
} from '../../../../icons/src/index'
import { Button } from '../../index'

interface ModSlideshowProps extends React.TouchEventHandler<HTMLDivElement> {
    onTouchStart?: (event: TouchEvent) => void
    onTouchMove?: (event: TouchEvent) => void
    currentIndex?: number
    data?: []
    children: React.ReactNode
}

const forwardProps = (prop: string) => !['currentIndex', 'data'].includes(prop)

const ModSlideshow = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSlideshowProps>`
    overflow: hidden;
    display: block;
`

const ModSlideshowItems = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSlideshowProps>`
    display: flex;
    transition: all 150ms linear;
    -ms-overflow-style: none;
    scrollbar-width: none;
    transform: translateX(-${props => (props.currentIndex ?? 0) * 100}%);
    &:-webkit-scrollbar {
        display: none;
    }
    &:-webkit-scrollbar {
        display: none;
    }
`

const ModSlideshowNavigation = styled.div.withConfig({
    shouldForwardProp: prop => forwardProps(prop),
})<ModSlideshowProps>`
    display: flex;
    justify-content: center;
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xdense};
    justify-content: center;
`

const Slideshow = ({ data, children, ...props }: ModSlideshowProps) => {
    const [touchPosition, setTouchPosition] = useState(0)
    const [currentIndex, setcurrentIndex] = useState(0)
    const [length, setLength] = useState(data ? data.length : 0)

    const handleTouchStart = (event: TouchEvent) => {
        const touchDown = event.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const next = () => {
        if (currentIndex < length - 1) {
            setcurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setcurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchMove = (event: TouchEvent) => {
        event.preventDefault()
        const touchDown = touchPosition
        if (touchDown === null) {
            return
        }
        const currentTouch =
            'touches' in event
                ? event.touches[0].clientX
                : (event as MouseEvent).clientX
        const diff = touchDown - currentTouch
        if (diff > 5) {
            next()
        }
        if (diff < -5) {
            prev()
        }
        setTouchPosition(0)
    }

    const getExact = (count: number) => {
        setcurrentIndex(count)
    }

    useEffect(() => {
        setLength(data ? data.length : 0)
    }, [])

    return (
        <>
            <ModSlideshow
                data={data}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                {...props}
                data-test="slideshow"
            >
                <ModSlideshowItems
                    currentIndex={currentIndex}
                    data-test="slideshow-items"
                >
                    {children}
                </ModSlideshowItems>
                <ModSlideshowNavigation data-test="slideshow-navigation">
                    <Button
                        type="button"
                        onClick={prev}
                        disabled={currentIndex > 0 ? false : true}
                        variant="transparent"
                        data-testid="prev"
                    >
                        <LeftArrowIcon
                            height="3rem"
                            width="3rem"
                            fill={currentIndex > 0 ? 'primary' : '#8e8e8e'}
                        />
                    </Button>
                    {data &&
                        data.map(obj => (
                            <Button
                                border="light"
                                p="xdense"
                                type="button"
                                key={obj['id']}
                                onClick={() => getExact(obj['count'])}
                                variant="icon"
                                data-testid={`index-${obj['count']}`}
                                disabled={
                                    currentIndex === obj['count'] ? true : false
                                }
                                startAdornment={
                                    <SquareIcon
                                        fill={
                                            currentIndex === obj['count']
                                                ? '#8e8e8e'
                                                : 'primary'
                                        }
                                        height="0.5rem"
                                        width="0.5rem"
                                    />
                                }
                            />
                        ))}
                    <Button
                        type="button"
                        onClick={next}
                        disabled={currentIndex < length - 1 ? false : true}
                        variant="transparent"
                        data-testid="next"
                    >
                        <RightArrowIcon
                            height="3rem"
                            width="3rem"
                            fill={
                                currentIndex < length - 1
                                    ? 'primary'
                                    : '#8e8e8e'
                            }
                        />
                    </Button>
                </ModSlideshowNavigation>
            </ModSlideshow>
        </>
    )
}

export default withLayout(Slideshow)
