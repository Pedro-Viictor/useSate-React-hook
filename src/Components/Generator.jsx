import { useState } from 'react'
import styleGenerator from './generator.module.css'

const Generator = () => {
    const [password, setPassword] = useState('')

    function generate() {
        const characters = 'fdwef23r3y327837&*#@¨&78, @&*#Y@!&*#$@,12e21ge7827182378123y71823y7312'
        let newPassword = ''
        for (let i = 0; i < passwordSize; i++) {
            const position = Math.floor(Math.random() * characters.length)
            newPassword += characters[position]
        }
        setPassword(newPassword)
        setCopyText('Copiar!')
    }

    const [copyText, setCopyText] = useState('Copiar');

    function copyToClipboard() {
        window.navigator.clipboard.writeText(password)
        setCopyText('Copiado!')
    }

    const [passwordSize, setPasswordSize] = useState(12);

    const [showInput, setShowInput] = useState(false)

    return (
        <div>
            <main className={styleGenerator.gerador}>
                <h1>Gerador de Senhas</h1>
                <div>
                    <label htmlFor="showInput">Costumizar o tamanho: </label>
                    <input
                        type="checkbox"
                        id='showInput'
                        value={showInput}
                        onChange={() => setShowInput(currentState => !currentState)}
                    />
                </div>
                {showInput ? (
                    <div className={styleGenerator.form}>
                        <label htmlFor="passwordSize">Tamanho: </label>
                        <input
                            type="number"
                            id='passwordSize'
                            min={1}
                            value={passwordSize}
                            onChange={(ev) => setPasswordSize(ev.target.value)}
                        />
                    </div>
                ) : null}
                <div className={styleGenerator.botoes}>
                    <button onClick={generate} className={styleGenerator.btn}>Gerar uma senha de {showInput ? passwordSize : 12} caracteres</button>
                    <button onClick={copyToClipboard} className={styleGenerator.btn}>{copyText}</button>
                </div>
                <p>{password}</p>
            </main>
        </div >
    )
}

export default Generator