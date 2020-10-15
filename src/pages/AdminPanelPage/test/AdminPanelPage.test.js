import ReactDOM from 'react-dom';

import { withAuthConsumer } from '../../../config/session';
import AdminPanelPage from '..';

describe('AdminPanelPage', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(withAuthConsumer(AdminPanelPage), div);
    });
});
