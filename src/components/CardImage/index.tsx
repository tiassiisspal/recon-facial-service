import * as C from './styles';

type Props = {
    title: string;
    description: string;
    icon: string;
    imagefoto: string;
    selected: boolean;
    onClick: () => void;
}

export const CardImage = ({title, description, icon, imagefoto, selected, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
                <C.ImageFoto>{imagefoto}</C.ImageFoto>
            </C.Info>
        </C.Container>
    );
}