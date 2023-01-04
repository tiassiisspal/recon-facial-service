import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        
                        <SidebarItem
                            title="Enviar"
                            description="Enviar foto(s)"
                            icon="foto"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="Comparar"
                            description="Comparar foto(s)"
                            icon="comparar"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title="Analisar"
                            description="Analisar foto(s)"
                            icon="analisar"
                            path="/step3"
                            active={state.currentStep === 3}
                        />

                        <SidebarItem
                            title="Salvar"
                            description="Como te achar"
                            icon="salvar"
                            path="/step3"
                            active={state.currentStep === 4}
                        />

                        <SidebarItem
                            title="Dashboard"
                            description="Dashboard do Reconhecimento"
                            icon="dashboard"
                            path="/step3"
                            active={state.currentStep === 5}
                        />
                        
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}