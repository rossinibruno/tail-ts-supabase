import { createContext, useContext } from 'react';
import toast from 'react-hot-toast';
import AlertDanger from '../components/alert-danger';
import AlertInfo from '../components/alert-info';
import AlertSuccess from '../components/alert-success';
import AlertWarning from '../components/alert-warning';

interface ToastData {
  text: string;
  type: string;
}

interface ToastContextData {
  addToast(text: ToastData): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within an ToastProvider');
  return context;
}

type Props = {
  children: React.ReactNode;
};

function ToastProvider({ children }: Props) {
  function addToast(value: ToastData) {
    const { text, type } = value;

    toast.custom((t) => (
      <div className="">
        {type === 'info' && <AlertInfo text={text} t={t} />}
        {type === 'success' && <AlertSuccess text={text} t={t} />}
        {type === 'warning' && <AlertWarning text={text} t={t} />}
        {type === 'error' && <AlertDanger text={text} t={t} />}
      </div>
    ));
  }

  const value: ToastContextData = {
    addToast
  };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export { useToast, ToastProvider };
