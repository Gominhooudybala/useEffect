import { useState, useEffect } from "react"
import axios from "axios"

export function Exemplo2() {
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((Response) => {
                setLogradouro(Response.data.logradouro)
                setBairro(Response.data.bairro)
                setLocalidade(Response.data.localidade)
                setEstado(Response.data.estado)
                setUf(Response.data.uf)
            })
        }
    }, [cep])

    return (
        <section>
            <h2>Exemplo 2: Busca CEP</h2>

            <div>
                <input type="number" id="cep" placeholder="Digite seu CEP" onChange={(input) => setCep(input.target.value)} />

                
                 {cep.length === 8 && (
                    <>
                         <h3>Seu endereço:</h3>
                        <ul>
                          <li>Rua: {logradouro}</li>
                          <li>Bairro: {bairro}</li>
                          <li>Cidade: {localidade}</li>
                          <li>Estado: {estado}</li>
                          <li>UF: {uf}</li>
                        </ul>
                    </>
                 )}
            </div>
        </section>
    )
}

