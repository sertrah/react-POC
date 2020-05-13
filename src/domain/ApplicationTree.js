import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider,  } from 'react-intl';
import { connect } from 'react-redux';

import TranslationPage from './I18n';
import User from './User';
import App from 'components/App';
import languageObject from './I18n/translations/messages';



export const ApplicationTree = (props) => {
    console.log("|||||||||||",props);
    
  return (
    <div>
      <Router>
        <IntlProvider locale={props.locale} messages={languageObject[props.locale]}>
            <Switch>
                <Route path="/" exact component={TranslationPage} />
                <Route exact path="/hola" component={App} />
                <Route path="/user" exact component={User} />
            </Switch>
        </IntlProvider>
      </Router>
    </div>
  );
};

ApplicationTree.defaultProps = {
  locale: 'ja',
};

ApplicationTree.propTypes = {
  locale: PropTypes.string,
};

const mapStateToProps = state => ({ locale: state.localeReducer.locale });

export default connect(mapStateToProps)(ApplicationTree);