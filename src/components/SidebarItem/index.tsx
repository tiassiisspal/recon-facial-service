import { Link } from 'react-router-dom';
import * as C from './styles';
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';
import { ReactComponent as FotoIcon } from '../../svgs/foto.svg';
import { ReactComponent as CompararIcon } from '../../svgs/comparar.svg';
import { ReactComponent as AnalisarrIcon } from '../../svgs/analisar.svg';
import { ReactComponent as SalvarIcon } from '../../svgs/salvar.svg';
import { ReactComponent as DashboardIcon } from '../../svgs/dashboard.svg';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'foto' &&
                        <FotoIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'comparar' &&
                        <CompararIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'analisar' &&
                        <AnalisarrIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'salvar' &&
                        <SalvarIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'dashboard' &&
                        <DashboardIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width={24} height={24} />
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}