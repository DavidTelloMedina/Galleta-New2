
const FortuneGalleta = (props)=>{
    const {data}=props
    return(
        <article>
            <h1>Fortune Cookies</h1>
            <h2>
                <div className="frase">
                    <p>
                        {data.phrase}
                    </p>

                </div>
            </h2>
            <h3>
                <div className="autor">
                    <p>
                        {data.author}
                    </p>
                </div>
            </h3>
        </article>
    )
}
export default FortuneGalleta