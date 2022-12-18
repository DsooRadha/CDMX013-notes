
import './loading.css'
import { Logo } from './Logo'

export const Loading = () => {
    return (
        <div className="loading">

                {/* <img className='agryCat' src="https://user-images.githubusercontent.com/101679628/208126186-18e796c3-7d1e-4a8a-9862-fe949f173ea3.png" alt="Angry cat" />
      
            <section className='loadingLogo'>
                <Logo  /> */}
                <img className='loadingGif' src="https://user-images.githubusercontent.com/101679628/207739070-075e176a-2a41-43af-97f4-63d6ecbd0dbd.gif" alt="loading" />
            {/* </section> */}


        </div>
    )
}