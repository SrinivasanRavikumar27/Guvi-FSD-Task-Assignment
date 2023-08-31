
import React from 'react'
import './App.css'

function App() {

  return React.createElement(
    'section',
    { className: 'pricing py-5' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'row' },
        // Free Tier
        React.createElement(
          'div',
          { className: 'col-lg-4' },
          React.createElement(
            'div',
            { className: 'card mb-5 mb-lg-0' },
            React.createElement(
              'div',
              { className: 'card-body' },
              React.createElement('h5', { className: 'card-title text-muted text-uppercase text-center' }, 'Free'),
              React.createElement('h6', { className: 'card-price text-center' }, '$0', React.createElement('span', { className: 'period' }, '/month')),
              React.createElement('hr', null),
              React.createElement(
                'ul',
                { className: 'fa-ul' },
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Single User'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), '5GB Storage'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Unlimited Public Projects'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Community Access'),
                React.createElement('li', { className: 'text-muted' }, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' })), 'Unlimited Private Projects'),
                React.createElement('li', { className: 'text-muted' }, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' })), 'Dedicated Phone Support'),
                React.createElement('li', { className: 'text-muted' }, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' })), 'Free Subdomain'),
                React.createElement('li', { className: 'text-muted' }, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' })), 'Monthly Status Reports')
              ),
              React.createElement(
                'div',
                { className: 'd-grid' },
                React.createElement('a', { href: '#', className: 'btn btn-primary text-uppercase' }, 'Button')
              )
            )
          )
        ),
        // Plus Tier
        React.createElement(
          'div',
          { className: 'col-lg-4' },
          React.createElement(
            'div',
            { className: 'card mb-5 mb-lg-0' },
            React.createElement(
              'div',
              { className: 'card-body' },
              React.createElement('h5', { className: 'card-title text-muted text-uppercase text-center' }, 'Plus'),
              React.createElement('h6', { className: 'card-price text-center' }, '$9', React.createElement('span', { className: 'period' }, '/month')),
              React.createElement('hr', null),
              React.createElement(
                'ul',
                { className: 'fa-ul' },
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), React.createElement('strong', null, '5 Users')),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), '50GB Storage'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Unlimited Public Projects'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Community Access'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Unlimited Private Projects'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Dedicated Phone Support'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Free Subdomain'),
                React.createElement('li', { className: 'text-muted' }, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' })), 'Monthly Status Reports')
              ),
              React.createElement(
                'div',
                { className: 'd-grid' },
                React.createElement('a', { href: '#', className: 'btn btn-primary text-uppercase' }, 'Button')
              )
            )
          )
        ),
        // Pro Tier
        React.createElement(
          'div',
          { className: 'col-lg-4' },
          React.createElement(
            'div',
            { className: 'card' },
            React.createElement(
              'div',
              { className: 'card-body' },
              React.createElement('h5', { className: 'card-title text-muted text-uppercase text-center' }, 'Pro'),
              React.createElement('h6', { className: 'card-price text-center' }, '$49', React.createElement('span', { className: 'period' }, '/month')),
              React.createElement('hr', null),
              React.createElement(
                'ul',
                { className: 'fa-ul' },
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), React.createElement('strong', null, 'Unlimited Users')),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), '150GB Storage'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Unlimited Public Projects'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Community Access'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Unlimited Private Projects'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Dedicated Phone Support'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), React.createElement('strong', null, 'Unlimited'), ' Free Subdomains'),
                React.createElement('li', null, React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' })), 'Monthly Status Reports')
              ),
              React.createElement(
                'div',
                { className: 'd-grid' },
                React.createElement('a', { href: '#', className: 'btn btn-primary text-uppercase' }, 'Button')
              )
            )
          )
        )
      )
    )
  );

}

export default App
