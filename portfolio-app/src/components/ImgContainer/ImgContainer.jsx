import './_imgContainer.scss';

//-----------------------------------------

export default function ImgContainer({
    src,
    alt,
    width,
    height,
    variant,
    loading,
}) {
    return (
        <div className={`img-container img--${width}${height}${variant}`}>
            <img
                src={process.env.PUBLIC_URL + src}
                alt={alt}
                loading={loading}
                style={{
                    width: `${width}`,
                    height: `${height}`,
                }}
            />
        </div>
    );
}
