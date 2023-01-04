import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, useState } from 'react';
import { UploadFoto } from '../../components/UploadFoto';
import api from '../../config/configApi';

export const FormStep1 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();
    const [image, setImage] = useState('');
    const [status, setStatus] = useState({type: '', mensagem: ''});

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if(state.id !== '' && state.foto !== '') {
            history.push('/step2');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setId,
            payload: e.target.value
        });
    }

    const upLoadImage = async (image: string) => {
        //e.preventDefault();
        const formData = new FormData();
        formData.append('foto', image)

        const headers = {
            'headers': { 'Content-Type': 'application/json'}
        };

        await api.post("/upload-image", formData, headers)
        .then((response) => {
            setStatus({
                type: 'success',
                mensagem: response.data.mensagem
            });
        }).catch((err) => {
        if(err.response){
            setStatus({
                type: 'error',
                mensagem: err.response.data.mensagem
            });
        }else{
            setStatus({
                type: 'error',
                mensagem: "Erro: Tente mais tarde!"
            });
        }
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar enviando uma foto</h1>
                <p>Preencha o campo ID e selecione uma foto do seu computador.</p>
                <hr/>
                <label>
                    ID da foto
                    <input
                        name="id"
                        type="text"
                        autoFocus
                        placeholder={"Digite à ID da foto"}
                        value={state.id}
                        onChange={handleIdChange}
                    />
                </label>

                <br />

                <UploadFoto
                    title="Selecionar uma foto"
                    value={state.foto}
                    onChange={() => setImage(state.foto)}
                    onSubmit={() => upLoadImage(state.foto)}
                    //onChange={state=> setImage(e.target.files[0])}
                />

                {status.type === 'success'? <p style={{color: "green"}}>{status.mensagem}</p> : ""}
                {status.type === 'error'? <p style={{color: "#ff0000"}}>{status.mensagem}</p> : ""}

                <br></br>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}