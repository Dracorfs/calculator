import { createRoot } from 'react-dom/client'
import { Calculator } from './Calculator'
import './index.css'

createRoot(
    document.getElementById('root')
).render(
    <Calculator />
)