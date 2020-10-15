import ReactDOM from 'react-dom';

import { withAuthConsumer } from '../../../config/session';
import HomePage from '..';

describe('HomePage', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(withAuthConsumer(HomePage), div);
    });
});
