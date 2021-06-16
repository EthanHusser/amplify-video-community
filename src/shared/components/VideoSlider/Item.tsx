import React from 'react'
import { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import SliderContext from './Context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import { fetchThumbnail } from '../../utilities'
import styled from 'styled-components'
import { vodAsset } from '../../../models'

export const StyledItem = styled.div`
    flex: 0 0 19.7%;
    transition: transform 300ms ease 100ms;
    margin: 0 2px;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        vertical-align: top;
    }

    &:hover {
        cursor: pointer;
    }
`

type ItemProps = {
    movie: vodAsset
}

const Item = ({ movie }: ItemProps) => {
    const [thumbnailUrl, setThumbnailUrl] = useState<string>('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        ;(async () => {
            try {
                if (movie.thumbnail) {
                    setLoading(true)
                    const data = await fetchThumbnail(movie)
                    setThumbnailUrl(data as string)
                    setLoading(false)
                }
            } catch (error) {
                console.error('item.tsx(fetchThumbnail):')
            }
        })()
    }, [movie])

    return (
        <SliderContext.Consumer>
            {(consumer) => {
                const isActive =
                    consumer?.currentSlide &&
                    consumer?.currentSlide.id === movie.id

                return loading ? (
                    <Loader
                        type="Rings"
                        color="#FFA41C"
                        height={100}
                        width={100}
                        timeout={3000}
                    />
                ) : (
                    <StyledItem
                        ref={consumer?.elementRef}
                        className={isActive ? 'item--open' : ''}
                        onClick={() => consumer?.onSelectSlide(movie)}
                    >
                        <img src={thumbnailUrl as string} alt="thumbnail" />
                        <ShowDetailsButton />
                        {isActive && <Mark />}
                    </StyledItem>
                )
            }}
        </SliderContext.Consumer>
    )
}

export default Item
