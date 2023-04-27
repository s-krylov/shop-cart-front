import ReactDOM from 'react-dom/client';
import {ContextStoreProvider} from "./components/store/context-store"

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextStoreProvider>
        <App/>
    </ContextStoreProvider>
);
