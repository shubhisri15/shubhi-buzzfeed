type TypeProps = {
    img: string,
    title: string,
    description: string,
    link: string
}
export default function Tile({ img='', title='', description='', link=''}: TypeProps) {
    return (
        <a href={link} target='_blank' rel="noopener noreferrer">
            <section 
                className='game-tile'
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className='tile-overlay'>
                    <h3>{title}</h3>
                    <p>{description}</p>    
                </div>
            </section>
        </a>
    )
}