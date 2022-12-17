
export const MessageError = ({ message, userName }) => {
    return (
        <section className="errorContent">
            <p> <b>{userName}</b> {message}</p>
            <img className='CatCarey' src="https://user-images.githubusercontent.com/101679628/207995471-bfee6c2a-4d69-4d6b-a1c2-643e712015f6.png" alt="catCarey" />
        </section>
    )
}