import * as C from './styles';

type Props = {
    title: string;
    value: string;
    onSubmit: () => void;
    onChange: () => void;
}

export const UploadFoto = ({ title, onSubmit, onChange}: Props) => {
    return (
        <C.Container>
            <form onSubmit={onSubmit}>
                <label>Foto:  </label>
                    <input
                        type="file"
                        title={title}
                        onChange={onChange}
                    />
                <br></br>
                <button type="submit"> Salvar ...</button>
            </form>
        </C.Container>
    );
}
