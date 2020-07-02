import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>,
    <script>
      if (typeof window !== 'undefined' && window.netlifyIdentity) {
        typeof window !== 'undefined' && window.netlifyIdentity.on('init', user => {
          if (!user) {
            typeof window !== 'undefined' && window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/';
            });
          }
        })
      }
    </script>
  ])
}