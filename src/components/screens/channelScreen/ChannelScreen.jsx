import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosByChannel } from '../../../redux/actions/videosAction'
import { Container, Col, Row } from 'react-bootstrap'
import Videos from '../../pages/Videos'
import VideoSkeleton from '../../skeleton/VideoSkeleton'

const ChannelScreen = () => {
    const { channelId } = useParams()

    const { videos, loading } = useSelector(state => state.ChennelDataReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideosByChannel(channelId))
    }, [channelId])
    return (
        <>
            <Container>
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
            </Container>
        </>
    )
}

export default ChannelScreen
