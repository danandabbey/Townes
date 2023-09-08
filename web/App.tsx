import { createRoot } from 'react-dom/client';
import { GlobalContextProvider } from './src/components/context'
import App from './src/index';

const rootCon: any = document.getElementById('root')
const root:any = createRoot(rootCon);
root.render(
    <GlobalContextProvider>
            <App />
    </GlobalContextProvider>
);
