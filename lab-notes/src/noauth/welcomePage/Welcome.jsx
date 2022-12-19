import { useState } from 'react'
import { Logo } from '../../elements/Logo'
import './welcome.css'
import { registerWithGoogle, registerGitHub } from '../../lib/provaiders.js'
import { MessageError } from '../../elements/MessageError'

export const Welcome = ({ catchProvider, allNotes, setHideMichi, setCatchProvaider }) => {

    return (
        <div className='welcome'>
            <section className='left'>
                <Logo />
                <img className='catDescription' src="https://user-images.githubusercontent.com/101679628/207448832-9fda47e3-caa4-4c85-a6f1-8844e9ce5e9c.png" alt="Descripcion de la app por un gatito" />
            </section>
            <section className='rigth'>
                <button className='googleBtn' onClick={() => registerWithGoogle(allNotes, setHideMichi, setCatchProvaider)}>Continua con Google</button>
                <button className='gitHubBtn' onClick={() => registerGitHub(setCatchProvaider)}>Continua con GitHub</button>
                {catchProvider && <MessageError message='Prueba con otra cuenta' userName='¡Ha ocurrido un error!' />}
            </section>
        </div>
    )
}