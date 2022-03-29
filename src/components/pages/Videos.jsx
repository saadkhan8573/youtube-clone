import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import './_videos.scss'
import moment from 'moment'
import numeral from 'numeral'
import request from '../../api'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router-dom'

const Videos = ({ video }) => {
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);
    const history = useHistory()

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    const _videoId = video?.id?.videoId || video?.contentDetails.videoId || video?.id

    useEffect(() => {
        const get_video_details = async () => {
            const {
                data: { items },
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId,
                },
            })
            console.log(items[0])
            setDuration(items[0].contentDetails?.duration)
            setViews(items[0].statistics?.viewCount)
        }
        get_video_details()
    }, [_videoId])

    useEffect(() => {
        const get_channel_icon = async () => {
            const {
                data: { items },
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: video.snippet.channelId,
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    }, [video.snippet.channelId])

    const handleClick = () => {
        history.push(`/youtube-clone/watch/${_videoId}`)
    }

    return (
        <>
            <div className="video" onClick={handleClick} title={video.snippet.title}>
                <div className="video__top">
                    <LazyLoadImage
                        alt={video.snippet.title}
                        effect="blur"
                        src={video.snippet.thumbnails.medium.url}
                    />
                    <span className="video__top__duration">{_duration}</span>
                </div>
                <div className="video__title">
                    {video.snippet.title}
                </div>
                <div className="video__details">
                    <span>
                        <AiFillEye /> {numeral(views).format('0.a')} Views •{' '}{moment(video.snippet.publishedAt).fromNow()}
                    </span>
                </div>
                <div className="video__channel">
                    <LazyLoadImage
                        alt={video.snippet.channelTitle}
                        effect="blur"
                        src={channelIcon?.url}
                    />
                    <p>{video.snippet.channelTitle}</p>
                </div>
            </div>
        </>
    )
}

export default Videos
