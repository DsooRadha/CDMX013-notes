import { Logo } from "../../elements/Logo"
import './loading.css'

export const Loading = () => {
    return (
        <section>
            <div className="catUgry">
                <img className="loadingCat" src="https://user-images.githubusercontent.com/101679628/207740390-632c3b98-6e0e-4ec0-bda4-505dde2b6292.png" alt="catLoadingBaconCats" />
                <img src="https://user-images.githubusercontent.com/101679628/207739070-075e176a-2a41-43af-97f4-63d6ecbd0dbd.gif" alt="loadingGif" />
            </div>
            <Logo />
        </section>
    )
}