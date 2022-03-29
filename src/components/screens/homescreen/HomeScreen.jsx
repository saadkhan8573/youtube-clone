import React, { useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../../redux/actions/videosAction'
import Categories from '../../categoriesbar/Categories'
import Videos from '../../pages/Videos'
import InfiniteScroll from 'react-infinite-scroll-component'
import VideoSkeleton from '../../skeleton/VideoSkeleton'

const Screens = () => {
    const dispatch = useDispatch()
    const { videos, activeCategory, loading } = useSelector(state => state.VideosReducer)
    

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [])

    const fetchData = () => {
        if (activeCategory === "All") {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Categories />
                    </Col>
                </Row>
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className='spinner-border text-danger d-block mx-auto'></div>
                    }
                    className='row'>
                    <Row style={{ width: "95%" }}>
                        {!loading ? (
                            videos.map((video) => (
                                <Col lg={3} md={4} sm={6}>
                                    <Videos
                                        key={video.id}
                                        video={video}
                                    />
                                </Col>
                            ))
                        ) : (
                            [...Array(20)].map(() => (
                                <Col lg={3} md={4} sm={6}>
                                    <VideoSkeleton />
                                </Col>
                            ))
                        )}
                    </Row>
                </InfiniteScroll>
            </Container>
        </>
    )
}

export default Screens
