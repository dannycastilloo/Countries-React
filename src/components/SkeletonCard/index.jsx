import './index.css'

export const SkeletonCard = () => {
    return (
        <article className='skeleton-card'>
            <div className='skeleton-img'></div>
            <div className='skeleton-bottom'>
                <div className='skeleton-flag'></div>
                <div className='skeleton-data'>
                    <div className='skeleton-name'></div>
                    <div className='skeleton-continent'></div>
                </div>
            </div>
        </article>
    )
}