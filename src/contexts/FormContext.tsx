// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: number;
    id:string;
    foto: string;
    level: 0 | 1;
    email: string;
    github: string;
};

type Action = {
    type: FormActions;
    payload: any;
};

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
};

type FormProviderProps = {
    children: ReactNode
};

const initialData: State = {
    currentStep: 0,
    id: '',
    foto: '',
    level: 0,
    email: '',
    github: ''
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setId,
    setFoto,
    setLevel,
    setEmail,
    setGithub
};

const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setId:
            return {...state, id: action.payload};
        case FormActions.setFoto:
            return {...state, foto: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, github: action.payload};
        default:
            return state;
    }
};

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
};