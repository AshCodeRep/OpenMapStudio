import {i as getReact, t as getClient} from './assets/framework-CXnKph_e.js';
import App from './assets/page-D7Nn_9ji.js';
const React=getReact();
const client=getClient();
const root=document.getElementById('root');
// React 19 framework chunk exposes hydrateRoot only; hydrate empty root with recovered app.
client.hydrateRoot(root, React.createElement(App));
